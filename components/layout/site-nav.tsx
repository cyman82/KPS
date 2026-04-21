"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/book-list", label: "Book List" },
  { href: "/contact", label: "Contact" }
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="w-full">
      <ul className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-school.gray">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`rounded-full border px-4 py-2 transition duration-300 hover:-translate-y-0.5 ${
                pathname === item.href
                  ? "border-school.red bg-school.red/5 text-school.red shadow-soft"
                  : "border-school.saffron/40 bg-white text-school.gray hover:border-school.red hover:text-school.red"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
