"use client";

import Link from "next/link";
import type { ChangeEvent, ReactNode } from "react";

import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { localePath } from "@/i18n/navigation";

const inputClass =
  "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-200 transition";

function Label({ children, required }: { children: ReactNode; required?: boolean }) {
  return (
    <label className="block text-xs font-medium text-gray-500 mb-1.5">
      {children}
      {required && <span style={{ color: "var(--itl-blue)" }}> *</span>}
    </label>
  );
}

type FieldProps = {
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function TextField({ label, required, ...props }: FieldProps) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <input {...props} required={required} className={inputClass} />
    </div>
  );
}

export function TextAreaField({
  name,
  label,
  value,
  placeholder,
  rows = 4,
  required,
  onChange,
}: {
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        rows={rows}
        required={required}
        onChange={onChange}
        className={`${inputClass} resize-none`}
      />
    </div>
  );
}

export function SelectField({
  name,
  label,
  value,
  options,
  onChange,
}: {
  name: string;
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`${inputClass} text-gray-500`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

/** Two fields side by side on desktop, stacked on mobile. */
export function FieldRow({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>;
}

export function GdprConsent({
  checked,
  onChange,
  locale,
}: {
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  locale: Locale;
}) {
  const t = getDictionary(locale);

  return (
    <div className="flex items-start gap-3 pt-1">
      <input
        type="checkbox"
        id="gdpr"
        name="gdpr"
        checked={checked}
        onChange={onChange}
        required
        className="mt-0.5 w-4 h-4 shrink-0 cursor-pointer rounded"
        style={{ accentColor: "var(--itl-blue)" }}
      />
      <label
        htmlFor="gdpr"
        className="text-xs text-gray-500 leading-relaxed cursor-pointer"
      >
        {t.form.gdprBefore}{" "}
        <Link
          href={localePath(locale, "/privacy")}
          className="underline hover:opacity-80 transition-opacity"
          style={{ color: "var(--itl-blue)" }}
        >
          {t.common.privacyPolicy}
        </Link>{" "}
        {t.form.gdprAfter}{" "}
        <span className="text-gray-400">{t.common.required}</span>
      </label>
    </div>
  );
}

export function SubmitButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="submit"
      className="w-full py-3 rounded-[10px] text-white text-sm font-semibold transition-all duration-200 hover:brightness-90 active:scale-95 mt-2"
      style={{ backgroundColor: "var(--itl-blue)" }}
    >
      {children}
    </button>
  );
}
