import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center text-center px-8">
      <p className="text-sm md:text-base font-heading text-primary tracking-widest uppercase">404</p>
      <p className="text-2xl md:text-6xl font-bold font-heading text-primary">Page Not Found</p>
      <p className="max-w-md font-heading text-primary text-sm md:text-base">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      {/* <Button asChild size="lg" className="mt-4">
        <Link href="/">Back to Home</Link>
      </Button> */}
    </div>
  )
}
