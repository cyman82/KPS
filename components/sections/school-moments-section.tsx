import { readdir } from "fs/promises";
import path from "path";
import { SchoolMomentsSlideshow } from "@/components/sections/school-moments-slideshow";

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);
const videoExtensions = new Set([".mp4", ".webm", ".mov", ".m4v"]);

async function getMediaItems() {
  const mediaDir = path.join(process.cwd(), "media");

  try {
    const files = await readdir(mediaDir);

    return files
      .map((fileName) => {
        const extension = path.extname(fileName).toLowerCase();
        if (imageExtensions.has(extension)) {
          return {
            src: `/media/${encodeURIComponent(fileName)}`,
            type: "image" as const,
            alt: fileName.replace(path.extname(fileName), "").replace(/[-_]/g, " ")
          };
        }

        if (videoExtensions.has(extension)) {
          return {
            src: `/media/${encodeURIComponent(fileName)}`,
            type: "video" as const,
            alt: fileName.replace(path.extname(fileName), "").replace(/[-_]/g, " ")
          };
        }

        return null;
      })
      .filter((item): item is NonNullable<typeof item> => item !== null)
      .sort((a, b) => a.src.localeCompare(b.src));
  } catch {
    return [];
  }
}

export async function SchoolMomentsSection() {
  const mediaItems = await getMediaItems();

  return (
    <section className="space-y-6">
      <div className="space-y-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-school.red">
          School Moments
        </p>
        <h2 className="font-serif text-4xl font-semibold text-school.charcoal sm:text-[3.2rem]">
          School Moments
        </h2>
        <p className="mx-auto max-w-3xl text-base leading-8 text-school.gray">
          A glimpse into campus life, learning, and celebrations
        </p>
      </div>

      <SchoolMomentsSlideshow mediaItems={mediaItems} />
    </section>
  );
}
