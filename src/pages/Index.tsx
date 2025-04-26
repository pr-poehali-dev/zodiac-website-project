import React from "react";
import ZodiacNav from "@/components/ZodiacNav";
import ZodiacCard from "@/components/ZodiacCard";
import { zodiacSigns } from "@/data/zodiacSigns";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-40 bg-background/80">
        <div className="container py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Мир Зодиака
            </h1>
          </div>
          <ZodiacNav />
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Познайте тайны звёзд
            </h2>
            <p className="text-muted-foreground text-lg">
              Исследуйте характеристики всех 12 знаков зодиака и откройте для себя, 
              что звезды могут рассказать о вашей личности, отношениях и судьбе.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {zodiacSigns.map((sign) => (
              <ZodiacCard key={sign.id} {...sign} />
            ))}
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Астрология и зодиак</h2>
                <p className="mb-4 text-muted-foreground">
                  Зодиак — это пояс созвездий, через который с земной точки зрения проходит Солнце за год. 
                  Каждый знак зодиака представляет собой уникальный набор характеристик и энергий.
                </p>
                <p className="text-muted-foreground">
                  В астрологии положение планет в момент рождения человека считается влияющим на его характер, 
                  судьбу и взаимодействие с миром. Изучая свой знак зодиака, вы можете лучше понять свои сильные 
                  и слабые стороны.
                </p>
              </div>
              <div className="relative">
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1502239608882-93b729c6af43?q=80&w=2070&auto=format&fit=crop" 
                    alt="Звездное небо" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <blockquote className="italic text-xl">
                      "Мы не просто под звездами, мы из звезд."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">— Карл Саган</cite>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card/50 border-t border-border/40 py-8">
        <div className="container">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Мир Зодиака. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
