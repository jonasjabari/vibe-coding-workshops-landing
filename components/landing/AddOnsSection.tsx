import { Card, CardContent } from "@/components/ui/card"
import { Code, Users, Rocket, Zap, Star } from "lucide-react"

export function AddOnsSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Individuelle Add‑on Möglichkeiten für den besten Mehrwert
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
              Erweitern Sie Ihren Workshop nach Bedarf
            </p>
            <p className="text-gray-500">(Zusatzkosten)</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="flex">
              <Card className="border shadow-md bg-white hover:shadow-lg transition-shadow duration-200 flex-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">Anbindung von KI‑Schnittstellen</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Wir zeigen wie APIs von KI-Systemen in eigene Anwendungen angebunden werden können
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex">
              <Card className="border shadow-md bg-white hover:shadow-lg transition-shadow duration-200 flex-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">Follow‑up‑Gruppencall</h3>
                  <p className="text-gray-700 leading-relaxed">
                    60‑min Review & Q&A, um Erfahrungen aus der Praxis zu vertiefen
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex">
              <Card className="border shadow-md bg-white hover:shadow-lg transition-shadow duration-200 flex-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">Individuelle Nachbetreuung</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Begleitende Sparrings‑Sessions, um Fortschritte dauerhaft zu sichern
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex">
              <Card className="border shadow-md bg-white hover:shadow-lg transition-shadow duration-200 flex-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">Personalisierte Plattform‑Setups</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Feinjustierte Agenteneinstellungen für jeden Teilnehmenden optimiert
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex md:col-span-2">
              <Card className="border shadow-md bg-white hover:shadow-lg transition-shadow duration-200 flex-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">Inspirierender Offsite‑Space</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Kreatives Ambiente fernab vom Tagesgeschäft für maximale Ideenfreiheit
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 