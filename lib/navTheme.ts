/**
 * The nav renders transparently over the top of each page, so its colours have
 * to follow whatever sits behind it. Most pages open with a dark hero; these
 * ones open on a light background and need the dark logo, dark link text and
 * the blue globe instead of the white one.
 *
 * Shared by Nav and RegionSwitcher — keep it in one place so the two can't
 * disagree about which pages are light.
 */
export const LIGHT_BACKGROUND_ROUTES = ["/services", "/about-us", "/team"]

export function isLightBackgroundRoute(pathname: string | null | undefined): boolean {
  if (!pathname) return false
  return LIGHT_BACKGROUND_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  )
}
