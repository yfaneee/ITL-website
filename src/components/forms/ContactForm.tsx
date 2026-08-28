"use client";

import { useState } from "react";

import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

import {
  FieldRow,
  GdprConsent,
  SelectField,
  SubmitButton,
  TextAreaField,
  TextField,
} from "./fields";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  gdpr: boolean;
};

const EMPTY: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
  gdpr: false,
};

export default function ContactForm({ locale }: { locale: Locale }) {
  const [form, setForm] = useState<FormState>(EMPTY);
  const t = getDictionary(locale);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up form submission
  };

  const serviceOptions = [
    { value: "", label: t.form.serviceSelectPlaceholder },
    { value: "road", label: t.nav.road },
    { value: "air", label: t.nav.air },
    { value: "port", label: t.nav.port },
    { value: "customs", label: t.form.serviceCustoms },
    { value: "other", label: t.form.serviceOther },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FieldRow>
        <TextField
          name="firstName"
          label={t.form.firstName}
          placeholder={t.form.firstNamePlaceholder}
          value={form.firstName}
          onChange={handleChange}
          required
        />
        <TextField
          name="lastName"
          label={t.form.lastName}
          placeholder={t.form.lastNamePlaceholder}
          value={form.lastName}
          onChange={handleChange}
          required
        />
      </FieldRow>

      <FieldRow>
        <TextField
          name="email"
          type="email"
          label={t.form.email}
          placeholder={t.form.emailPlaceholder}
          value={form.email}
          onChange={handleChange}
          required
        />
        <TextField
          name="phone"
          type="tel"
          label={t.form.phone}
          placeholder={t.form.phonePlaceholder}
          value={form.phone}
          onChange={handleChange}
          required
        />
      </FieldRow>

      <FieldRow>
        <TextField
          name="company"
          label={t.form.company}
          placeholder={t.form.companyOptionalPlaceholder}
          value={form.company}
          onChange={handleChange}
        />
        <SelectField
          name="subject"
          label={t.form.service}
          value={form.subject}
          options={serviceOptions}
          onChange={handleChange}
        />
      </FieldRow>

      <TextAreaField
        name="message"
        label={t.form.message}
        placeholder={t.form.messagePlaceholder}
        value={form.message}
        onChange={handleChange}
        rows={5}
        required
      />

      <GdprConsent checked={form.gdpr} onChange={handleChange} locale={locale} />

      <SubmitButton>{t.form.submitMessage}</SubmitButton>
    </form>
  );
}
