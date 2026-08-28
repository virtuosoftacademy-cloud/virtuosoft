// Figma node 1971:23699 ("In this article") drives its list off the article's
// own section headings, so the TOC has to be derived from the stored post HTML
// rather than a second hand-maintained list.

export interface ArticleSection {
    id: string;
    title: string;
}

export interface PreparedArticle {
    html: string;
    sections: ArticleSection[];
}

const HEADING_PATTERN = /<h([23])\b[^>]*>([\s\S]*?)<\/h\1>/g;

function toPlainText(fragment: string): string {
    return fragment
        .replace(/<[^>]+>/g, "")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&rsquo;|&#8217;/g, "’")
        .replace(/\s+/g, " ")
        .trim();
}

function toAnchorId(title: string, index: number): string {
    const base = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    return `${base || "section"}-${index + 1}`;
}

/**
 * Adds stable anchor ids to the article's headings and returns the section list
 * used by the sidebar table of contents.
 *
 * The original inline utility classes on the stored headings are dropped so the
 * typography defined on the article wrapper (Figma "Desktop H3" / "Desktop Body
 * Medium") is what actually renders.
 */
export function prepareArticle(content: string): PreparedArticle {
    const sections: ArticleSection[] = [];

    const html = content.replace(
        HEADING_PATTERN,
        (_match: string, level: string, inner: string): string => {
            const title = toPlainText(inner);
            const id = toAnchorId(title, sections.length);
            sections.push({ id, title });
            return `<h${level} id="${id}">${inner}</h${level}>`;
        },
    );

    return { html, sections };
}
