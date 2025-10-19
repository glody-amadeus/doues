import { Button } from "@/components/ui/button";
import { Package, Shield, Truck, CheckCircle, Globe, TrendingUp } from "lucide-react";

export function Home() {
  return (
    <>
      <section className="relative text-center py-12 md:py-24 px-4 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-2xl md:rounded-3xl mb-8 md:mb-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-semibold">
            ✨ Votre Expert en Douane
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent px-2">
            Simplifiez vos importations et exportations
          </h2>
          <p className="text-base md:text-xl text-foreground/70 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Votre partenaire de confiance pour un dédouanement rapide et conforme.
          </p>
          <div className="flex gap-3 md:gap-4 justify-center flex-wrap px-4">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all text-sm md:text-base">Obtenir un devis</Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-sm md:text-base">En savoir plus</Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto text-center px-4">
          <h3 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Nos Services</h3>
          <p className="text-muted-foreground mb-8 md:mb-12 text-base md:text-lg">Des solutions complètes pour tous vos besoins douaniers</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="group p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-primary/20 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-3 text-primary">Dédouanement</h4>
              <p className="text-foreground/70">Nous gérons toutes les formalités pour que vos marchandises traversent les frontières sans encombre.</p>
            </div>
            <div className="group p-8 bg-gradient-to-br from-teal-50 to-emerald-50 border-2 border-secondary/20 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-3 text-secondary">Conseil en Réglementation</h4>
              <p className="text-foreground/70">Restez toujours en conformité avec les dernières réglementations douanières internationales.</p>
            </div>
            <div className="group p-8 bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-accent/20 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent to-orange-400 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-3 text-accent-foreground">Logistique et Transport</h4>
              <p className="text-foreground/70">Nous organisons le transport de vos biens de porte à porte, en toute sécurité.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 text-center bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl md:rounded-3xl px-4">
        <h3 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Reconnus pour notre expertise</h3>
        <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-12">Agréés en douane, avec plus de 15 ans d'expérience.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto mb-8 md:mb-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <p className="text-3xl font-bold text-primary">500+</p>
            <p className="text-muted-foreground">Clients satisfaits</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-3">
              <Globe className="w-8 h-8 text-secondary" />
            </div>
            <p className="text-3xl font-bold text-secondary">50+</p>
            <p className="text-muted-foreground">Pays couverts</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-3">
              <TrendingUp className="w-8 h-8 text-accent-foreground" />
            </div>
            <p className="text-3xl font-bold text-accent-foreground">15+</p>
            <p className="text-muted-foreground">Années d'expérience</p>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-12 text-muted-foreground font-semibold flex-wrap gap-4">
          <div className="px-6 py-3 bg-white rounded-lg shadow">Partenaire A</div>
          <div className="px-6 py-3 bg-white rounded-lg shadow">Partenaire B</div>
          <div className="px-6 py-3 bg-white rounded-lg shadow">Partenaire C</div>
        </div>
      </section>
    </>
  );
}
