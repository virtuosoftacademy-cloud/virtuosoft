"use client";

// ============================================================================
// Rich text field for admin forms (blog content, case-study summary/
// challenge). A Tiptap editor that writes its HTML into a hidden input named
// `name`, so the surrounding <form action={formAction}> and the server-side
// parser keep reading one plain field — the action never has to know an
// editor is involved.
// ============================================================================

import { useEffect } from "react";
import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TiptapImage from "@tiptap/extension-image";
import { toEditorHtml } from "@/app/api/lib/rich-text";

type Props = {
    name: string;
    label: string;
    defaultValue?: string;
    error?: string;
    help?: string;
};

function ToolbarButton({
    onClick,
    active,
    disabled,
    label,
    children,
}: {
    onClick: () => void;
    active?: boolean;
    disabled?: boolean;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            aria-label={label}
            title={label}
            className={`rounded px-2 py-1 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                active
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-700 hover:bg-neutral-100"
            }`}
        >
            {children}
        </button>
    );
}

function Toolbar({ editor }: { editor: Editor }) {
    const setLink = () => {
        const previous = editor.getAttributes("link").href as string | undefined;
        const url = window.prompt("Link URL", previous ?? "https://");
        if (url === null) return;
        if (!url) {
            editor.chain().focus().extendMarkRange("link").unsetLink().run();
            return;
        }
        editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    };

    const addImage = () => {
        const url = window.prompt("Image URL");
        if (url) editor.chain().focus().setImage({ src: url }).run();
    };

    return (
        <div className="flex flex-wrap items-center gap-1 border-b border-neutral-200 bg-neutral-50 px-2 py-1.5">
            <ToolbarButton label="Bold" active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}>
                B
            </ToolbarButton>
            <ToolbarButton label="Italic" active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}>
                <span className="italic">I</span>
            </ToolbarButton>
            <ToolbarButton label="Heading 2" active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
                H2
            </ToolbarButton>
            <ToolbarButton label="Heading 3" active={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
                H3
            </ToolbarButton>
            <ToolbarButton label="Bullet list" active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()}>
                •—
            </ToolbarButton>
            <ToolbarButton label="Numbered list" active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
                1.
            </ToolbarButton>
            <ToolbarButton label="Quote" active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
                &ldquo;
            </ToolbarButton>
            <ToolbarButton label="Link" active={editor.isActive("link")} onClick={setLink}>
                Link
            </ToolbarButton>
            <ToolbarButton label="Image" onClick={addImage}>
                Img
            </ToolbarButton>
            <span className="mx-1 h-4 w-px bg-neutral-300" />
            <ToolbarButton label="Undo" disabled={!editor.can().undo()} onClick={() => editor.chain().focus().undo().run()}>
                ↶
            </ToolbarButton>
            <ToolbarButton label="Redo" disabled={!editor.can().redo()} onClick={() => editor.chain().focus().redo().run()}>
                ↷
            </ToolbarButton>
        </div>
    );
}

export function RichTextEditor({ name, label, defaultValue, error, help }: Props) {
    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit.configure({
                link: { openOnClick: false, autolink: true },
            }),
            TiptapImage,
        ],
        content: toEditorHtml(defaultValue),
        editorProps: {
            attributes: {
                class: "prose prose-sm max-w-none min-h-40 px-3 py-2 focus:outline-none",
            },
        },
    });

    // Hidden input is the source of truth for the surrounding <form>; kept in
    // sync on every edit rather than read once, since a native form submit
    // reads whatever is currently in the DOM.
    useEffect(() => {
        if (!editor) return;
        const input = document.getElementById(`${name}-hidden`) as HTMLInputElement | null;
        if (input) input.value = editor.getHTML();

        const sync = () => {
            if (input) input.value = editor.getHTML();
        };
        editor.on("update", sync);
        return () => {
            editor.off("update", sync);
        };
    }, [editor, name]);

    const labelClass = "block text-sm font-medium text-neutral-800";

    return (
        <div>
            <label className={labelClass}>{label}</label>
            {help && <p className="mt-0.5 text-xs text-neutral-500">{help}</p>}

            <input id={`${name}-hidden`} type="hidden" name={name} defaultValue={toEditorHtml(defaultValue)} />

            <div
                className="mt-1 overflow-hidden rounded-md border border-neutral-300 shadow-sm focus-within:border-neutral-900 focus-within:ring-1 focus-within:ring-neutral-900"
                aria-invalid={Boolean(error)}
            >
                {editor && <Toolbar editor={editor} />}
                <EditorContent editor={editor} />
            </div>

            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
}
