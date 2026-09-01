export const FALLBACK_POST_IMAGE = "/assets/fallback.svg";

/**
 * next/image accepts only a root-relative path or an absolute http(s) URL.
 * Given anything else it throws "Failed to construct 'URL': Invalid URL" while
 * building the src — before the <img> ever loads, so SafeImage's onError
 * fallback cannot catch it and the whole page goes down.
 *
 * Used both to guard rendering and to reject bad input at the form.
 */
export function isRenderableImageSrc(src: string | null | undefined): boolean {
    const value = src?.trim();
    if (!value) return false;
    return value.startsWith("/") || /^https?:\/\//i.test(value);
}

/** The full-width cover, used on the post page itself. */
export function coverOf(entity: { image?: string | null }): string {
    // Checked rather than just non-empty: rows predating input validation can
    // hold free text, and one of those would otherwise crash the post page.
    const src = entity.image?.trim();
    return isRenderableImageSrc(src) ? src! : FALLBACK_POST_IMAGE;
}

/**
 * The image for a post card. Prefers the card-specific thumbnail, since the
 * cover is composed for a wide hero and often loses its subject once cropped
 * into a card. Falls back to the cover, then to the placeholder.
 */
export function cardImageOf(entity: {
    image?: string | null;
    thumbnailImage?: string | null;
}): string {
    return (
        [entity.thumbnailImage, entity.image].find(isRenderableImageSrc)?.trim() ??
        FALLBACK_POST_IMAGE
    );
}