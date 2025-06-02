"use client"

import {
  HeroSection,
  ProblemSolutionSection,
  BenefitsSection,
  WorkshopPackagesSection,
  AddOnsSection,
  TeamSection,
  CTASection,
  Footer
} from "@/components/landing"

export default function VibeCodingLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 via-blue-50/30 to-blue-50">
      <HeroSection />
      <ProblemSolutionSection />
      <BenefitsSection />
      <WorkshopPackagesSection />
      <AddOnsSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </div>
  )
}
