import { UniformGallery } from "@/components/sections/uniform-gallery";

export default function UniformsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-school.saffron/20 bg-white px-6 py-8 shadow-panel sm:px-8">
        <h1 className="font-serif text-4xl font-semibold text-school.charcoal">
          School Uniforms
        </h1>
        <p className="mt-3 text-sm leading-7 text-school.gray sm:text-base">
          Browse the official uniform photos for reference before purchasing.
        </p>
      </section>

      <UniformGallery />
    </div>
  );
}
