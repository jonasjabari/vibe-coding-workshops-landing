import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ProblemSolutionSection() {
  return (
    <section id="problem-solution" className="py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Die Herausforderung unserer Zeit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            KI verändert alles – aber wie nutzen Sie diese Macht für Ihr Unternehmen?
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-stretch">
          <div className="flex">
            <Card className="border shadow-md bg-white hover:shadow-lg transition-shadow duration-200 flex-1">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 font-bold">
                  Herausforderung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Unternehmen stehen durch die aktuelle KI-Welle unter permanentem Innovationsdruck. Der Markt verlangt
                  schnellere, bessere Lösungen – während Mitarbeitende Gefahr laufen, von den rasanten Veränderungen
                  abgehängt zu werden.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex">
            <Card className="border shadow-md bg-white hover:shadow-lg transition-shadow duration-200 flex-1">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 font-bold">
                  Unsere Lösung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Vibe Coding schließt die Lücke zwischen „KI verstehen" und „KI wirksam umsetzen". Ihre Mitarbeitenden
                  bauen ohne klassische Programmierhürden interaktive Prototypen, automatisieren Prozesse und bringen
                  Ideen in Rekordzeit zur Reife.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 