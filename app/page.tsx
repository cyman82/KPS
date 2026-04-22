import { DashboardCards } from "@/components/sections/dashboard-cards";
import { FutureReadySection } from "@/components/sections/future-ready-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SchoolMomentsSection } from "@/components/sections/school-moments-section";

export default function HomePage() {
  return (
    <div className="space-y-12 pb-6 sm:space-y-16 lg:space-y-20">
      <HeroSection />
      <SchoolMomentsSection />
      <DashboardCards />
      <FutureReadySection />
    </div>
  );
}
