import { useParams, Link } from 'react-router-dom';
import { FileCheck, Scale, Ship, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const serviceDetails = {
  'courtage-en-douane': {
    title: 'Courtage en Douane',
    content: 'Le courtage en douane est un service essentiel pour toute entreprise important ou exportant des marchandises. Nos experts s\'assurent que vos déclarations sont conformes, que les droits et taxes sont correctement calculés et que vos marchandises franchissent la frontière sans délai. Nous nous occupons de tout, de la classification des produits à la gestion des documents, vous permettant de vous concentrer sur votre cœur de métier.',
    icon: FileCheck,
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
  },
  'conseil-en-conformite': {
    title: 'Conseil en Conformité',
    content: 'Les réglementations douanières sont en constante évolution. Notre service de conseil en conformité vous aide à anticiper les changements, à minimiser les risques et à garantir que vos opérations sont toujours conformes aux dernières lois. Nous offrons des audits, des formations et un soutien continu pour vous aider à naviguer dans cet environnement complexe.',
    icon: Scale,
    gradient: 'from-teal-500 to-emerald-500',
    bgGradient: 'from-teal-50 to-emerald-50',
  },
  'transit-international': {
    title: 'Transit International',
    content: 'Le transit international est une solution logistique qui permet de transporter des marchandises à travers un ou plusieurs pays sans payer de droits de douane dans les pays de transit. Nous organisons et gérons ces opérations pour optimiser votre chaîne d\'approvisionnement, réduire les coûts et accélérer les délais de livraison.',
    icon: Ship,
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
  },
};

export function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  if (!service) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Service non trouvé</h2>
        <Link to="/services">
          <Button>Retour aux services</Button>
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-6 md:mb-8">
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          <span className="font-medium text-sm md:text-base">Retour aux services</span>
        </Link>
        
        <div className={`p-6 md:p-12 bg-gradient-to-br ${service.bgGradient} rounded-2xl md:rounded-3xl shadow-2xl border-2 border-primary/10 mb-8 md:mb-12`}>
          <div className="flex flex-col items-center text-center mb-6 md:mb-8">
            <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg`}>
              <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">{service.title}</h2>
          </div>
          <p className="text-base md:text-xl text-foreground/80 leading-relaxed">{service.content}</p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-primary/10">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary">Besoin de ce service ?</h3>
          <p className="text-sm md:text-base text-foreground/70 mb-4 md:mb-6">Contactez-nous dès aujourd'hui pour obtenir un devis personnalisé et découvrir comment nous pouvons vous aider.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg w-full md:w-auto">Demander un devis</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
