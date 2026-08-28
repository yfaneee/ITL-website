import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

/**
 * Sanity calls this when content is published. Each page's fetch is tagged with
 * its document type, so publishing one document refreshes only the pages that
 * use it rather than rebuilding the site.
 *
 * Configure the webhook in Sanity: Manage → API → Webhooks, pointing at
 * https://<your-domain>/api/revalidate with the same secret as
 * SANITY_REVALIDATE_SECRET, and a projection of `{_type}`.
 */
export async function POST(request: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ _type: string }>(
      request,
      process.env.SANITY_REVALIDATE_SECRET
    );

    if (!isValidSignature) {
      return NextResponse.json(
        { message: "Invalid signature" },
        { status: 401 }
      );
    }

    if (!body?._type) {
      return NextResponse.json(
        { message: "Missing _type in webhook payload" },
        { status: 400 }
      );
    }

    // "max" purges every cached entry carrying this tag, whatever its lifetime.
    revalidateTag(body._type, "max");

    return NextResponse.json({ revalidated: true, tag: body._type });
  } catch (error) {
    console.error("[revalidate]", error);
    return NextResponse.json({ message: "Revalidation failed" }, { status: 500 });
  }
}
