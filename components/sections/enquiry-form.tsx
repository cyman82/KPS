"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { schoolInfo } from "@/data/site";
import { EMAILJS_CONFIG_ERROR, sendEnquiryEmail } from "@/lib/emailjs";

type FormValues = {
  studentName: string;
  studentClass: string;
  phoneNumber: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  studentName: "",
  studentClass: "",
  phoneNumber: "",
  subject: "",
  message: ""
};

const classOptions = [
  "Pre-Nursery",
  "Nursery",
  "KG-1",
  "KG-2",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8"
];

export function EnquiryForm() {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState(
    "Failed to send enquiry. Please try again."
  );

  function validate(values: FormValues) {
    const nextErrors: FormErrors = {};

    if (!values.studentName.trim()) {
      nextErrors.studentName = "Name is required.";
    }

    if (!values.studentClass.trim()) {
      nextErrors.studentClass = "Class is required.";
    }

    if (!values.phoneNumber.trim()) {
      nextErrors.phoneNumber = "Phone number is required.";
    } else if (!/^\d{10,15}$/.test(values.phoneNumber.trim())) {
      nextErrors.phoneNumber = "Enter a valid phone number.";
    }

    if (!values.subject.trim()) {
      nextErrors.subject = "Subject is required.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Message is required.";
    }

    return nextErrors;
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    const nextValue =
      name === "phoneNumber" ? value.replace(/\D/g, "").slice(0, 15) : value;

    setFormValues((current) => ({
      ...current,
      [name]: nextValue
    }));

    setErrors((current) => ({
      ...current,
      [name]: undefined
    }));

    if (status === "success" || status === "error") {
      setStatus("idle");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") {
      return;
    }

    const nextErrors = validate(formValues);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    try {
      setStatus("sending");
      setErrorMessage("Failed to send enquiry. Please try again.");

      await sendEnquiryEmail({
        studentName: formValues.studentName.trim(),
        studentClass: formValues.studentClass.trim(),
        phoneNumber: formValues.phoneNumber.trim(),
        subject: formValues.subject.trim(),
        message: formValues.message.trim()
      });

      setFormValues(initialValues);
      setErrors({});
      setStatus("success");
    } catch (error) {
      console.error("EmailJS enquiry send failed", error);
      if (error instanceof Error && error.message === EMAILJS_CONFIG_ERROR) {
        setErrorMessage(
          "Email service is not configured yet. Add the EmailJS keys in .env.local."
        );
      } else {
        setErrorMessage("Failed to send enquiry. Please try again.");
      }
      setStatus("error");
    }
  }

  return (
    <section className="rounded-[2rem] border border-school.red/10 bg-white p-6 shadow-panel sm:p-8">
      <div className="mb-8 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-school.red">
          Enquiry Form
        </p>
        <h2 className="font-serif text-3xl font-semibold text-school.charcoal sm:text-4xl">
          Send a School Enquiry
        </h2>
        <p className="text-sm leading-7 text-school.gray whitespace-nowrap sm:text-base">
          All enquiries are sent directly to {schoolInfo.enquiryEmail}. Parents can submit questions here and the message will be delivered to the school inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-school.charcoal">
            Student Name
          </span>
          <input
            required
            name="studentName"
            value={formValues.studentName}
            onChange={handleChange}
            placeholder="Enter student name"
            aria-invalid={Boolean(errors.studentName)}
            aria-describedby={errors.studentName ? "studentName-error" : undefined}
            className="w-full rounded-2xl border border-school.red/15 bg-school.cream px-4 py-3 text-school.charcoal outline-none transition focus:border-school.red"
          />
          {errors.studentName ? (
            <p id="studentName-error" className="text-sm text-red-600">
              {errors.studentName}
            </p>
          ) : null}
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-school.charcoal">Class</span>
          <select
            required
            name="studentClass"
            value={formValues.studentClass}
            onChange={handleChange}
            aria-invalid={Boolean(errors.studentClass)}
            aria-describedby={errors.studentClass ? "studentClass-error" : undefined}
            className="w-full rounded-2xl border border-school.red/15 bg-school.cream px-4 py-3 text-school.charcoal outline-none transition focus:border-school.red"
          >
            <option value="">Select class</option>
            {classOptions.map((classOption) => (
              <option key={classOption} value={classOption}>
                {classOption}
              </option>
            ))}
          </select>
          {errors.studentClass ? (
            <p id="studentClass-error" className="text-sm text-red-600">
              {errors.studentClass}
            </p>
          ) : null}
        </label>

        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-semibold text-school.charcoal">Phone Number</span>
          <input
            required
            name="phoneNumber"
            value={formValues.phoneNumber}
            onChange={handleChange}
            placeholder="Enter phone number"
            inputMode="numeric"
            autoComplete="tel"
            maxLength={15}
            aria-invalid={Boolean(errors.phoneNumber)}
            aria-describedby={errors.phoneNumber ? "phoneNumber-error" : undefined}
            className="w-full rounded-2xl border border-school.red/15 bg-school.cream px-4 py-3 text-school.charcoal outline-none transition focus:border-school.red"
          />
          {errors.phoneNumber ? (
            <p id="phoneNumber-error" className="text-sm text-red-600">
              {errors.phoneNumber}
            </p>
          ) : null}
        </label>

        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-semibold text-school.charcoal">Subject</span>
          <input
            required
            name="subject"
            value={formValues.subject}
            onChange={handleChange}
            placeholder="Admissions, books, timings, or other queries"
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className="w-full rounded-2xl border border-school.red/15 bg-school.cream px-4 py-3 text-school.charcoal outline-none transition focus:border-school.red"
          />
          {errors.subject ? (
            <p id="subject-error" className="text-sm text-red-600">
              {errors.subject}
            </p>
          ) : null}
        </label>

        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-semibold text-school.charcoal">Message</span>
          <textarea
            required
            name="message"
            value={formValues.message}
            onChange={handleChange}
            rows={5}
            placeholder="Write your enquiry"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="w-full rounded-2xl border border-school.red/15 bg-school.cream px-4 py-3 text-school.charcoal outline-none transition focus:border-school.red"
          />
          {errors.message ? (
            <p id="message-error" className="text-sm text-red-600">
              {errors.message}
            </p>
          ) : null}
        </label>

        <div className="md:col-span-2 space-y-3 pt-2">
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-school.saffron/40 bg-[#E9E2D2] px-6 py-3.5 text-base font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-[#DDD3BE] hover:shadow-panel disabled:cursor-not-allowed disabled:bg-[#EFE9DC] disabled:text-white disabled:opacity-90 disabled:hover:translate-y-0 sm:w-auto"
          >
            {status === "sending" ? "Sending..." : "Send Enquiry"}
          </button>
          <div aria-live="polite" className="min-h-6">
            {status === "success" ? (
              <p className="animate-fade-up inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                Enquiry sent successfully
              </p>
            ) : null}
            {status === "error" ? (
              <p className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700">
                {errorMessage}
              </p>
            ) : null}
            {status === "idle" || status === "sending" ? (
              <p className="text-sm text-school.gray">
                Queries will be sent directly to {schoolInfo.enquiryEmail}.
              </p>
            ) : null}
          </div>
        </div>
      </form>
    </section>
  );
}
