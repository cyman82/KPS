import { schoolInfo } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-school.saffron/25 bg-school.charcoal text-school.charcoal">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_top,rgba(244,163,0,0.12),transparent_24%),radial-gradient(circle_at_right_bottom,rgba(178,34,34,0.16),transparent_28%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 text-sm sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="space-y-2">
          <p className="font-serif text-2xl font-semibold text-black">{schoolInfo.name}</p>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-school.saffron">
            {schoolInfo.recognition}
          </p>
          <p className="text-base text-black">{schoolInfo.address}</p>
        </div>
        <div className="space-y-2 text-left lg:text-right">
          <p className="text-base font-medium text-black">{schoolInfo.phones.join(" | ")}</p>
          <p className="text-base text-black">{schoolInfo.email}</p>
          <p className="text-base text-black">English Medium (Pre-Nursery to 12th)</p>
          <p className="text-black/80">
            Copyright &copy; {new Date().getFullYear()} {schoolInfo.name}. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
