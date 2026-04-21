import Image from "next/image";
import { schoolInfo } from "@/data/site";
import { SiteNav } from "@/components/layout/site-nav";

export function SiteHeader() {
  return (
    <header className="border-b border-school.saffron/20 bg-white shadow-soft">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-5 lg:grid-cols-[1fr_auto_1fr]">
          <div className="space-y-1 text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-school.red">
              {schoolInfo.recognition}
            </p>
            <p className="font-medium text-school.gray">{schoolInfo.address}</p>
          </div>

          <div className="flex flex-col items-center gap-3 text-center">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-school.saffron/70 bg-white shadow-premium">
              <Image
                src="/images/saraswati-logo.jpg"
                alt="Saraswati logo"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-serif text-3xl font-bold tracking-wide text-school.red sm:text-4xl">
                {schoolInfo.name}
              </p>
              <p className="mt-1 text-sm font-medium uppercase tracking-[0.24em] text-school.gray">
                {schoolInfo.medium}
              </p>
            </div>
          </div>

          <div className="space-y-1 text-center lg:text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-school.red">
              Contact Numbers
            </p>
            {schoolInfo.phones.map((phone) => (
              <p key={phone} className="font-medium text-school.gray">
                {phone}
              </p>
            ))}
            <p className="pt-1 text-sm font-medium text-school.gray">
              {schoolInfo.email}
            </p>
          </div>
        </div>

        <SiteNav />
      </div>
    </header>
  );
}
