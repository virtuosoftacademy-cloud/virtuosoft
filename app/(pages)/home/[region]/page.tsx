import type { Metadata } from "next"
import { notFound } from "next/navigation"
import type { ComponentType, ReactNode } from "react"
import HomeGlobal from "../_components/variants/HomeGlobal"
import HomeUK from "../_components/variants/HomeUK"
import HomeKSA from "../_components/variants/HomeKSA"
import CommonComponents from "../_components/common"

const REGIONS = ["global", "uk", "ksa"] as const
type Region = (typeof REGIONS)[number]

const variants: Record<Region, ComponentType<{ children: ReactNode }>> = {
  global: HomeGlobal,
  uk: HomeUK,
  ksa: HomeKSA,
}

const titles: Record<Region, string> = {
  global: "Virtuosoft | Home",
  uk: "Virtuosoft | Home (UK)",
  ksa: "Virtuosoft | Home (KSA)",
}

function isRegion(value: string): value is Region {
  return (REGIONS as readonly string[]).includes(value)
}

export async function generateStaticParams() {
  return REGIONS.map((region) => ({ region }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string }>
}): Promise<Metadata> {
  const { region } = await params
  if (!isRegion(region)) return {}
  return {
    title: titles[region],
    description: "Created By Virtuosoft Limited",
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ region: string }>
}) {
  const { region } = await params
  if (!isRegion(region)) notFound()

  const Variant = variants[region]
  return (
    <Variant>
      <CommonComponents region={region} />
    </Variant>
  )
}
