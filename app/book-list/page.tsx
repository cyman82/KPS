import { BookAvailabilitySection } from "@/components/sections/book-availability-section";
import { BookDashboard } from "@/components/books/book-dashboard";

export default function BookListPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-school.saffron/20 bg-white px-6 py-8 shadow-panel sm:px-8">
        <h1 className="font-serif text-4xl font-semibold text-school.charcoal">
          Class-wise Book List
        </h1>
        <p className="mt-3 text-sm leading-7 text-school.gray sm:text-base lg:whitespace-nowrap">
          Select a class to view the official school book list. Search by book
          name, filter by publisher, and browse on mobile or desktop with a clean
          table layout.
        </p>
      </section>
      <BookDashboard />
      <BookAvailabilitySection />
    </div>
  );
}
