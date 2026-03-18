import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projectTypes } from "@/lib/site-content";

export function ContactForm() {
  return (
    <Card className="p-8">
      <form className="grid gap-5" action="#" method="post">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm text-slate-300">
            Name
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan/60"
            />
          </label>
          <label className="grid gap-2 text-sm text-slate-300">
            Email
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan/60"
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm text-slate-300">
            Company
            <input
              type="text"
              name="company"
              placeholder="Company or organisation"
              className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan/60"
            />
          </label>
          <label className="grid gap-2 text-sm text-slate-300">
            Project type
            <select
              name="projectType"
              defaultValue=""
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
          Message
          <textarea
            name="message"
            placeholder="Tell us a little about the brief, timeline, or training need."
            rows={6}
            className="rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan/60"
          />
        </label>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-slate-400">
            No backend is connected yet. Wire this form to your preferred email, CRM, or serverless function later.
          </p>
          <Button type="submit">Send enquiry</Button>
        </div>
      </form>
    </Card>
  );
}
