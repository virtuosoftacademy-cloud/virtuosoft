// Server-only: sanitize-html is a Node library. Kept apart from lib/rich-text.ts
// so the Client Component editor can import the pure helpers without dragging
// the sanitiser into the browser bundle.
import sanitizeHtml from "sanitize-html";
import { looksLikeHtml, plainTextToHtml } from "@/app/api/lib/rich-text";

/**
 * Only what the editor's toolbar can actually produce. Anything else — script,
 * iframe, style, event handlers, inline styles — is dropped.
 *
 * The body is written by an authenticated admin, so this is not the first line
 * of defence. It is the one that holds if an admin account is ever taken over,
 * which is exactly the scenario the device-trust gate exists for: without it,
 * a single stored <script> would run for every visitor to the post.
 */
const OPTIONS: sanitizeHtml.IOptions = {
    allowedTags: [
        "p", "br", "hr",
        "h1", "h2", "h3", "h4", "h5", "h6",
        "strong", "b", "em", "i", "s", "u",
        "ul", "ol", "li",
        "blockquote", "pre", "code",
        "a", "img", "figure", "figcaption",
    ],
    allowedAttributes: {
        a: ["href", "title", "target", "rel"],
        img: ["src", "alt", "title", "width", "height", "loading"],
    },
    // No javascript:, no data: — only real links. data: would also let a
    // base64 payload smuggle markup past the src check.
    allowedSchemes: ["http", "https", "mailto"],
    allowedSchemesByTag: { img: ["http", "https"] },
    allowProtocolRelative: false,
    transformTags: {
        // Anything opening a new tab must not hand the opener over with it.
        a: sanitizeHtml.simpleTransform("a", { rel: "noopener noreferrer" }),
    },
};

/**
 * Stored rich text (editor HTML, or legacy plain text with blank-line
 * paragraphs) -> HTML safe to inject. Used by the blog post body and the
 * case-study challenge section.
 */
export function toSafeHtml(content: string | null | undefined): string {
    const value = content?.trim();
    if (!value) return "";
    // Plain text is escaped by plainTextToHtml, so it is already safe; running
    // it through the sanitiser as well costs nothing and keeps one exit path.
    return sanitizeHtml(
        looksLikeHtml(value) ? value : plainTextToHtml(value),
        OPTIONS
    );
}
