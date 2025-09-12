"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function TectonicPlatesPage() {
  const [activeAnimation, setActiveAnimation] = useState<string | null>(null)

  const triggerAnimation = (type: string) => {
    setActiveAnimation(type)
    setTimeout(() => setActiveAnimation(null), 4000)
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="py-6 px-4 bg-primary/10 border-b">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">Integrantes do Grupo</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-2">
            <span className="text-muted-foreground">Felipe Paiva</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">João Paulo Guimarães</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">Leonardo Fernandes</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">Thalles Frabetti</span>
          </div>
          <Badge variant="outline" className="text-sm">
            Turma: 2s2
          </Badge>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-6 text-balance">Placas Tectônicas</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Descubra como as forças da Terra moldam nosso planeta através do movimento das placas tectônicas e a
            formação de terremotos.
          </p>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Geologia Interativa
          </Badge>
        </div>
      </section>

      {/* Interactive Simulation Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Simulação Interativa de Movimentos Tectônicos
          </h2>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Demonstração de Movimentos das Placas</CardTitle>
              <CardDescription>
                Clique nos botões abaixo para ver como diferentes tipos de movimento das placas tectônicas podem causar
                terremotos
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Simulation Area */}
              <div className="relative h-96 bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg overflow-hidden mb-6 border-2 border-muted">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
                  {activeAnimation && (
                    <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg border border-yellow-400 animate-pulse">
                      ⚡ TERREMOTO MAGNITUDE 7.2 ⚡
                    </div>
                  )}
                </div>

                {/* Background terrain effect */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-amber-800 to-transparent"></div>
                </div>

                {/* Grid lines and depth indicators */}
                <div className="absolute inset-0 opacity-10">
                  <div className="h-full w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(255,255,255,0.1)_40px,rgba(255,255,255,0.1)_42px)] bg-[repeating-linear-gradient(0deg,transparent,transparent_40px,rgba(255,255,255,0.1)_40px,rgba(255,255,255,0.1)_42px)]"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Enhanced Plate 1 */}
                  <div
                    className={`absolute w-52 h-44 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-lg shadow-2xl border-4 border-blue-300 transition-all duration-[4000ms] ease-in-out transform ${
                      activeAnimation === "convergent"
                        ? "translate-x-16 rotate-2 scale-110 shadow-blue-500/50"
                        : activeAnimation === "divergent"
                          ? "-translate-x-20 -rotate-1 shadow-blue-500/30"
                          : activeAnimation === "transform"
                            ? "translate-y-10 rotate-3 shadow-blue-500/40"
                            : "shadow-blue-500/20"
                    }`}
                    style={{ left: "12%", top: "22%" }}
                  >
                    {/* Prominent plate label */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg border-2 border-blue-300">
                      PLACA OCEÂNICA
                    </div>

                    {/* Directional arrow */}
                    {activeAnimation && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-blue-200 text-3xl animate-bounce">
                        {activeAnimation === "convergent" ? "→" : activeAnimation === "divergent" ? "←" : "↑"}
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-400/30 to-blue-700/50 rounded-lg"></div>

                    {/* Enhanced rock layer texture */}
                    <div className="absolute inset-0 opacity-60">
                      <div className="h-full w-full bg-[repeating-linear-gradient(15deg,transparent,transparent_6px,rgba(255,255,255,0.15)_6px,rgba(255,255,255,0.15)_8px)] rounded-lg"></div>
                      <div className="absolute inset-0 bg-[repeating-linear-gradient(-15deg,transparent,transparent_8px,rgba(0,0,0,0.1)_8px,rgba(0,0,0,0.1)_10px)] rounded-lg"></div>
                    </div>
                  </div>

                  {/* Enhanced Plate 2 */}
                  <div
                    className={`absolute w-52 h-44 bg-gradient-to-l from-red-600 via-red-500 to-red-600 rounded-lg shadow-2xl border-4 border-red-300 transition-all duration-[4000ms] ease-in-out transform ${
                      activeAnimation === "convergent"
                        ? "-translate-x-16 -rotate-2 scale-110 shadow-red-500/50"
                        : activeAnimation === "divergent"
                          ? "translate-x-20 rotate-1 shadow-red-500/30"
                          : activeAnimation === "transform"
                            ? "-translate-y-10 -rotate-3 shadow-red-500/40"
                            : "shadow-red-500/20"
                    }`}
                    style={{ right: "12%", top: "22%" }}
                  >
                    {/* Prominent plate label */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-red-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg border-2 border-red-300">
                      PLACA CONTINENTAL
                    </div>

                    {/* Directional arrow */}
                    {activeAnimation && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-red-200 text-3xl animate-bounce">
                        {activeAnimation === "convergent" ? "←" : activeAnimation === "divergent" ? "→" : "↓"}
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-red-400/30 to-red-700/50 rounded-lg"></div>

                    {/* Enhanced rock layer texture */}
                    <div className="absolute inset-0 opacity-60">
                      <div className="h-full w-full bg-[repeating-linear-gradient(15deg,transparent,transparent_6px,rgba(255,255,255,0.15)_6px,rgba(255,255,255,0.15)_8px)] rounded-lg"></div>
                      <div className="absolute inset-0 bg-[repeating-linear-gradient(-15deg,transparent,transparent_8px,rgba(0,0,0,0.1)_8px,rgba(0,0,0,0.1)_10px)] rounded-lg"></div>
                    </div>
                  </div>

                  {/* Enhanced fault line */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-2 h-40 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 rounded-full shadow-lg"></div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-yellow-600 text-white px-3 py-1 rounded text-xs font-bold">
                      LINHA DE FALHA
                    </div>
                  </div>

                  {/* Enhanced Earthquake Effect */}
                  {activeAnimation && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* More dramatic shock waves */}
                      <div className="absolute w-20 h-20 bg-yellow-400/40 rounded-full animate-ping border-4 border-yellow-300"></div>
                      <div className="absolute w-32 h-32 bg-orange-400/30 rounded-full animate-ping animation-delay-300 border-2 border-orange-300"></div>
                      <div className="absolute w-44 h-44 bg-red-400/20 rounded-full animate-ping animation-delay-600 border border-red-300"></div>

                      {/* Enhanced central earthquake indicator */}
                      <div className="absolute w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse shadow-2xl border-4 border-yellow-200">
                        <div className="absolute inset-2 bg-white rounded-full animate-ping"></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Enhanced status indicator */}
                <div className="absolute bottom-4 left-4 bg-black/80 text-white px-4 py-3 rounded-lg text-sm border border-white/20">
                  <div className="font-bold">
                    {activeAnimation
                      ? `Movimento ${activeAnimation === "convergent" ? "Convergente" : activeAnimation === "divergent" ? "Divergente" : "Transformante"} ativo`
                      : "Clique em um botão para iniciar simulação"}
                  </div>
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  onClick={() => triggerAnimation("convergent")}
                  variant={activeAnimation === "convergent" ? "default" : "outline"}
                  className="flex-1 min-w-[200px]"
                >
                  Movimento Convergente
                </Button>
                <Button
                  onClick={() => triggerAnimation("divergent")}
                  variant={activeAnimation === "divergent" ? "default" : "outline"}
                  className="flex-1 min-w-[200px]"
                >
                  Movimento Divergente
                </Button>
                <Button
                  onClick={() => triggerAnimation("transform")}
                  variant={activeAnimation === "transform" ? "default" : "outline"}
                  className="flex-1 min-w-[200px]"
                >
                  Movimento Transformante
                </Button>
              </div>

              {activeAnimation && (
                <Card className="mt-6 border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Efeitos do Movimento{" "}
                      {activeAnimation === "convergent"
                        ? "Convergente"
                        : activeAnimation === "divergent"
                          ? "Divergente"
                          : "Transformante"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {activeAnimation === "convergent" && (
                      <div className="space-y-3">
                        <p className="font-semibold text-primary">🏔️ Subducção e Colisão Continental:</p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Formação de fossas oceânicas profundas</li>
                          <li>Vulcanismo intenso e cadeias montanhosas vulcânicas (como os Andes)</li>
                          <li>Terremotos profundos e de alta magnitude</li>
                          <li>Criação de grandes cadeias montanhosas (como o Himalaia)</li>
                        </ul>
                      </div>
                    )}
                    {activeAnimation === "divergent" && (
                      <div className="space-y-3">
                        <p className="font-semibold text-primary">🌊 Separação das Placas:</p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Formação de dorsais oceânicas (como a Dorsal Mesoatlântica)</li>
                          <li>Criação de novo assoalho oceânico</li>
                          <li>Vulcanismo submarino ativo</li>
                          <li>Formação de riftes continentais (como o Vale do Rift na África)</li>
                          <li>Terremotos de magnitude moderada</li>
                        </ul>
                      </div>
                    )}
                    {activeAnimation === "transform" && (
                      <div className="space-y-3">
                        <p className="font-semibold text-primary">⚡ Deslizamento Lateral:</p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Formação de falhas transformantes (como a Falha de San Andreas)</li>
                          <li>Terremotos rasos mas muito intensos</li>
                          <li>Sem criação ou destruição significativa de crosta</li>
                          <li>Deslocamento horizontal de estruturas geológicas</li>
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Tipos de Movimentos das Placas Tectônicas - Detalhado
          </h2>

          <div className="space-y-8">
            {/* Movimento Convergente */}
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                  1. Movimento Convergente (ou Convergência)
                </CardTitle>
                <CardDescription className="text-lg">As placas se movem uma em direção à outra</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src="/convergent-tectonic-plates-collision-mountain-form.png"
                      alt="Movimento Convergente"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">🌊 Subducção:</h4>
                      <p className="text-muted-foreground mb-2">
                        Uma placa mergulha sob a outra (geralmente uma oceânica sob uma continental).
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Efeitos:</strong> Formação de fossas oceânicas, vulcanismo, terremotos profundos,
                        cadeias montanhosas vulcânicas (como os Andes).
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">🏔️ Colisão Continental:</h4>
                      <p className="text-muted-foreground mb-2">Duas placas continentais colidem.</p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Efeitos:</strong> Formação de grandes cadeias montanhosas não vulcânicas (como o
                        Himalaia), terremotos intensos.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Movimento Divergente */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                  2. Movimento Divergente (ou Divergência)
                </CardTitle>
                <CardDescription className="text-lg">As placas se afastam uma da outra</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src="/divergent-tectonic-plates-separation-ocean-ridge-f.png"
                      alt="Movimento Divergente"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">🌊 Efeitos Principais:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                        <li>Formação de dorsais oceânicas (como a Dorsal Mesoatlântica)</li>
                        <li>Criação de novo assoalho oceânico</li>
                        <li>Vulcanismo submarino</li>
                        <li>Formação de riftes em continentes (como o Vale do Rift na África)</li>
                        <li>Terremotos moderados</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Movimento Transformante */}
            <Card className="border-l-4 border-l-yellow-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                  3. Movimento Transformante (ou Conservativo)
                </CardTitle>
                <CardDescription className="text-lg">
                  As placas deslizam lateralmente uma em relação à outra
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src="/transform-tectonic-plates-sliding-fault-line-earth.png"
                      alt="Movimento Transformante"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">⚡ Efeitos Principais:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                        <li>Formação de falhas transformantes (como a Falha de San Andreas)</li>
                        <li>Terremotos rasos e intensos</li>
                        <li>Sem criação ou destruição significativa de crosta</li>
                        <li>Deslocamento horizontal de estruturas geológicas</li>
                        <li>Acúmulo de tensão ao longo das falhas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Fatos Interessantes sobre Placas Tectônicas
          </h2>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Movimento Constante</h3>
                    <p className="text-muted-foreground">
                      As placas tectônicas se movem continuamente a uma velocidade de 2-10 centímetros por ano,
                      aproximadamente a mesma velocidade do crescimento das unhas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Anel de Fogo do Pacífico</h3>
                    <p className="text-muted-foreground">
                      Cerca de 90% dos terremotos mundiais ocorrem no "Anel de Fogo do Pacífico", uma região de intensa
                      atividade tectônica ao redor do Oceano Pacífico.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Formação de Montanhas</h3>
                    <p className="text-muted-foreground">
                      As maiores cadeias montanhosas do mundo, como o Himalaia e os Andes, foram formadas pela colisão e
                      movimento das placas tectônicas ao longo de milhões de anos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <Separator className="mb-6" />
          <p className="text-muted-foreground">
            Explore o fascinante mundo da geologia e entenda como nosso planeta está em constante movimento.
          </p>
        </div>
      </footer>
    </div>
  )
}
