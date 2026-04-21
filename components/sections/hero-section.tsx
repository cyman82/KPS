import Image from "next/image";
import Link from "next/link";
import { schoolInfo } from "@/data/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2.25rem] border border-school.saffron/20 bg-school-hero px-6 py-12 shadow-panel sm:px-10 lg:px-14 lg:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,163,0,0.10),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(178,34,34,0.08),transparent_26%)]" />
      <div className="absolute bottom-10 right-12 hidden h-40 w-40 rounded-full border border-school.red/10 lg:block" />
      <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-7 animate-fade-up">
          <span className="inline-flex items-center rounded-full border border-school.saffron/50 bg-white px-5 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.38em] text-school.red shadow-soft before:mr-3 before:h-2 before:w-2 before:rounded-full before:bg-school.saffron before:content-['']">
            2026-27 Academic Session
          </span>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-school.gray">
              Kiran Public School, Indore
            </p>
            <h1 className="max-w-3xl font-serif text-5xl font-bold leading-[0.95] text-school.red sm:text-6xl lg:text-[5.1rem]">
              Welcome to {schoolInfo.name}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-school.gray sm:text-xl">
              A formal, future-ready school dashboard for parents and students to
              access books, contact information, and upcoming school services in
              one place.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-1 animate-fade-up-delay-2">
            <Link
              href="/contact"
              className="rounded-full border border-school.saffron bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-school.red transition duration-300 hover:-translate-y-1 hover:bg-school.saffron/10 hover:shadow-soft"
            >
              Contact School
            </Link>
          </div>
        </div>

        <div className="grid gap-5 animate-fade-up-delay">
          <div className="card-luxury animate-float-soft rounded-[2rem] border border-school.saffron/25 bg-white p-8 text-center shadow-premium">
            <div className="mx-auto flex max-w-[14rem] flex-col items-center gap-4">
              <div className="relative h-28 w-28 overflow-hidden rounded-full bg-white p-2 shadow-soft ring-4 ring-school.saffron/20">
                <Image
                  src="/images/saraswati-logo.jpg"
                  alt="Saraswati logo"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <p className="font-serif text-[1.72rem] font-semibold leading-tight text-school.red sm:text-[1.92rem] lg:text-[2.04rem]">
                  Knowledge, Discipline, Growth
                </p>
                <p className="text-sm leading-7 text-school.gray">
                  Centered identity treatment with a premium white card to keep
                  the school branding formal and strong.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="card-luxury rounded-[1.75rem] border border-school.saffron/25 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-panel">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-school.red">
                School Profile
              </p>
              <p className="mt-3 font-serif text-[2rem] font-semibold text-school.charcoal">
                English Medium
              </p>
              <p className="mt-3 text-sm leading-7 text-school.gray">
                Pre-Nursery to 12th standard with a polished foundation for
                academics and parent communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
