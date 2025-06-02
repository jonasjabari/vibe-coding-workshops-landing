import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-40 bg-gradient-to-b from-slate-800 via-slate-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-4xl mx-auto">
          Neugierig? Schreiben Sie uns jetzt und sichern Sie sich Ihren Wunschtermin
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <a href="mailto:snackermann@outlook.de">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg">
              Kontakt aufnehmen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
} 