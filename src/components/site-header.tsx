"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  NAVIGATION_ITEMS,
  BUTTON_ITEMS,
} from "@/constants/navigation";

function getNavLinkClasses(itemHref: string, pathname: string) {
  const base = "text-sm transition duration-200";

  const isActivePath =
    itemHref === "/" ? pathname === "/" : pathname.startsWith(itemHref);

  if (isActivePath) {
    return `${base} text-[#C62828]`;
  }

  return `${base} text-white/85 hover:text-[#C62828]`;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111]/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C62828] bg-[#1B1B1B] text-xs font-extrabold tracking-[0.2em]">
            FIJI
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Firman Ishikawaryu
            </p>
            <p className="text-xs text-white/65">Ju-Jutsu Indonesia</p>
          </div>
        </Link>

        <button
          className="inline-flex rounded-md border border-white/20 px-3 py-2 text-sm md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          type="button"
        >
          {mobileMenuOpen ? "Close" : "Menu"}
        </button>

        <nav className="hidden items-center gap-5 md:flex">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={getNavLinkClasses(item.href, pathname)}
            >
              {item.label}
            </Link>
          ))}

          {BUTTON_ITEMS.map((button) => (
            <Link key={button.label} href={button.href} className={button.style}>
              {button.label}
            </Link>
          ))}
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#181818] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-white/90"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {BUTTON_ITEMS.map((button) => (
              <Link
                key={button.label}
                href={button.href}
                className={`${button.style} block text-center`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {button.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
