// components/DocSection.tsx
"use client";

import { CodeBlock } from "@/components/common/code-block";

interface DocContentItem {
    type: "description" | "snippet" | string;
    text?: string;
    language?: string;
    code?: string;
}

interface DocSectionProps {
    id: string;
    title: string;
    content: DocContentItem[];
}

export default function DocSection({ id, title, content }: DocSectionProps) {
    return (
        <section id={id} className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            {content.map((item, i) => {
                if (item.type === "description" && item.text) {
                    return (
                        <div
                            key={i}
                            className="prose prose-slate max-w-none mb-4"
                            dangerouslySetInnerHTML={{ __html: item.text }}
                        />
                    );
                }
                if (item.type === "snippet" && item.code && item.language) {
                    return <CodeBlock key={i} language={item.language} code={item.code} />;
                }
                return null;
            })}
        </section>
    );
}
