/**
 * Shown instead of the Studio when no Sanity project is configured, so the
 * route explains what to do rather than crashing on a missing project ID.
 */
export default function SetupNotice() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
        background: "#F5F6FA",
      }}
    >
      <div
        style={{
          maxWidth: 560,
          background: "white",
          borderRadius: 16,
          padding: "2.5rem",
          boxShadow: "0 1px 3px rgba(0,0,0,.08)",
        }}
      >
        <h1 style={{ fontSize: 22, marginTop: 0, color: "#0F1B2D" }}>
          Studio not configured yet
        </h1>
        <p style={{ color: "#555", lineHeight: 1.6, fontSize: 14 }}>
          The site is running on its bundled fallback content. To enable
          editing, create a Sanity project and add its credentials to
          <code
            style={{
              background: "#F5F6FA",
              padding: "2px 6px",
              borderRadius: 4,
              margin: "0 4px",
            }}
          >
            .env.local
          </code>
          :
        </p>
        <pre
          style={{
            background: "#0F1B2D",
            color: "#E6EDF3",
            padding: "1rem",
            borderRadius: 10,
            fontSize: 12.5,
            overflowX: "auto",
          }}
        >
{`NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production`}
        </pre>
        <p style={{ color: "#555", lineHeight: 1.6, fontSize: 14 }}>
          See <strong>CMS-SETUP.md</strong> in the repository for the full
          walkthrough, including seeding the existing content and images.
        </p>
      </div>
    </div>
  );
}
