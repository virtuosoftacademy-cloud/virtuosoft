"use client"

import { useActionState, useEffect } from "react"
import { toast } from "sonner"
import { subscribe, type NewsletterState } from "@/app/api/lib/newsletter/actions"
import { Button } from "@/components/ui/button"

const initialState: NewsletterState = {}

function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(subscribe, initialState)

  useEffect(() => {
    if (state.success) toast.success(state.success)
    if (state.error) toast.error(state.error)
  }, [state])

  return (
    <form action={formAction} className="flex flex-col gap-3">
      {/* Honeypot: hidden from real visitors via CSS, checked server-side */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          name="email"
          required
          placeholder="Get news by email"
          className="flex-1 bg-transparent border border-[#8A94A4] rounded-lg px-4 py-3 text-white placeholder-[#8A94A4] focus:outline-none focus:border-[#0755E9] text-sm"
        />
        <Button type="submit" disabled={isPending} className="px-6 py-3">
          {isPending ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>

      <label className="flex items-center gap-2 text-xs text-accent/50">
        <input type="checkbox" name="consent" value="yes" required className="size-3.5 accent-primary" />
        I agree to receive updates per the Privacy Notice.
      </label>
    </form>
  )
}

export default NewsletterForm
