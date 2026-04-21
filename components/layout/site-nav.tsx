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
      <ul className="grid grid-cols-2 gap-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-school.gray sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:text-sm sm:tracking-[0.24em]">
        {navItems.map((item, index) => (
          <li key={item.href} className={index === 2 ? "col-span-2 sm:col-span-1" : ""}>
            <Link
              href={item.href}
              className={`inline-flex w-full items-center justify-center rounded-full border px-5 py-2.5 transition duration-300 hover:-translate-y-0.5 sm:w-auto sm:px-8 ${
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
