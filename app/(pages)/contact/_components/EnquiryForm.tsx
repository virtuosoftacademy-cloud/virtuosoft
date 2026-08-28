'use client'

import { useRef, useState, type FormEvent } from "react"
import Link from "next/link"
import { AlertCircle } from "lucide-react"
import Captcha, { type CaptchaHandle } from "./Captcha"
import { cn } from "@/lib/utils"

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwq-PZjWdHsWKq6MkLx84KXq2D3KoXn5As0yyocFlew1RzmwFpYUA2iowqwNql30vUQ/exec"

// Interest topics, laid out in two columns exactly as the design orders them.
const INTERESTS = [
  "AI Agent",
  "Talent Hiring",
  "Cloud Optimization",
  "Partners & Investors",
  "Cybersecurity",
  "Careers",
  "Enterprise Solution",
  "Press",
  "Web & App Development",
  "Other",
  "Digital Marketing",
] as const

interface EnquiryErrors {
  fullName?: string
  email?: string
  phone?: string
  message?: string
  agreed?: string
  captcha?: string
}

function EnquiryForm() {
  const captchaRef = useRef<CaptchaHandle>(null)
  const [selected, setSelected] = useState<string[]>([])
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false)
  const [isAgreed, setIsAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<EnquiryErrors>({})
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const toggleInterest = (topic: string) =>
    setSelected((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    )

  const setField = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const validate = () => {
    const next: EnquiryErrors = {}
    if (!form.fullName.trim()) next.fullName = "Please enter your full name"
    if (!form.email.trim()) next.email = "Please enter your email"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email"
    if (!form.phone.trim()) next.phone = "Please enter your phone number"
    if (!form.message.trim()) next.message = "Please tell us how we can help"
    if (!isAgreed) next.agreed = "Please accept the Privacy Policy"
    if (!isCaptchaVerified) next.captcha = "Please complete the captcha"
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact",
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          company: form.company,
          message: form.message,
          interests: selected.join(", "),
        }),
      })
      alert("Message sent successfully!")
      setForm({ fullName: "", email: "", phone: "", company: "", message: "" })
      setSelected([])
      setIsAgreed(false)
      setIsCaptchaVerified(false)
      captchaRef.current?.refresh()
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error)
      alert("Error: " + message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const labelClass = "font-helvetica-now-display block text-sm text-[#050f21] mb-1.5"
  const inputClass =
    "w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#050f21] outline-none transition-colors placeholder:text-[#9AA1AF] focus:border-primary"
  const errorClass = "mt-1 flex items-center gap-1 text-[11px] font-semibold text-red-500"

  return (
    <div>
      {/* Heading sits on the dark hero band */}
      <h1 className="font-helvetica-now-display text-3xl leading-[1.2] text-white md:text-[40px] md:whitespace-pre">
        Your Next Big Move <span className="font-bold">Starts Here</span>
      </h1>
      <p className="font-helvetica-now-display mt-3 max-w-lg text-sm leading-6 text-white/72">
        Share your project with us. We&apos;ll review your goals, align on the right approach and help
        you move forward with confidence.
      </p>

      {/* Interest selector */}
      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
        {INTERESTS.map((topic) => {
          const checked = selected.includes(topic)
          return (
            <label
              key={topic}
              className="flex cursor-pointer items-center gap-3 text-sm text-white/90"
            >
              <input
                type="checkbox"
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
              <span className="font-helvetica-now-display">{topic}</span>
            </label>
          )
        })}
      </div>

      {/* Fields sit below the band, on white */}
      <form onSubmit={handleSubmit} className="mt-20 md:mt-50 lg:mt-36 max-w-xl space-y-5" noValidate>
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name*
          </label>
          <input
            id="fullName"
            value={form.fullName}
            onChange={(e) => setField("fullName", e.target.value)}
            placeholder="Enter your full name"
            className={cn(inputClass, errors.fullName && "border-red-400")}
          />
          {errors.fullName && (
            <p className={errorClass}>
              <AlertCircle className="size-3" /> {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email*
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            placeholder="Enter your email"
            className={cn(inputClass, errors.email && "border-red-400")}
          />
          {errors.email && (
            <p className={errorClass}>
              <AlertCircle className="size-3" /> {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone*
          </label>
          <div className="flex gap-2">
            <span className="flex shrink-0 items-center rounded-lg border border-[#E5E7EB] bg-white px-3 text-sm text-[#050f21]">
              +92
            </span>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setField("phone", e.target.value)}
              placeholder="300 1234567"
              className={cn(inputClass, errors.phone && "border-red-400")}
            />
          </div>
          {errors.phone && (
            <p className={errorClass}>
              <AlertCircle className="size-3" /> {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            Company Name
          </label>
          <input
            id="company"
            value={form.company}
            onChange={(e) => setField("company", e.target.value)}
            placeholder="Enter your company name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Your Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={(e) => setField("message", e.target.value)}
            placeholder="How can we help you?"
            className={cn(inputClass, "resize-none", errors.message && "border-red-400")}
          />
          {errors.message && (
            <p className={errorClass}>
              <AlertCircle className="size-3" /> {errors.message}
            </p>
          )}
        </div>

        <div>
          <label className="flex cursor-pointer items-center gap-2 text-sm text-[#050f21]">
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              className="size-4 accent-primary"
            />
            <span className="font-helvetica-now-display">
              I agree to the{" "}
              <Link href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </span>
          </label>
          {errors.agreed && (
            <p className={errorClass}>
              <AlertCircle className="size-3" /> {errors.agreed}
            </p>
          )}
        </div>

        <div>
          <Captcha ref={captchaRef} onVerify={setIsCaptchaVerified} />
          {errors.captcha && (
            <p className={errorClass}>
              <AlertCircle className="size-3" /> {errors.captcha}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="font-helvetica-now-display w-full max-w-[200px] rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary/90 disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  )
}

export default EnquiryForm
