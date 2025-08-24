/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import docsData from "@/data/docs-data.json";
import DocSection from "@/components/template/docs/doc-section";

export default function DocsPage() {
  const [activeId, setActiveId] = useState<string>("introduction");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    docsData.forEach((section) => {
      // observe each subsection (h3) instead of just section
      section.sections.forEach((sub: any) => {
        const el = document.getElementById(sub.id);
        if (el) observer.observe(el);
      });
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* Sidebar */}
        <aside
          className={clsx(
            "fixed lg:sticky top-0 left-0 z-40 h-screen lg:h-[calc(100vh-4rem)] w-64 p-4 transition-transform transform bg-sidebar text-sidebar-foreground border-r border-sidebar-border shadow-lg lg:shadow-none overflow-y-auto rounded-r-2xl",
            mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          )}
        >
          <div className="flex justify-between items-center mb-4 lg:hidden">
            <h2 className="text-lg font-semibold">Contents</h2>
            <Button variant="ghost" size="sm" onClick={() => setMobileOpen(false)}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          <nav className="space-y-4">
            {docsData.map((section) => (
              <div key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={clsx(
                    "flex items-center px-3 py-2 rounded-lg transition-all text-sm font-semibold",
                    activeId === section.id
                      ? "bg-sidebar-primary/10 text-sidebar-primary border-l-4 border-sidebar-primary"
                      : "hover:bg-sidebar-accent/10 text-sidebar-foreground"
                  )}
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  {section.title}
                </a>

                {/* Subsections */}
                <div className="ml-6 mt-1 space-y-1">
                  {section.sections.map((sub: any) => (
                    <a
                      key={sub.id}
                      href={`#${sub.id}`}
                      onClick={() => setMobileOpen(false)}
                      className={clsx(
                        "block px-3 py-1 rounded-md text-sm transition-all",
                        activeId === sub.id
                          ? "bg-sidebar-primary/10 text-sidebar-primary font-medium"
                          : "hover:bg-sidebar-accent/10 text-sidebar-foreground"
                      )}
                    >
                      {sub.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="lg:col-span-3 prose prose-lg max-w-none text-foreground">
          {docsData.map((section, i) => (
            <DocSection
              key={i}
              id={section.id}
              title={section.title}
              sections={section.sections} // ✅ updated
            />
          ))}
        </main>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-background border-b border-border px-4 py-3 flex justify-between items-center z-50">
        <h1 className="text-xl font-bold">Docs</h1>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setMobileOpen(true)}
          className="border-border"
        >
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
