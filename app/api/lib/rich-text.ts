// Post bodies used to be plain text with blank-line paragraphs; the editor now
// produces HTML. Both shapes live in the `content` column, so everything that
// reads or writes it goes through these helpers. Pure string work only — no
// DOM, no sanitiser — so a Client Component can import it too.

// Must list every tag the editor can emit. A body consisting only of an image
// would otherwise fail the test, get treated as plain text, and render as
// escaped markup instead of a picture.
const BLOCK_TAG_RE =
    /<(p|h[1-6]|ul|ol|li|blockquote|pre|code|strong|b|em|i|u|s|a|img|figure|figcaption|br|hr|div|span)\b[^>]*\/?>/i;

/** Distinguishes editor HTML from a legacy plain-text body. */
export function looksLikeHtml(value: string): boolean {
    return BLOCK_TAG_RE.test(value);
}

export function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

/**
 * Legacy body -> HTML: blank line separates paragraphs, single newline is a
 * line break. Escaped on the way through, so a stray "<" in old copy renders
 * as a character rather than becoming markup.
 */
export function plainTextToHtml(text: string): string {
    return text
        .split(/\n{2,}/)
        .map((block) => block.trim())
        .filter(Boolean)
        .map((block) => `<p>${escapeHtml(block).replace(/\n/g, "<br />")}</p>`)
        .join("");
}

/**
 * True when the editor is visually empty. Tiptap serialises an untouched
 * document as "<p></p>", which is a non-empty string and would otherwise
 * sail past a plain `if (!content)` check.
 */
export function isEmptyRichText(value: string): boolean {
    return (
        value
            .replace(/<[^>]*>/g, "")
            .replace(/&nbsp;/g, " ")
            .trim().length === 0
    );
}

/** Whatever shape the stored body is in, give the editor HTML to open. */
export function toEditorHtml(stored: string | null | undefined): string {
    const value = stored?.trim();
    if (!value) return "";
    return looksLikeHtml(value) ? value : plainTextToHtml(value);
}
