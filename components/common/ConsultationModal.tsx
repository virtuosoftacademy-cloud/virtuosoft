'use client'

import { useEffect, useRef, useState, type FormEvent } from "react"
import { X, User, Phone, Mail, MessageSquare, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwq-PZjWdHsWKq6MkLx84KXq2D3KoXn5As0yyocFlew1RzmwFpYUA2iowqwNql30vUQ/exec"

interface ConsultationModalProps {
  open: boolean
  onClose: () => void
}

interface FormErrors {
  fullName?: string
  phone?: string
  email?: string
}

// Field order follows the Figma design (name → phone → email → message).
const FIELDS = [
  { key: "fullName", label: "Full Name", placeholder: "Enter Full Name", icon: User, type: "text", multiline: false },
  { key: "phone", label: "Phone", placeholder: "Enter Phone Number", icon: Phone, type: "tel", multiline: false },
  { key: "email", label: "Email", placeholder: "Enter Your Email", icon: Mail, type: "email", multiline: false },
  { key: "message", label: "Message", placeholder: "How can we help you?", icon: MessageSquare, type: "text", multiline: true },
] as const

type FieldKey = (typeof FIELDS)[number]["key"]

export default function ConsultationModal({ open, onClose }: ConsultationModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [form, setForm] = useState<Record<FieldKey, string>>({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  })

  // Close on Escape, lock background scroll, and focus the first field.
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    firstInputRef.current?.focus()

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open, onClose])

  if (!open) return null

  const setField = (key: FieldKey, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const validate = () => {
    const next: FormErrors = {}
    if (!form.fullName.trim()) next.fullName = "Please enter your full name"
    if (!form.phone.trim()) next.phone = "Please enter your phone number"
    if (!form.email.trim()) next.email = "Please enter your email"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Please enter a valid email"
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
        body: JSON.stringify({ formType: "consultation", ...form }),
      })
      alert("Thanks — we'll be in touch shortly.")
      setForm({ fullName: "", phone: "", email: "", message: "" })
      setErrors({})
      onClose()
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error)
      alert("Error: " + message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/50 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (!panelRef.current?.contains(e.target as Node)) onClose()
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-modal-title"
        className="my-auto w-full max-w-[476px] overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        <div className="flex items-start justify-between p-5">
          <h2
            id="consultation-modal-title"
            className="text-[28px] font-semibold leading-none text-[#0051e4]"
          >
            Contact Form
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close contact form"
            className="rounded p-1 text-[#0051e4] transition-colors hover:bg-[#0051e4]/5"
          >
            <X className="size-5" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 border-t border-[#d8e5ff] px-[51px] pb-8 pt-8"
          noValidate
        >
          {FIELDS.map((field, i) => {
            const Icon = field.icon
            const error = errors[field.key as keyof FormErrors]
            return (
              <div key={field.key} className="flex flex-col gap-3">
                <label
                  htmlFor={`consult-${field.key}`}
                  className="text-base font-semibold text-[#222]"
                >
                  {field.label}
                </label>
                <div
                  className={cn(
                    "flex gap-3 rounded-lg border bg-white px-3.5 transition-colors focus-within:border-[#0051e4]",
                    field.multiline ? "items-start py-3.5" : "h-12 items-center",
                    error ? "border-red-400" : "border-[#d8e5ff]"
                  )}
                >
                  <Icon className="size-5 shrink-0 text-[#2991d9]" />
                  {field.multiline ? (
                    <textarea
                      id={`consult-${field.key}`}
                      rows={4}
                      value={form[field.key]}
                      onChange={(e) => setField(field.key, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full resize-none bg-transparent text-base text-[#222] outline-none placeholder:text-[#b8b8b8]"
                    />
                  ) : (
                    <input
                      id={`consult-${field.key}`}
                      ref={i === 0 ? firstInputRef : undefined}
                      type={field.type}
                      value={form[field.key]}
                      onChange={(e) => setField(field.key, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full bg-transparent text-base text-[#222] outline-none placeholder:text-[#b8b8b8]"
                    />
                  )}
                </div>
                {error && (
                  <p className="flex items-center gap-1 text-[11px] font-semibold text-red-500">
                    <AlertCircle className="size-3" /> {error}
                  </p>
                )}
              </div>
            )
          })}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full rounded-lg bg-[#0051e4] py-3 text-base font-semibold text-white transition-colors hover:bg-[#0051e4]/90 disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  )
}
