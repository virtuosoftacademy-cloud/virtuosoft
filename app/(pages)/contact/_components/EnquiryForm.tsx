'use client'

import { useActionState, useState } from "react"
import Link from "next/link"
import { AlertCircle, CheckCircle2, ShieldCheck } from "lucide-react"
import { sendContactMessage, type ContactState } from "@/lib/lib-backend/contact/actions"
import { INTEREST_OPTIONS } from "@/lib/lib-backend/contact/options"
import { cn } from "@/lib/utils"

const initialState: ContactState = {}

function EnquiryForm() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialState)
  const [selectedInterests, setSelectedInterests] = useState<string[]>(state.values?.interests ?? [])
  const [isNotRobot, setIsNotRobot] = useState(false)

  // A successful send leaves the form mounted (no redirect), so the custom
  // bullet checkboxes and the robot-check need to be cleared by hand —
  // native uncontrolled fields reset themselves, these don't. Cleared during
  // render (React's documented pattern for resetting state when something
  // changes) rather than in an effect, which would cost an extra render.
  const [clearedForSuccess, setClearedForSuccess] = useState(state.success)
  if (state.success && state.success !== clearedForSuccess) {
    setClearedForSuccess(state.success)
    setSelectedInterests([])
    setIsNotRobot(false)
  }

  const toggleInterest = (topic: string) =>
    setSelectedInterests((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    )

  const labelClass = "block text-sm text-[#050f21] mb-1.5"
  const inputClass =
    "w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#050f21] outline-none transition-colors placeholder:text-[#9AA1AF] focus:border-primary"
  const errorClass = "mt-1 flex items-center gap-1 text-[11px] font-semibold text-red-500"

  return (
    <div>
      {/* Heading sits on the dark hero band */}
      <h1 className="text-3xl leading-[1.2] text-white md:text-[40px] md:whitespace-pre">
        Your Next Big Move <span className="font-bold">Starts Here</span>
      </h1>
      <p className="mt-3 max-w-lg text-sm leading-6 text-white/72">
        Share your project with us. We&apos;ll review your goals, align on the right approach and help
        you move forward with confidence.
      </p>

      {/* Interest selector */}
      <div className="mt-8 grid grid-flow-col grid-rows-6 gap-x-8 gap-y-3">
        {INTEREST_OPTIONS.map((topic) => {
          const checked = selectedInterests.includes(topic)
          return (
            <label
              key={topic}
              className="flex cursor-pointer items-center gap-3 text-sm text-white/90"
            >
              <input
                type="checkbox"
                name="interests"
                value={topic}
                form="enquiry-form"
                checked={checked}
                onChange={() => toggleInterest(topic)}
                className="peer sr-only"
              />
              <span
                className={cn(
                  "flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors",
                  checked ? "border-white bg-white" : "border-white/50"
                )}
              >
                {checked && <span className="size-2 rounded-full bg-[#0051e4]" />}
              </span>
              <span>{topic}</span>
            </label>
          )
        })}
      </div>
      {state.fieldErrors?.interests && (
        <p className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-red-300">
          <AlertCircle className="size-3" /> {state.fieldErrors.interests}
        </p>
      )}

      {/* Fields sit below the band, on white */}
      <form id="enquiry-form" action={formAction} className="mt-20 md:mt-50 lg:mt-32 max-w-xl space-y-5" noValidate>
        {/* Honeypot: hidden from real visitors via CSS, checked server-side */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name*
          </label>
          <input
            id="name"
            name="name"
            defaultValue={state.values?.name}
            placeholder="Enter your full name"
            className={cn(inputClass, state.fieldErrors?.name && "border-red-400")}
          />
          {state.fieldErrors?.name && (
            <p className={errorClass}>
              <AlertCircle className="size-3" /> {state.fieldErrors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            defaultValue={state.values?.email}
            placeholder="Enter your email"
            className={cn(inputClass, state.fieldErrors?.email && "border-red-400")}
          />
          {state.fieldErrors?.email && (
            <p className={errorClass}>
              <AlertCircle className="size-3" /> {state.fieldErrors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone*
          </label>
          <div className="flex gap-2">
            <span className="flex shrink-0 items-center gap-1.5 rounded-lg border border-[#E5E7EB] bg-white px-3 text-sm text-[#050f21]">
              <span className="fi fi-pk" />
              +92
            </span>
            <input
              id="phone"
              name="phone"
              type="tel"
              defaultValue={state.values?.phone}
              placeholder="300 1234567"
              className={cn(inputClass, state.fieldErrors?.phone && "border-red-400")}
            />
          </div>
          {state.fieldErrors?.phone && (
            <p className={errorClass}>
              <AlertCircle className="size-3" /> {state.fieldErrors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            Company Name
          </label>
          <input
            id="company"
            name="company"
            defaultValue={state.values?.company}
            placeholder="Enter your company name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="description" className={labelClass}>
            Your Message
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            defaultValue={state.values?.description}
            placeholder="How can we help you?"
            className={cn(inputClass, "resize-none", state.fieldErrors?.description && "border-red-400")}
          />
          {state.fieldErrors?.description && (
            <p className={errorClass}>
              <AlertCircle className="size-3" /> {state.fieldErrors.description}
            </p>
          )}
        </div>

        <div>
          <label className="flex cursor-pointer items-center gap-2 text-sm text-[#050f21]">
            <input type="checkbox" required className="size-4 accent-primary" />
            <span>
              I agree to the{" "}
              <Link href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </span>
          </label>
        </div>

        <div>
          <label className="flex h-[60px] max-w-[320px] w-full cursor-pointer items-center justify-between gap-3 rounded-lg border border-[#E5E7EB] bg-white px-3">
            <span className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isNotRobot}
                onChange={(e) => setIsNotRobot(e.target.checked)}
                className="size-5 accent-primary"
              />
              <span className="text-sm text-[#888785]">I&apos;m not a robot</span>
            </span>
            <span className="flex flex-col items-center gap-0.5">
              <ShieldCheck className="size-6 text-[#afafac]" />
              <span className="text-[10px] text-[#afafac]">reCAPTCHA</span>
            </span>
          </label>
        </div>

        {state.error && (
          <p className={errorClass}>
            <AlertCircle className="size-3" /> {state.error}
          </p>
        )}
        {state.success && (
          <p className="flex items-center gap-1.5 text-sm font-semibold text-green-600">
            <CheckCircle2 className="size-4" /> {state.success}
          </p>
        )}

        <button
          type="submit"
          disabled={isPending || !isNotRobot}
          className="w-full max-w-[200px] rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary/90 disabled:opacity-60"
        >
          {isPending ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  )
}

export default EnquiryForm
