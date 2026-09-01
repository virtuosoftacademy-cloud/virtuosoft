import Link from "next/link"

interface CalloutProps {
  callout: {
    heading: string
    text: string
    buttonHref: string
    buttonLabel: string
  }
}

function Callout({ callout }: CalloutProps) {
  return (
    <div className="px-6 lg:px-10 my-16 lg:my-24 flex justify-center">
      <div
        className="relative w-full max-w-7xl overflow-hidden rounded-[28px] px-8 py-10 text-center md:px-14 md:py-14"
        style={{
          backgroundImage:
            "linear-gradient(83deg, rgb(6,11,25) 0%, rgb(4,28,92) 50%, rgb(10,48,140) 100%)",
        }}
      >
        <div className="pointer-events-none absolute -left-24 -top-24 size-[280px] rounded-full bg-[#2353cc]/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 -top-28 size-[320px] rounded-full bg-[#2353cc]/25 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <h3 className="text-3xl font-bold leading-tight text-white md:text-[40px]">
            {callout.heading}
          </h3>
          {callout.text && (
            <p className="mt-3 text-sm leading-6 text-white/72 md:text-base">{callout.text}</p>
          )}
          <Link
            href={callout.buttonHref}
            className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-[26px] py-3.5 text-sm font-bold leading-5 text-[#050f21] transition-colors hover:bg-white/90"
          >
            {callout.buttonLabel}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Callout
