import { readdir } from "fs/promises";
import path from "path";
import Image from "next/image";

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);
const uniformSections = ["Boys", "Girls"] as const;

type UniformSection = (typeof uniformSections)[number];
type UniformImage = {
  src: string;
  alt: string;
  label: string;
  section: UniformSection;
};

function formatLabel(fileName: string, section: UniformSection) {
  const baseName = fileName.replace(path.extname(fileName), "");
  const withoutPrefix = baseName.replace(new RegExp(`^${section}[_-]?`, "i"), "");

  if (!withoutPrefix || withoutPrefix.toLowerCase() === section.toLowerCase()) {
    return section;
  }

  return withoutPrefix.replace(/[_-]/g, " ");
}

async function getUniformImages() {
  const uniformsDir = path.join(process.cwd(), "media", "Uniforms");

  try {
    const files = await readdir(uniformsDir);

    return files
      .filter((fileName) => imageExtensions.has(path.extname(fileName).toLowerCase()))
      .sort((a, b) => a.localeCompare(b))
      .map((fileName) => {
        const section = uniformSections.find((item) =>
          fileName.toLowerCase().startsWith(item.toLowerCase())
        );

        if (!section) {
          return null;
        }

        return {
          src: `/media/Uniforms/${encodeURIComponent(fileName)}`,
          alt: fileName.replace(path.extname(fileName), "").replace(/[-_]/g, " "),
          label: formatLabel(fileName, section),
          section
        } satisfies UniformImage;
      })
      .filter((item): item is UniformImage => item !== null);
  } catch {
    return [];
  }
}

export async function UniformGallery() {
  const uniformImages = await getUniformImages();

  if (uniformImages.length === 0) {
    return (
      <section className="rounded-[2rem] border border-school.saffron/20 bg-white px-6 py-10 text-center shadow-panel sm:px-8">
        <p className="text-sm leading-7 text-school.gray">
          Uniform photos will appear here once images are added to the uniforms folder.
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      {uniformSections.map((section) => {
        const sectionImages = uniformImages.filter((image) => image.section === section);

        if (sectionImages.length === 0) {
          return null;
        }

        return (
          <div key={section} className="space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-school.red">
                Uniform Section
              </p>
              <h2 className="font-serif text-3xl font-semibold text-school.charcoal">
                {section}
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {sectionImages.map((image) => (
                <article
                  key={image.src}
                  className="overflow-hidden rounded-[1.8rem] border border-school.saffron/20 bg-white shadow-soft"
                >
                  <div className="relative aspect-[4/5] bg-school.cream">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-school.red">
                      {image.label}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        );
      })}

      <div className="rounded-[2rem] border border-school.saffron/20 bg-white px-6 py-6 shadow-soft sm:px-8">
        <p className="text-base leading-8 text-school.gray">
          These uniforms can be bought in any store of your preference.
        </p>
      </div>
    </section>
  );
}
