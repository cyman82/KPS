import { bookAvailabilityShops } from "@/data/site";

export function BookAvailabilitySection() {
  return (
    <section className="rounded-[2rem] border border-school.saffron/20 bg-white px-6 py-8 shadow-panel sm:px-8">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-school.red">
          Book Availability
        </p>
        <h2 className="font-serif text-3xl font-semibold text-school.charcoal">
          Shops Where Books Are Available
        </h2>
        <p className="text-sm leading-7 text-school.gray sm:text-base">
          Parents can collect the listed books from the following shops in
          Indore.
        </p>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {bookAvailabilityShops.map((shop) => (
          <article
            key={shop.name}
            className="rounded-[1.6rem] border border-school.saffron/20 bg-school.cream p-6 shadow-soft"
          >
            <p className="font-serif text-2xl font-semibold text-school.charcoal">
              {shop.name}
            </p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-school.red">
              Address
            </p>
            <p className="mt-1 text-base leading-7 text-school.gray">{shop.address}</p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-school.red">
              Contact Number
            </p>
            <p className="mt-1 text-base leading-7 text-school.gray">{shop.phone}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
