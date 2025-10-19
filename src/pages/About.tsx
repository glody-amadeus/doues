import { Target, Heart, Award, Lightbulb, Shield } from 'lucide-react';

export function About() {
  return (
    <div className="py-20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">À Propos de l'Agence Glody</h2>
          <p className="text-xl text-muted-foreground">Votre partenaire de confiance depuis 2010</p>
        </div>
        
        <div className="mb-16 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border-2 border-primary/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-primary">Notre Mission</h3>
          </div>
          <p className="text-lg text-foreground/80 leading-relaxed">Notre mission est de simplifier le commerce international pour nos clients. Nous nous engageons à fournir des services de dédouanement et de logistique qui sont non seulement efficaces et conformes, mais aussi transparents et adaptés aux besoins spécifiques de chaque entreprise. Nous croyons en la construction de partenariats à long terme basés sur la confiance et l'excellence du service.</p>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-secondary">Nos Valeurs</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-primary" />
                <strong className="text-lg text-foreground">Intégrité</strong>
              </div>
              <p className="text-foreground/70">Nous opérons avec la plus grande honnêteté et transparence.</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl border border-secondary/20">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-secondary" />
                <strong className="text-lg text-foreground">Expertise</strong>
              </div>
              <p className="text-foreground/70">Notre équipe est composée d'experts passionnés et constamment formés.</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-purple-500" />
                <strong className="text-lg text-foreground">Engagement</strong>
              </div>
              <p className="text-foreground/70">La réussite de nos clients est notre priorité absolue.</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border border-accent/20">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-5 h-5 text-accent-foreground" />
                <strong className="text-lg text-foreground">Innovation</strong>
              </div>
              <p className="text-foreground/70">Nous adoptons les technologies qui rendent le commerce plus fluide.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow-lg border border-primary/10">
            <h3 className="text-2xl font-bold mb-4 text-primary">Notre Histoire</h3>
            <p className="text-foreground/80 leading-relaxed">Fondée en 2010, l'Agence Glody est née de la volonté de rendre le dédouanement plus accessible aux petites et moyennes entreprises. Avec plus d'une décennie d'expérience, nous sommes devenus un acteur de confiance dans le secteur, reconnu pour notre fiabilité et notre service client exceptionnel.</p>
          </div>

          <div className="p-8 bg-gradient-to-br from-accent/10 to-orange-50 rounded-2xl shadow-lg border border-accent/20">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-6 h-6 text-accent-foreground" />
              <h3 className="text-2xl font-bold text-accent-foreground">Certifications</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed">Nous sommes fiers d'être un opérateur économique agréé (OEA), une certification qui atteste de notre fiabilité et de la sécurité de notre chaîne logistique. Tous nos agents sont des déclarants en douane certifiés.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

