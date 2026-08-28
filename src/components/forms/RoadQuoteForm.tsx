"use client";

import { useState } from "react";

import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

import {
  FieldRow,
  GdprConsent,
  SubmitButton,
  TextAreaField,
  TextField,
} from "./fields";

type FormState = {
  companyName: string;
  personalName: string;
  origin: string;
  industry: string;
  phone: string;
  cityCountry: string;
  destination: string;
  email: string;
  volume: string;
  additionalDetails: string;
  gdpr: boolean;
};

const EMPTY: FormState = {
  companyName: "",
  personalName: "",
  origin: "",
  industry: "",
  phone: "",
  cityCountry: "",
  destination: "",
  email: "",
  volume: "",
  additionalDetails: "",
  gdpr: false,
};

export default function RoadQuoteForm({ locale }: { locale: Locale }) {
  const [form, setForm] = useState<FormState>(EMPTY);
  const t = getDictionary(locale);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FieldRow>
        <TextField
          name="companyName"
          label={t.form.companyName}
          placeholder={t.form.companyPlaceholder}
          value={form.companyName}
          onChange={handleChange}
        />
        <TextField
          name="personalName"
          label={t.form.personalName}
          placeholder={t.form.personalNamePlaceholder}
          value={form.personalName}
          onChange={handleChange}
        />
      </FieldRow>

      <FieldRow>
        <TextField
          name="origin"
          label={t.form.originDestination}
          placeholder={t.form.cityCountry}
          value={form.origin}
          onChange={handleChange}
        />
        <TextField
          name="industry"
          label={t.form.industry}
          placeholder={t.form.industryPlaceholder}
          value={form.industry}
          onChange={handleChange}
        />
      </FieldRow>

      <FieldRow>
        <TextField
          name="phone"
          label={t.form.phoneNumber}
          placeholder={t.form.phonePlaceholder}
          value={form.phone}
          onChange={handleChange}
        />
        <TextField
          name="cityCountry"
          label={t.form.cityCountryLabel}
          placeholder={t.form.cityCountry}
          value={form.cityCountry}
          onChange={handleChange}
        />
      </FieldRow>

      <FieldRow>
        <TextField
          name="destination"
          label={t.form.destinationShort}
          placeholder={t.form.destinationPlaceholder}
          value={form.destination}
          onChange={handleChange}
        />
        <TextField
          name="email"
          type="email"
          label={t.form.email}
          placeholder={t.form.emailPlaceholder}
          value={form.email}
          onChange={handleChange}
        />
      </FieldRow>

      <TextField
        name="volume"
        label={t.form.volume}
        placeholder={t.form.volumeRoadPlaceholder}
        value={form.volume}
        onChange={handleChange}
      />

      <TextAreaField
        name="additionalDetails"
        label={t.form.additionalDetails}
        placeholder={t.form.additionalDetailsPlaceholder}
        value={form.additionalDetails}
        onChange={handleChange}
      />

      <GdprConsent checked={form.gdpr} onChange={handleChange} locale={locale} />

      <SubmitButton>{t.form.submitQuote}</SubmitButton>
    </form>
  );
}
