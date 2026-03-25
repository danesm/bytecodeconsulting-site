"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DRAFT_EVENT_NAME, DRAFT_STORAGE_KEY } from "@/components/site/webmcp-tools";
import { projectTypes } from "@/lib/site-content";

type EnquiryDraft = {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  message?: string;
  autoSubmit?: boolean;
};

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  function readStoredDraft(): EnquiryDraft | null {
    try {
      const raw = window.sessionStorage.getItem(DRAFT_STORAGE_KEY);
      return raw ? (JSON.parse(raw) as EnquiryDraft) : null;
    } catch {
      return null;
    }
  }

  function writeStoredDraft(draft: EnquiryDraft) {
    window.sessionStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draft));
  }

  function clearStoredDraft() {
    window.sessionStorage.removeItem(DRAFT_STORAGE_KEY);
  }

  function setFieldValue(name: string, value?: string) {
    if (!formRef.current || typeof value !== "string") {
      return;
    }

    const field = formRef.current.elements.namedItem(name);

    if (
      !field ||
      !(
        field instanceof HTMLInputElement ||
        field instanceof HTMLTextAreaElement ||
        field instanceof HTMLSelectElement
      )
    ) {
      return;
    }

    field.value = value;
    field.dispatchEvent(new Event("input", { bubbles: true }));
    field.dispatchEvent(new Event("change", { bubbles: true }));
  }

  const applyDraft = useCallback((draft: EnquiryDraft | null) => {
    if (!draft) {
      return;
    }

    setFieldValue("name", draft.name);
    setFieldValue("email", draft.email);
    setFieldValue("company", draft.company);

    if (draft.projectType && projectTypes.includes(draft.projectType)) {
      setFieldValue("projectType", draft.projectType);
    }

    setFieldValue("message", draft.message);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryDraft: EnquiryDraft = {
      projectType: params.get("projectType") ?? undefined,
      message: params.get("message") ?? undefined,
    };

    const storedDraft = readStoredDraft();
    const hasQueryDraft = Boolean(queryDraft.projectType || queryDraft.message);
    const draftToApply = hasQueryDraft ? queryDraft : storedDraft;

    applyDraft(draftToApply);

    if (storedDraft?.autoSubmit && formRef.current) {
      writeStoredDraft({ ...storedDraft, autoSubmit: false });
      window.setTimeout(() => formRef.current?.requestSubmit(), 50);
    }
  }, [applyDraft]);

  useEffect(() => {
    function onDraftEvent(event: Event) {
      const detail = event instanceof CustomEvent ? (event.detail as EnquiryDraft | undefined) : undefined;
      const draft = detail ?? readStoredDraft();

      applyDraft(draft ?? null);

      if (draft?.autoSubmit && formRef.current) {
        writeStoredDraft({ ...draft, autoSubmit: false });
        window.setTimeout(() => formRef.current?.requestSubmit(), 50);
      }
    }

    window.addEventListener(DRAFT_EVENT_NAME, onDraftEvent);

    return () => window.removeEventListener(DRAFT_EVENT_NAME, onDraftEvent);
  }, [applyDraft]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Something went wrong while sending your enquiry.");
      }

      form.reset();
      clearStoredDraft();
      setIsSuccessOpen(true);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We couldn't send your enquiry right now. Please try again shortly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="relative overflow-hidden border-cyan/20 p-8 shadow-[0_0_0_1px_rgba(34,211,238,0.08),0_30px_100px_rgba(2,6,23,0.45)]">
      <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-cyan/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-10 right-0 w-px bg-gradient-to-b from-transparent via-cyan/40 to-transparent" />
      <form ref={formRef} className="grid gap-5" onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value="a5d942d1-ec73-4444-956d-4b6144451b39" />
        <input type="hidden" name="subject" value="New Bytecode Consulting enquiry" />
        <input type="hidden" name="from_name" value="Bytecode Consulting Website" />
        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm text-slate-300">
            Your name
            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              placeholder="Your name"
              className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan/60"
            />
          </label>
          <label className="grid gap-2 text-sm text-slate-300">
            Email address
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan/60"
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm text-slate-300">
            Company or organisation
            <input
              type="text"
              name="company"
              autoComplete="organization"
              placeholder="Company or organisation"
              className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan/60"
            />
          </label>
          <label className="grid gap-2 text-sm text-slate-300">
            Type of enquiry
            <select
              name="projectType"
              defaultValue=""
              required
              className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan/60"
            >
              <option value="" disabled>
                Select a project type
              </option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="grid gap-2 text-sm text-slate-300">
          Project details
          <textarea
            name="message"
            required
            placeholder="Tell us a little about the brief, timeline, or training need."
            rows={6}
            className="rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan/60"
          />
        </label>

        {errorMessage ? (
          <div className="rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm leading-6 text-rose-100">
            {errorMessage}
          </div>
        ) : null}

        <div className="flex flex-col gap-4 border-t border-white/10 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-slate-400">
            Send an enquiry and we&apos;ll get back to you within 24 hours.
          </p>
          <Button type="submit" className={isSubmitting ? "pointer-events-none opacity-70" : ""}>
            {isSubmitting ? "Sending enquiry" : "Send enquiry"}
          </Button>
        </div>
      </form>

      {isSuccessOpen ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 px-6 backdrop-blur-md">
          <div className="glass-panel w-full max-w-md rounded-[2rem] p-7 shadow-panel">
            <div className="inline-flex rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-cyan-200">
              Enquiry sent
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-white">Thanks, your message has been submitted successfully.</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              We&apos;ll review your enquiry and get in touch within 48 hours.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button type="button" onClick={() => setIsSuccessOpen(false)}>
                Close
              </Button>
              <Button type="button" variant="secondary" onClick={() => setIsSuccessOpen(false)} className="sm:min-w-[140px]">
                Back to site
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </Card>
  );
}
