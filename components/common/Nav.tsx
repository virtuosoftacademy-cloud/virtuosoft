"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import Logo_Light from "@/public/logo-light.png";
import Logo_Dark from "@/public/logo-dark.png";
import CertusLogoImg from "@/public/assets/Images/nav/certus-logo.png";
import SolutionsPanelImg from "@/public/assets/Images/nav/solutions-panel.png";
import AboutPanelImg from "@/public/assets/Images/nav/about-panel.png";
import {
  ChevronRight,
  ChevronUp,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { isLightBackgroundRoute } from "@/app/api/lib/navTheme";
import {
  getSpotlightImage,
  services_Nav as servicesNavRaw,
  solutions_Nav,
  products_Nav,
  aboutUs_Nav,
} from "@/app/_constant";
import type { NavItem, MegaMenuLink } from "@/app/_constant";
import RegionSwitcher from "@/components/common/RegionSwitcher";

interface NavServiceItem extends NavItem {
  href?: string;
}

const services_Nav = servicesNavRaw as NavServiceItem[];

interface SimpleMegaDropdownProps {
  label: string;
  items: MegaMenuLink[];
  image: StaticImageData;
  /** Fully-computed classes for the pill trigger, built by Nav. */
  triggerClassName: string;
  // "cover" fills the right panel with photography; "logo" centres a
  // contained brand mark (the Products panel in the design).
  panel?: "cover" | "logo";
  // Menus whose items carry their own art (Solutions) swap the panel as you
  // move down the list. The index is owned by Nav so it survives re-renders.
  activeIndex?: number;
  onItemHover?: (index: number) => void;
  // Figma sizes the art per menu: 330x252 for Products/Solutions, and a
  // portrait 330x444 for About Us, whose list is twice as long.
  panelRatio?: "wide" | "tall";
}

// Declared at module scope on purpose: defining this inside Nav gave it a new
// component identity on every render, so any state update remounted the whole
// dropdown and collapsed Radix's open state mid-hover.
function SimpleMegaDropdown({
  label,
  items,
  image,
  triggerClassName,
  panel = "cover",
  panelRatio = "wide",
  activeIndex = 0,
  onItemHover,
}: SimpleMegaDropdownProps) {
  const panelImage = items[activeIndex]?.image ?? image;
  // Shared row styling with the Services panel: 60px tall, 16px padding,
  // bold #002D7D label.
  const rowBase =
    "font-public-sans flex h-15 items-center justify-between gap-3 rounded-xl p-4 text-base font-bold leading-6";

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className={triggerClassName}>{label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="flex items-stretch gap-8 py-8 pl-5 pr-8">
          <ul className="grid w-[280px] shrink-0 content-start gap-1">
            {items.map((item, index) => (
              <li
                key={item.label}
                className="group"
                onMouseEnter={() => onItemHover?.(index)}
              >
                {item.href ? (
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        rowBase,
                        "no-underline outline-none transition-colors text-[#002D7D]",
                        "group-hover:bg-linear-to-r from-[rgba(0,81,228,0.8)] to-[rgba(0,81,228,0.4)] group-hover:text-white!"
                      )}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                ) : (
                  <span className={cn(rowBase, "cursor-not-allowed text-[#002D7D]/40")}>
                    {item.label}
                    <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-semibold tracking-wide">
                      Coming Soon!
                    </span>
                  </span>
                )}
              </li>
            ))}
          </ul>

          <div className="w-px shrink-0 self-stretch bg-black/10" />

          {panel === "logo" ? (
            // The exported asset is a large full-bleed image; Figma frames it
            // to the wordmark via this crop, so reproduce that rather than
            // scaling the whole PNG into the panel.
            <div className="flex w-[320px] shrink-0 items-center justify-center p-2.5">
              <div className="relative aspect-[1682/442] w-full overflow-hidden">
                <Image
                  src={image}
                  alt=""
                  className="absolute left-[-12.54%] top-[-95.7%] h-[268.33%] w-[125.39%] max-w-none"
                />
              </div>
            </div>
          ) : (
            <div
              className={cn(
                "relative w-[330px] shrink-0 self-center overflow-hidden rounded-lg",
                panelRatio === "tall" ? "aspect-[330/444]" : "aspect-[330/252]"
              )}
            >
              <Image src={panelImage} alt="" fill sizes="330px" className="object-cover" />
            </div>
          )}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [activeService, setActiveService] = useState<number>(0);
  const [activeSolution, setActiveSolution] = useState<number>(0);
  const [mobileServicesOpen, setMobileServicesOpen] = useState<boolean>(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState<boolean>(false);
  const [mobileSolutionOpen, setMobileSolutionOpen] = useState<boolean>(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState<boolean>(false);
  const [openSubMobile, setOpenSubMobile] = useState<number | null>(null);

  const isActivePath = (href: string) => pathname?.startsWith(href) ?? false;

  // Dark logo + dark link text on pages that open on a light background.
  const isLightBackground = isLightBackgroundRoute(pathname);

  // The open mobile menu also calls for the dark logo, regardless of route.
  const useDarkLogo = isLightBackground || mobileOpen;

  const pillItem = cn(
    "rounded-full px-4 py-2 text-sm font-medium transition-colors data-[state=open]:bg-white data-[state=open]:text-[#002D7D] data-[state=open]:hover:text-[#002D7D]",
    isLightBackground ? "text-[#002D7D] hover:text-primary" : "text-white hover:text-[#002D7D]"
  );
  const pillItemActive = "bg-background text-[#002D7D]! font-bold"

  interface ServiceItemProps {
    service: NavServiceItem;
    isActive: boolean;
    onHover: () => void;
  }

  function ServiceItem({ service, isActive, onHover }: ServiceItemProps) {
    return (
      <li>
        <NavigationMenuLink asChild>

          <Link
            href={service.href || "#"}
            className={cn(
              "flex h-15 flex-row select-none items-center justify-between gap-3 rounded-xl p-4 no-underline outline-none transition-colors",
              isActive
                ? "bg-linear-to-r from-[rgba(0,81,228,0.8)] to-[rgba(0,81,228,0.4)] text-white!"
                : "text-[#002D7D] hover:bg-primary/5 focus:bg-primary/5"
            )}
            onMouseEnter={onHover}
          >
            <span className="font-public-sans text-base font-bold leading-6">{service.title}</span>
            <ChevronRight className={cn("size-5 shrink-0",
              isActive
                ? "text-white!"
                : "text-[#002D7D]"
            )} />
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }


  interface MobileMegaSectionProps {
    label: string;
    items: MegaMenuLink[];
    isOpen: boolean;
    onToggle: () => void;
  }

  function MobileMegaSection({ label, items, isOpen, onToggle }: MobileMegaSectionProps) {
    return (
      <div>
        <div
          className="font-semibold flex items-center justify-between cursor-pointer transition-colors hover:text-primary"
          onClick={onToggle}
        >
          <span>{label}</span>
          <span
            className={cn(
              "text-2xl leading-none transition-transform duration-300",
              isOpen && "rotate-180"
            )}
          >
            <ChevronUp />
          </span>
        </div>

        <div
          className={cn(
            "grid transition-all duration-400 ease-out",
            isOpen ? "grid-rows-[1fr] opacity-100 pt-3" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-3 pl-4 border-l border-white/30 pt-3 pb-2">
              {items.map((item) =>
                item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between gap-2 text-base text-accent hover:decoration-primary hover:underline underline-offset-4 capitalize transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                    {item.comingSoon && (
                      <span className="shrink-0 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide no-underline">
                        Soon
                      </span>
                    )}
                  </Link>
                ) : (
                  <span
                    key={item.label}
                    className="flex items-center justify-between gap-2 text-base capitalize text-accent/40"
                  >
                    {item.label}
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
                      Soon
                    </span>
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <nav
      className="sticky z-50 w-full mx-auto transition-all duration-500 max-w-7xl bg-transparent mt-4 py-3 shadow-none"
    >
      <div className="flex items-center justify-between px-6 lg:px-4 xl:px-0 -my-2">
        {/* Logo */}
        <Link href="/">
          <Image
            src={useDarkLogo ? Logo_Dark : Logo_Light}
            alt="Company Logo"
            width={160}
            height={48}
            className="transition-all duration-500"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList
            className={cn(
              "gap-0.75 rounded-full bg-foreground/5 backdrop-blur-lg border border-white/20 px-1.75 py-1.5")}
          >
            <NavigationMenuItem>
              <NavigationMenuTrigger className={cn(pillItem, isActivePath("/services") && pillItemActive)}>
                <Link href={"/services"}>
                  Services
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex items-stretch gap-8 py-5 pl-5 pr-8">
                  <ul className="grid w-[280px] shrink-0 content-start gap-1">
                    {services_Nav.map((service, index) => (
                      <ServiceItem
                        key={service.title}
                        service={service}
                        isActive={activeService === index}
                        onHover={() => setActiveService(index)}
                      />
                    ))}
                  </ul>

                  <div className="w-px shrink-0 self-stretch bg-black/10" />

                  <div className="flex w-[330px] shrink-0 flex-col justify-between pt-4">
                    {services_Nav[activeService].subPages ? (
                      <div className="flex flex-col gap-5">
                        {services_Nav[activeService].subPages.map((sub, i) => (
                          <Link
                            key={i}
                            href={sub.href}
                            // Deepens to #002D7D on hover, matching the
                            // highlighted sub-service in the design.
                            className="group flex items-center gap-4 text-[#3374E9] transition-colors hover:text-[#002D7D]"
                          >
                            <span className="size-2 shrink-0 rounded-[2px] bg-current" />
                            <span className="font-public-sans text-base font-bold leading-6 group-hover:underline">
                              {sub.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <span />
                    )}

                    <div className="mt-6 h-[156px] w-full overflow-hidden rounded-lg">
                      <Image
                        width={330}
                        height={156}
                        alt=""
                        src={getSpotlightImage(services_Nav[activeService].title)}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <SimpleMegaDropdown
              label="Products"
              items={products_Nav}
              image={CertusLogoImg}
              panel="logo"
              triggerClassName={cn(pillItem, isActivePath("/products") && pillItemActive)}
            />
            <SimpleMegaDropdown
              label="Solutions"
              items={solutions_Nav}
              image={SolutionsPanelImg}
              triggerClassName={cn(pillItem, isActivePath("/services/solutions") && pillItemActive)}
              activeIndex={activeSolution}
              onItemHover={setActiveSolution}
            />
            <SimpleMegaDropdown
              label="About Us"
              items={aboutUs_Nav}
              image={AboutPanelImg}
              panelRatio="tall"
              triggerClassName={cn(pillItem, isActivePath("/about-us") && pillItemActive)}
              activeIndex={activeSolution}
              onItemHover={setActiveSolution}
            />
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex items-center gap-4">
          <RegionSwitcher />
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact">Talk to us</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            // The icon inherits currentColor, so it needs the same light/dark
            // treatment as the logo and nav links.
            className={cn(
              "transition-colors",
              isLightBackground ? "text-[#0b1020]" : "text-white"
            )}
          >
            {mobileOpen ? <X size={28} className="text-[#0b1020]" /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="lg:hidden mt-4 px-4 bg-foreground text-accent overflow-hidden">
          <div className="flex flex-col py-8 px-8 gap-6 text-xl font-medium">
            {/* Services section with animated dropdown */}
            <div>
              <div
                className="font-semibold flex items-center justify-between cursor-pointer transition-colors hover:text-primary"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <Link
                  href="/services"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileOpen(false);
                  }}
                >
                  Services
                </Link>
                <span
                  className={cn(
                    "text-2xl leading-none transition-transform duration-300",
                    mobileServicesOpen && "rotate-180"
                  )}
                >
                  <ChevronUp />
                </span>
              </div>

              {/* Animated Services list container */}
              <div
                className={cn(
                  "grid transition-all duration-400 ease-out",
                  mobileServicesOpen ? "grid-rows-[1fr] opacity-100 pt-3" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-5 pl-4 border-l border-white/30 pt-3 pb-2">
                    {services_Nav.map((service, index) => (
                      <div key={service.title} className="space-y-3">
                        {/* Service row – clickable to toggle subpages */}
                        <div
                          className="flex items-center justify-between cursor-pointer text-lg transition-colors hover:text-primary"
                          onClick={() =>
                            setOpenSubMobile(openSubMobile === index ? null : index)
                          }
                        >
                          <Link
                            href={service.href || "/services"}
                            className="transition-colors"
                          >
                            {service.title}
                          </Link>

                          {service.subPages?.length > 0 && (
                            <span
                              className={cn(
                                "text-xl transition-transform duration-300",
                                openSubMobile === index && "rotate-180"
                              )}
                            >
                              <ChevronUp />
                            </span>
                          )}
                        </div>

                        {/* Animated subpages container */}
                        {service.subPages && (
                          <div
                            className={cn(
                              "grid transition-all duration-300 ease-out",
                              openSubMobile === index
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            )}
                          >
                            <div className="overflow-hidden">
                              <div className="flex flex-col gap-3 pl-6 border-l border-white/20 pt-2 pb-1">
                                {service.subPages.map((sub, i) => (
                                  <Link
                                    key={i}
                                    href={sub.href}
                                    className="text-base text-accent hover:decoration-primary hover:underline underline-offset-4 capitalize transition-colors"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <MobileMegaSection
              label="Products"
              items={products_Nav}
              isOpen={mobileProductsOpen}
              onToggle={() => setMobileProductsOpen(!mobileProductsOpen)}
            />

            <MobileMegaSection
              label="Solutions"
              items={solutions_Nav}
              isOpen={mobileSolutionOpen}
              onToggle={() => setMobileSolutionOpen(!mobileSolutionOpen)}
            />

            <MobileMegaSection
              label="About Us"
              items={aboutUs_Nav}
              isOpen={mobileAboutOpen}
              onToggle={() => setMobileAboutOpen(!mobileAboutOpen)}
            />

            <RegionSwitcher variant="mobile" onNavigate={() => setMobileOpen(false)} />

            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">Talk to us</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}