import {
  Sparkles,
  FileText,
  Image as ImageIcon,
  Mail,
  MessageCircle,
  Sun,
  Settings,
  ClipboardList,
  ScanText,
  ArrowLeftRight,
  CheckCircle2,
  AlertTriangle,
  Landmark,
  FolderOpen,
  ArrowDown,
} from "lucide-react";
import Image from "next/image";

const channels = [
  { label: "PDF", icon: FileText, color: "text-red-500" },
  { label: "Image / Photo", icon: ImageIcon, color: "text-green-500" },
  { label: "Email", icon: Mail, color: "text-primary" },
  { label: "WhatsApp / SMS", img: "/assets/Images/products/certus/whatsapp.png", color: "text-green-600" },
];

const readMethods = [
  {
    title: "Known format? Read instantly",
    description: "Matches a vendor template we've seen before",
    icon: ClipboardList,
  },
  {
    title: "New format? AI reads it",
    description: "Understood the way a person would read it",
    icon: ScanText,
  },
];

export default function ThreeChecks() {
  return (
    <section className="bg-accent/40 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-0 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-white px-4 py-1.5 text-xs font-semibold text-primary">
          <Sparkles className="size-3.5" /> How It Works
        </span>

        <h4 className="mt-5 text-3xl sm:text-4xl md:text-[42px] leading-tight text-foreground">
          Every Document Passes Three Checks Before Anything
          <br />
          <span className="font-bold text-primary">Touches Your Books</span>
        </h4>

        <p className="mx-auto mt-4 max-w-2xl text-base font-light leading-relaxed text-muted-foreground">
          The system captures documents from whatever source you configure PDF, image, email or
          WhatsApp cleans them up and runs every one through three independent review layers
          before making a routing decision.
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-6 sm:gap-x-16">
          {channels.map(({ label, icon: Icon, color, img }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <span className="flex size-16 items-center justify-center rounded-full bg-white shadow-md">
                {Icon ?
                  <Icon className={`size-7 ${color}`} /> :
                  <Image src={img} alt={label} className="size-8" width={200} height={200} />
                }
              </span>
              <span className="text-sm font-semibold text-foreground">{label}</span>
            </div>
          ))}
        </div>

        <div
          className="mx-auto mt-6 flex h-44 max-w-2xl flex-col items-center justify-start bg-linear-to-b from-primary/5 to-primary/15 pt-8 text-center [clip-path:polygon(0_0,100%_0,54%_100%,46%_100%)]"
        >
          <p className="flex items-center gap-2 text-lg font-bold text-primary sm:text-xl">
            <Sun className="size-5" /> However it arrives, we take it
          </p>
          <p className="mx-auto mt-2 max-w-xs text-sm text-primary/70">
            Cleaned up automatically, no manual re-typing or re-scanning
          </p>
        </div>

        <div className="mx-auto h-14 w-6 bg-primary/25" />

        <div className="relative mx-auto max-w-xl overflow-hidden rounded-2xl border border-border bg-white text-left shadow-xl">
          <div className="flex items-center gap-3 border-b border-border px-6 py-5">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-white">
              <Settings className="size-5" />
            </span>
            <h4 className="text-lg font-bold text-foreground">Read Three Ways Before It&apos;s Trusted</h4>
          </div>
          <div className="flex flex-col gap-3 p-5">
            {readMethods.map(({ title, description, icon: Icon }) => (
              <div key={title} className="flex items-start gap-3 rounded-xl border border-primary/15 bg-primary/5 p-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-primary/30 text-primary">
                  <Icon className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">{title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto h-14 w-6 bg-primary/25" />

        <div className="mx-auto max-w-xl rounded-2xl border border-border bg-white px-6 py-6 shadow-xl">
          <p className="flex items-center justify-center gap-2 text-lg font-bold text-foreground">
            <ArrowLeftRight className="size-5 text-primary" /> Certus Decides: Post It, or Flag It
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Based on all three checks above</p>
        </div>

        <svg
          className="mx-auto h-16 w-full max-w-xl text-primary/40"
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M50,0 C50,20 22,15 22,40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M50,0 C50,20 78,15 78,40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="mx-auto grid max-w-xl grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col items-center gap-2">
            <div className="flex w-full items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-left">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                <CheckCircle2 className="size-4" />
              </span>
              <div>
                <p className="text-sm font-bold text-green-800">Looks Right &gt; Posted</p>
                <p className="mt-0.5 text-xs text-green-700/80">Posts straight into your accounting system</p>
              </div>
            </div>
            <ArrowDown className="size-4 text-green-500" />
            <div className="flex w-full items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-left">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                <Landmark className="size-4" />
              </span>
              <div>
                <p className="text-sm font-bold text-green-800">Your ERP / Accounting System</p>
                <p className="mt-0.5 text-xs text-green-700/80">SAP, Oracle, Dynamics &amp; more</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex w-full items-start gap-3 rounded-xl border border-orange-200 bg-orange-50 p-4 text-left">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                <AlertTriangle className="size-4" />
              </span>
              <div>
                <p className="text-sm font-bold text-orange-800">Needs a Closer Look &gt; Flagged</p>
                <p className="mt-0.5 text-xs text-orange-700/80">Sent to your team to check</p>
              </div>
            </div>
            <ArrowDown className="size-4 text-orange-500" />
            <div className="flex w-full items-start gap-3 rounded-xl border border-orange-200 bg-orange-50 p-4 text-left">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                <FolderOpen className="size-4" />
              </span>
              <div>
                <p className="text-sm font-bold text-orange-800">Sent to Your Team</p>
                <p className="mt-0.5 text-xs text-orange-700/80">Dashboard + email alert</p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          No step requires a human unless Certus flags something — and the reason is always visible.
        </p>
      </div>
    </section>
  );
}
