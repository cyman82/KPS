import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { dashboardLinks } from "@/data/site";

export function DashboardCards() {
  return (
    <section className="space-y-7">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-school.red">
          Quick Access
        </p>
        <h2 className="font-serif text-4xl font-semibold text-school.charcoal sm:text-[3.2rem]">
          Dashboard Modules
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {dashboardLinks.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="card-luxury group rounded-[1.6rem] border border-school.saffron/20 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-school.saffron/40 hover:shadow-panel"
          >
            <div className="flex h-full flex-col justify-between gap-5">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-school.red">
                  Module
                </p>
                <h3 className="font-serif text-[2rem] font-semibold text-school.charcoal">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-school.gray">
                  {item.description}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-school.red">
                Open section
                <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
