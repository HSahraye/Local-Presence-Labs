"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { navigationLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { CTAButton } from "@/components/cta-button";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#1C768F]/15 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="text-lg font-bold text-[#032539]">
          Local Presence Labs
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#1C768F]",
                pathname === link.href ? "text-[#1C768F]" : "text-[#334155]",
              )}
            >
              {link.label}
            </Link>
          ))}
          <CTAButton href="/free-audit" size="sm">
            Get a Free Audit
          </CTAButton>
        </nav>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex rounded-md border border-[#1C768F]/25 p-2 text-[#032539] md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-[#1C768F]/15 bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium",
                  pathname === link.href
                    ? "bg-[#1C768F]/10 text-[#1C768F]"
                    : "text-[#334155]",
                )}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <CTAButton href="/free-audit" className="mt-2 w-full" size="sm">
              Get a Free Audit
            </CTAButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
