import { Link } from 'react-router-dom';
import { FileCheck, Scale, Ship, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Courtage en Douane',
    description: 'Nous assurons un dédouanement rapide et efficace de vos marchandises.',
    path: '/services/courtage-en-douane',
    icon: FileCheck,
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
  },
  {
    title: 'Conseil en Conformité',
    description: 'Nos experts vous aident à naviguer dans le paysage complexe des réglementations douanières.',
    path: '/services/conseil-en-conformite',
    icon: Scale,
    gradient: 'from-teal-500 to-emerald-500',
    bgGradient: 'from-teal-50 to-emerald-50',
  },
  {
    title: 'Transit International',
    description: 'Optimisez votre chaîne logistique grâce à nos solutions de transit international.',
    path: '/services/transit-international',
    icon: Ship,
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
  },
];

export function Services() {
  return (
    <div className="py-20">
      <div className="container mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">Nos Services</h2>
          <p className="text-xl text-muted-foreground">Des solutions sur mesure pour vos besoins en douane</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link 
                to={service.path} 
                key={service.title} 
                className={`group relative block p-8 bg-gradient-to-br ${service.bgGradient} border-2 border-transparent rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 hover:border-primary/30 transition-all duration-300 overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-foreground/70 mb-6">{service.description}</p>
                  <div className="flex items-center justify-center text-primary font-semibold group-hover:gap-2 transition-all">
                    <span>En savoir plus</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

