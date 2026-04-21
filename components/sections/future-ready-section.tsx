import { futureModules } from "@/data/site";

export function FutureReadySection() {
  return (
    <section
      id="future-ready"
      className="rounded-[2.1rem] border border-school.saffron/20 bg-white px-6 py-10 shadow-soft sm:px-8 lg:px-10"
    >
      <div className="mb-8 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-school.red">
          Future Ready
        </p>
        <h2 className="font-serif text-4xl font-semibold text-school.charcoal sm:text-[3rem]">
          Expansion Placeholders
        </h2>
        <p className="max-w-2xl text-base leading-8 text-school.gray">
          These modules are already reflected in the design so the website can
          expand naturally into a broader school portal later.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {futureModules.map((item) => (
          <article
            key={item.title}
            className="card-luxury rounded-[1.6rem] border border-dashed border-school.saffron/45 bg-school.cream p-6 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-school.red hover:shadow-panel"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-school.red">
              Upcoming
            </p>
            <h3 className="mt-3 font-serif text-[2rem] font-semibold text-school.charcoal">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-school.gray">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
