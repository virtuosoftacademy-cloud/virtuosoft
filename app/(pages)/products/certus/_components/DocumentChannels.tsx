import { Sparkles } from "lucide-react";
import Image from "next/image";

const imgSrc = "/assets/Images/products/certus/docchannels/"
const channels = [
  {
    label: "PDF Documents",
    description: "Scanned, Rotated, Multi-page, Multi-format.",
    icon: `${imgSrc}/pdf.png`,
    offset: false,
  },
  {
    label: "Images",
    description: "Including a Photo of a Po Sent Over WhatsApp.",
    icon: `${imgSrc}/images.png`,
    offset: true,
  },
  {
    label: "Email Attachments",
    description: "Scanned directly from the inbox.",
    icon: `${imgSrc}/email.png`,
    offset: false,
  },
  {
    label: "Text Messages",
    description: "If an Order Comes Through as a Written Message, It Reads That Too.",
    icon: `${imgSrc}/text.png`,
    offset: true,
  },
];

export default function DocumentChannels() {
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-0 py-20">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 px-4 py-1.5 text-xs font-semibold text-primary">
        <Sparkles className="size-3.5" /> Any Source, One Pipeline
      </span>

      <h4 className="mt-5 text-3xl sm:text-4xl md:text-[42px] leading-tight text-foreground">
        Your Invoices Arrive However They Arrive.
        <br />
        <span className="font-bold text-primary">The System Reads All of Them</span>
      </h4>

      <p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-muted-foreground">
        You configure the source. Certus reads from wherever your documents actually land:
      </p>

      <div className="relative mt-20">
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polyline
            points="2,8 30,50 55,10 80,44"
            fill="none"
            className="stroke-primary/20"
            strokeWidth="0.2"
          />
        </svg>

        <div className="relative grid grid-cols-2 gap-x-6 gap-y-16 sm:grid-cols-4 sm:gap-x-10">
          {channels.map(({ label, description, icon, offset }) => (
            <div key={label} className={offset ? "sm:mt-24" : ""}>
              <div>
                <Image src={icon} alt={label} width={200} height={200} className="size-16" />
              </div>
              <p className="mt-4 text-xl font-bold text-foreground">{label}</p>
              <p className="mt-2 max-w-55 text-sm font-light leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
