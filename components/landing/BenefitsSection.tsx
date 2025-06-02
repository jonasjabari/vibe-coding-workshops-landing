import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Zap, Users } from "lucide-react"

export function BenefitsSection() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Davon profitieren Ihre Teams sofort
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Konkrete Vorteile, die Sie vom ersten Tag an spüren werden
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          <div className="flex">
            <Card className="text-center border shadow-md bg-white hover:shadow-lg transition-shadow duration-200 flex-1">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Effizientere Digitalprojekte</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Schnelle Prototypen validieren Features, bevor Entwicklungsbudgets fließen.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex">
            <Card className="text-center border shadow-md bg-white hover:shadow-lg transition-shadow duration-200 flex-1">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Interne Prozesse agil befeuern</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Teams verbinden Schnittstellen, bauen smarte Oberflächen und passen Abläufe selbstständig an.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex">
            <Card className="text-center border shadow-md bg-white hover:shadow-lg transition-shadow duration-200 flex-1">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Kulturchange zu KI-empowerten Mitarbeitenden</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Boost für Mitarbeitende – der Handlungsspielraum und die Lernmotivation steigen spürbar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 