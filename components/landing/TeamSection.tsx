import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function TeamSection() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Das sind wir</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ihr Expertenteam für die KI-Transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <div className="flex">
              <Card className="text-center border shadow-md bg-white hover:shadow-lg transition-shadow duration-200 flex-1">
                <CardContent className="p-10">
                  <div className="w-56 h-56 rounded-3xl mx-auto mb-8 shadow-lg overflow-hidden">
                    <img src="/jonas.webp" alt="Jonas" className="w-full h-full object-cover object-center" style={{objectPosition: '50% 20%'}} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Jonas Jabari</h3>
                  <p className="text-blue-600 font-semibold mb-6 text-lg">Full-Stack-Entwickler mit KI-Fokus</p>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    Problem-Löser für jede technische Hürde. Nutzt Vibe Coding täglich als Produktivitäts-Turbolader.
                  </p>
                  <a href="https://jonasjabari.dev" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                    jonasjabari.dev
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="flex">
              <Card className="text-center border shadow-md bg-white hover:shadow-lg transition-shadow duration-200 flex-1">
                <CardContent className="p-10">
                  <div className="w-56 h-56 rounded-3xl mx-auto mb-8 shadow-lg overflow-hidden">
                    <img src="/steffen.jpg" alt="Steffen" className="w-full h-full object-cover object-center" style={{objectPosition: '50% 20%'}} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Steffen Ackermann</h3>
                  <p className="text-blue-600 font-semibold mb-6 text-lg">
                    Experte für generative KI & Kompetenzaufbau
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    Versteht die Perspektive von Nicht-Entwicklern und übersetzt Ideen in greifbare Prototypen.
                  </p>
                  <a href="https://ainlighten.de" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                    ainlighten.de
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-16">
            <Card className="border shadow-md bg-white hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8">
                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Gemeinsam bündeln wir Technik- und Change-Know-how, damit Ihr Unternehmen maximal profitiert.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 