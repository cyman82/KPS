"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { classBookGroups } from "@/data/books";

const ALL_CLASSES = "All Classes";

export function BookDashboard() {
  const [selectedClass, setSelectedClass] = useState(ALL_CLASSES);
  const [query, setQuery] = useState("");
  const [publisherFilter, setPublisherFilter] = useState("All Publishers");

  const activeGroup = classBookGroups.find((group) => group.label === selectedClass);

  const booksForView = activeGroup
    ? activeGroup.books.map((book) => ({ ...book, classLabel: activeGroup.label }))
    : classBookGroups.flatMap((group) =>
        group.books.map((book) => ({ ...book, classLabel: group.label }))
      );

  const publishers = Array.from(
    new Set(booksForView.map((book) => book.publisher))
  ).sort((a, b) => a.localeCompare(b));

  const filteredBooks = booksForView.filter((book) => {
    const matchesQuery = book.name.toLowerCase().includes(query.toLowerCase());
    const matchesPublisher =
      publisherFilter === "All Publishers" || book.publisher === publisherFilter;

    return matchesQuery && matchesPublisher;
  });

  return (
    <section className="space-y-6">
      <div className="rounded-[2rem] border border-school.saffron/20 bg-white p-6 shadow-panel sm:p-8">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr_1fr]">
          <label className="space-y-2">
            <span className="text-sm font-semibold text-school.charcoal">Select Class</span>
            <select
              value={selectedClass}
              onChange={(event) => {
                setSelectedClass(event.target.value);
                setPublisherFilter("All Publishers");
                setQuery("");
              }}
              className="w-full rounded-2xl border border-school.red/15 bg-school.cream px-4 py-3 text-school.charcoal outline-none transition focus:border-school.red"
            >
              <option value={ALL_CLASSES}>{ALL_CLASSES}</option>
              {classBookGroups.map((group) => (
                <option key={group.label} value={group.label}>
                  {group.label}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-school.charcoal">Search Books</span>
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-school.red" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by book name"
                className="w-full rounded-2xl border border-school.red/15 bg-school.cream py-3 pl-11 pr-4 text-school.charcoal outline-none transition focus:border-school.red"
              />
            </div>
          </label>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-school.charcoal">Filter Publisher</span>
            <select
              value={publisherFilter}
              onChange={(event) => setPublisherFilter(event.target.value)}
              className="w-full rounded-2xl border border-school.red/15 bg-school.cream px-4 py-3 text-school.charcoal outline-none transition focus:border-school.red"
            >
              <option>All Publishers</option>
              {publishers.map((publisher) => (
                <option key={publisher} value={publisher}>
                  {publisher}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-[1.5rem] border border-school.red/10 bg-white p-5 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-school.red">
            Active Class
          </p>
          <p className="mt-3 text-3xl font-bold tracking-tight text-school.charcoal">
            {selectedClass}
          </p>
        </div>
        <div className="rounded-[1.5rem] border border-school.red/10 bg-white p-5 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-school.red">
            Books Showing
          </p>
          <p className="mt-3 text-3xl font-bold tracking-tight text-school.charcoal">
            {filteredBooks.length}
          </p>
        </div>
        <div className="rounded-[1.5rem] border border-school.red/10 bg-white p-5 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-school.red">
            Publishers
          </p>
          <p className="mt-3 text-3xl font-bold tracking-tight text-school.charcoal">
            {publishers.length}
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-school.red/10 bg-white shadow-panel">
        <div className="flex items-center justify-between border-b border-school.red/10 bg-school.cream px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-school.red">
              Book Table
            </p>
            <h2 className="font-serif text-2xl font-semibold text-school.charcoal">
              {selectedClass} Book List
            </h2>
          </div>
          <p className="hidden text-sm text-school.gray sm:block">
            Rates are intentionally hidden.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-white">
              <tr className="border-b border-school.red/10 text-sm uppercase tracking-[0.16em] text-school.gray">
                <th className="px-5 py-4 font-semibold">S. No.</th>
                {!activeGroup ? <th className="px-5 py-4 font-semibold">Class</th> : null}
                <th className="px-5 py-4 font-semibold">Book Name</th>
                <th className="px-5 py-4 font-semibold">Publisher</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book, index) => (
                  <tr
                    key={`${book.classLabel}-${book.id}-${index}`}
                    className="border-b border-school.red/5 transition duration-300 hover:bg-school.cream/60"
                  >
                    <td className="px-5 py-4 text-sm font-semibold text-school.red">
                      {index + 1}
                    </td>
                    {!activeGroup ? (
                      <td className="px-5 py-4 text-school.charcoal">{book.classLabel}</td>
                    ) : null}
                    <td className="px-5 py-4 text-school.charcoal">{book.name}</td>
                    <td className="px-5 py-4 text-school.gray">{book.publisher}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={activeGroup ? 3 : 4}
                    className="px-5 py-10 text-center text-school.gray"
                  >
                    No books match the current search and publisher filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
