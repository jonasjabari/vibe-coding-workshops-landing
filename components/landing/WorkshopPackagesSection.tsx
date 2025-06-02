import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star } from "lucide-react"

export function WorkshopPackagesSection() {
  return (
    <section id="workshop-packages" className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unsere Workshop-Pakete im Überblick
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wählen Sie das passende Format für Ihre Bedürfnisse
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {/* Seed Package */}
          <div className="flex">
            <Card className="border shadow-md bg-white hover:shadow-lg transition-shadow duration-200 flex-1 flex flex-col">
              <CardHeader className="text-center pb-4 pt-6">
                <Badge className="w-fit mx-auto mb-4 mt-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 text-lg px-4 py-2">Seed</Badge>
                <CardTitle className="text-2xl mb-2 font-bold text-gray-900">Ideen keimen zu anfassbaren Frontend-Webanwendungen</CardTitle>
                <CardDescription className="text-lg font-semibold text-blue-600">4 Stunden Workshop</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                  <h4 className="font-semibold text-gray-900">Das steckt drin:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Input: Alles Wesentliche rund um Vibe Coding</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Hands-On: Prototyping mit Support an vorgefertigten Beispielen</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Erfahrungsaustausch und Brainstorming möglichen Adaptionen</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t mt-auto">
                  <div className="text-3xl font-bold text-gray-900 mb-2">3.000 €</div>
                  <div className="text-sm text-gray-500 mb-4">zzgl. USt.</div>
                  <a href="mailto:snackermann@outlook.de">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg">Jetzt buchen</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sprint Package */}
          <div className="relative flex">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <Badge className="bg-blue-600 text-white px-4 py-2 shadow-md border-0">
                <Star className="w-4 h-4 mr-1" />
                Beliebt
              </Badge>
            </div>
            <Card className="border-2 border-blue-200 shadow-md bg-white hover:shadow-lg transition-shadow duration-200 flex-1 flex flex-col">
              <CardHeader className="text-center pb-4 pt-6">
                <Badge className="w-fit mx-auto mb-4 mt-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 text-lg px-4 py-2">Sprint</Badge>
                <CardTitle className="text-2xl mb-2 font-bold text-gray-900">
                  Visionen entwickeln sich zu einsatzbereiten Full‑Stack‑Applikation
                </CardTitle>
                <CardDescription className="text-lg font-semibold text-blue-600">8 Stunden Workshop</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                  <h4 className="font-semibold text-gray-900">Seedworkshop am Vormittag, plus:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Input: Backend, Schnittstellen, Datenspeicherung und Softwarearchitekturbasics
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Hands-On: Erweiterung der Vormittagsergebnisse mit Funktionalitäten
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Austausch zur Integration in eigene Projekte und Abläufe</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t mt-auto">
                  <div className="text-3xl font-bold text-gray-900 mb-2">5.000 €</div>
                  <div className="text-sm text-gray-500 mb-4">zzgl. USt.</div>
                  <a href="mailto:snackermann@outlook.de">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg">Jetzt buchen</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Transform Package */}
          <div className="flex">
            <Card className="border shadow-md bg-white hover:shadow-lg transition-shadow duration-200 flex-1 flex flex-col">
              <CardHeader className="text-center pb-4 pt-6">
                <Badge className="w-fit mx-auto mb-4 mt-4 bg-blue-100 text-blue-800 hover:bg-blue-200 border-0 text-lg px-4 py-2">
                  Transform
                </Badge>
                <CardTitle className="text-2xl mb-2 font-bold text-gray-900">
                  Individuelle Herausforderungen transformieren sich zu konkreten Lösungen
                </CardTitle>
                <CardDescription className="text-lg font-semibold text-blue-600">8 Stunden Workshop</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                  <h4 className="font-semibold text-gray-900">Sprint Workshop, plus:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Vorabgespräche mit allen Teilnehmenden zur Identifikation individueller Usecases
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Anforderungsvorbereitung und Scopedefinition der Usecases</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Austausch zur Ergebnisimplementierung</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t mt-auto">
                  <div className="text-3xl font-bold text-gray-900 mb-2">7.500 €</div>
                  <div className="text-sm text-gray-500 mb-4">zzgl. USt.</div>
                  <a href="mailto:snackermann@outlook.de">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg">Jetzt buchen</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 