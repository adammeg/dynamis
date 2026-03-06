"use client";

import { useActionState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle, MessageCircle, PhoneCall } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const whatsappLink = "https://wa.me/21690053729";
const bookingLink = "https://calendly.com/adambhedj13/30min";

const initialState = null as { success: boolean; message: string } | null;

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    async (_previousState: typeof initialState, formData: FormData) => {
      const message = String(formData.get("message") ?? "");
      const service = String(formData.get("service") ?? "");
      const timeline = String(formData.get("timeline") ?? "");

      const enrichedMessage = [
        message.trim(),
        service ? `Interested service: ${service}` : "",
        timeline ? `Preferred timeline: ${timeline}` : "",
      ]
        .filter(Boolean)
        .join("\n\n");

      formData.set("message", enrichedMessage);

      return submitContactForm(formData);
    },
    initialState,
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_1.2fr]">
      <div className="glass-panel space-y-6 p-6 sm:p-8">
        <div className="space-y-4">
          <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-emerald-200">
            Lead Capture
          </span>
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
            Start Your Digital Transformation
          </h3>
          <p className="text-sm leading-7 text-slate-300">
            Brief us on your objectives and we will reply with the right mix of
            strategy, execution, and delivery scope.
          </p>
        </div>

        <div className="space-y-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/10"
          >
            <span className="flex items-center gap-3">
              <span className="rounded-full bg-emerald-400/12 p-2 text-emerald-200">
                <MessageCircle className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-medium text-white">WhatsApp</span>
                <span className="block text-sm text-slate-400">Fastest response channel</span>
              </span>
            </span>
            <ArrowRight className="h-4 w-4 text-emerald-200 transition group-hover:translate-x-1" />
          </a>

          <a
            href={bookingLink}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            <span className="flex items-center gap-3">
              <span className="rounded-full bg-cyan-400/12 p-2 text-cyan-200">
                <PhoneCall className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-medium text-white">Book a strategy call</span>
                <span className="block text-sm text-slate-400">30-minute qualification session</span>
              </span>
            </span>
            <ArrowRight className="h-4 w-4 text-cyan-200 transition group-hover:translate-x-1" />
          </a>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
          <p className="text-sm leading-7 text-slate-300">
            We typically work with businesses that want to modernize operations,
            ship revenue-driving products, or systemize acquisition through
            automation.
          </p>
        </div>
      </div>

      <div className="glass-panel p-6 sm:p-8">
        <form action={formAction} className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              name="firstName"
              placeholder="First name"
              required
              disabled={isPending}
              className="border-white/10 bg-white/5 text-white placeholder:text-slate-500"
            />
            <Input
              name="lastName"
              placeholder="Last name"
              required
              disabled={isPending}
              className="border-white/10 bg-white/5 text-white placeholder:text-slate-500"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              name="email"
              type="email"
              placeholder="Work email"
              required
              disabled={isPending}
              className="border-white/10 bg-white/5 text-white placeholder:text-slate-500"
            />
            <Input
              name="company"
              placeholder="Company"
              disabled={isPending}
              className="border-white/10 bg-white/5 text-white placeholder:text-slate-500"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <select
              name="service"
              defaultValue=""
              disabled={isPending}
              className="h-11 rounded-md border border-white/10 bg-white/5 px-3 text-sm text-slate-200 outline-none transition focus:border-cyan-400/50"
            >
              <option value="" className="bg-slate-950">
                Select a service
              </option>
              <option value="Automation & AI Workflows" className="bg-slate-950">
                Automation & AI Workflows
              </option>
              <option value="Web Development" className="bg-slate-950">
                Web Development
              </option>
              <option value="SaaS Development" className="bg-slate-950">
                SaaS Development
              </option>
              <option value="Marketing & Growth" className="bg-slate-950">
                Marketing & Growth
              </option>
              <option value="Social Media Management" className="bg-slate-950">
                Social Media Management
              </option>
              <option value="Branding & Design" className="bg-slate-950">
                Branding & Design
              </option>
              <option value="Photo & Modeling Sessions" className="bg-slate-950">
                Photo & Modeling Sessions
              </option>
              <option value="Business Consulting" className="bg-slate-950">
                Business Consulting
              </option>
            </select>

            <select
              name="timeline"
              defaultValue=""
              disabled={isPending}
              className="h-11 rounded-md border border-white/10 bg-white/5 px-3 text-sm text-slate-200 outline-none transition focus:border-cyan-400/50"
            >
              <option value="" className="bg-slate-950">
                Preferred timeline
              </option>
              <option value="Immediately" className="bg-slate-950">
                Immediately
              </option>
              <option value="Within 30 days" className="bg-slate-950">
                Within 30 days
              </option>
              <option value="Within 90 days" className="bg-slate-950">
                Within 90 days
              </option>
              <option value="Exploring options" className="bg-slate-950">
                Exploring options
              </option>
            </select>
          </div>

          <Textarea
            name="message"
            required
            disabled={isPending}
            placeholder="What are you trying to improve, launch, or automate?"
            className="min-h-36 border-white/10 bg-white/5 text-white placeholder:text-slate-500"
          />

          {state ? (
            <div
              className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm ${
                state.success
                  ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-100"
                  : "border-rose-400/25 bg-rose-400/10 text-rose-100"
              }`}
            >
              {state.success ? <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" /> : null}
              <span>{state.message}</span>
            </div>
          ) : null}

          <Button
            type="submit"
            disabled={isPending}
            className="h-12 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 text-slate-950 transition duration-300 hover:scale-[1.01] hover:shadow-[0_0_32px_rgba(56,189,248,0.45)]"
          >
            {isPending ? (
              <>
                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                Sending inquiry
              </>
            ) : (
              <>
                Book a consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
