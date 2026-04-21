import { schoolInfo } from "@/data/site";

export function ContactCard() {
  return (
    <section className="rounded-[2rem] border border-school.gold/30 bg-white p-6 shadow-panel sm:p-8">
      <h1 className="font-serif text-4xl font-semibold text-school.charcoal">
        Contact {schoolInfo.name}
      </h1>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div className="rounded-[1.5rem] bg-school.cream p-5">
          <p className="text-sm font-semibold text-school.red">Address</p>
          <p className="mt-2 text-base leading-8 text-school.charcoal">
            {schoolInfo.address}
          </p>
        </div>
        <div className="rounded-[1.5rem] bg-school.cream p-5">
          <p className="text-sm font-semibold text-school.red">Phone Numbers</p>
          <div className="mt-2 space-y-2 text-base leading-8 text-school.charcoal">
            {schoolInfo.phones.map((phone) => (
              <p key={phone}>{phone}</p>
            ))}
          </div>
          <p className="mt-4 text-sm font-semibold text-school.red">Email</p>
          <p className="mt-2 text-base leading-8 text-school.charcoal">
            {schoolInfo.email}
          </p>
        </div>
      </div>
    </section>
  );
}
