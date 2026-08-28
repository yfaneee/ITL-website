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
  cargoType: string;
  origin: string;
  destination: string;
  weight: string;
  volume: string;
  specialRequirements: string;
  gdpr: boolean;
};

const EMPTY: FormState = {
  companyName: "",
  cargoType: "",
  origin: "",
  destination: "",
  weight: "",
  volume: "",
  specialRequirements: "",
  gdpr: false,
};

export default function AirQuoteForm({ locale }: { locale: Locale }) {
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
          name="cargoType"
          label={t.form.cargoType}
          placeholder={t.form.cargoTypePlaceholder}
          value={form.cargoType}
          onChange={handleChange}
        />
      </FieldRow>

      <FieldRow>
        <TextField
          name="origin"
          label={t.form.origin}
          placeholder={t.form.airportPlaceholder}
          value={form.origin}
          onChange={handleChange}
        />
        <TextField
          name="destination"
          label={t.form.destination}
          placeholder={t.form.airportPlaceholder}
          value={form.destination}
          onChange={handleChange}
        />
      </FieldRow>

      <FieldRow>
        <TextField
          name="weight"
          label={t.form.weight}
          placeholder={t.form.weightPlaceholder}
          value={form.weight}
          onChange={handleChange}
        />
        <TextField
          name="volume"
          label={t.form.volume}
          placeholder={t.form.volumePlaceholder}
          value={form.volume}
          onChange={handleChange}
        />
      </FieldRow>

      <TextAreaField
        name="specialRequirements"
        label={t.form.specialRequirements}
        placeholder={t.form.specialRequirementsPlaceholder}
        value={form.specialRequirements}
        onChange={handleChange}
      />

      <GdprConsent checked={form.gdpr} onChange={handleChange} locale={locale} />

      <SubmitButton>{t.form.submitQuote}</SubmitButton>
    </form>
  );
}
