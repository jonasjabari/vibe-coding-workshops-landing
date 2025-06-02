import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            <Zap className="w-4 h-4 mr-2" />
            KI-Power für Ihre Teams
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Vibe Coding <span className="text-blue-400">Kompetenz</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Bringen Sie Projekte, Prozesse & People innerhalb eines Tages auf Next-Level-Produktivität.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg"
              onClick={() => {
                document.getElementById('workshop-packages')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Workshop buchen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-800 bg-transparent px-8 py-4 text-lg"
              onClick={() => {
                document.getElementById('problem-solution')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Mehr erfahren
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 