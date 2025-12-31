
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const workshopImage =
    PlaceHolderImages.find((img) => img.id === 'about-workshop') ??
    PlaceHolderImages.find((img) => img.id === 'about-team') ?? {
      imageUrl: '/aboutigarage.jpg',
      description: 'Auto repair workshop',
      imageHint: 'mechanic workshop',
      id: 'about-fallback',
    };

  return (
    <section id="about" className="py-16 md:py-24 bg-red-600 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl">
             <Image
              src='/aboutigarage.jpg'
              alt={workshopImage.description}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              data-ai-hint={workshopImage.imageHint}
            />
          </div>

          {/* Content Side */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-black font-bold tracking-wider uppercase text-xs md:text-sm mb-2 md:mb-3">About IGarage</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6 text-white">
                Professional Auto Care <br/> You Can Trust
              </h3>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                The IGarage specializes in comprehensive automobile repair and maintenance services across Ghana. Our mission is to provide reliable, efficient, and high-quality auto care to every customer.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Certified Mechanics & Professionals",
                "Comprehensive Diagnostics & Repair",
                "Commitment to Safety & Quality"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-black flex-shrink-0" />
                  <span className="text-lg text-white">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4 md:pt-4">
                <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-white/20 pt-6 md:pt-8">
                    <div>
                        <p className="text-2xl md:text-3xl font-bold text-white">10+</p>
                        <p className="text-xs md:text-sm text-white/80 mt-1">Years Exp.</p>
                    </div>
                    <div>
                        <p className="text-2xl md:text-3xl font-bold text-white">5k+</p>
                        <p className="text-xs md:text-sm text-white/80 mt-1">Clients</p>
                    </div>
                    <div>
                        <p className="text-2xl md:text-3xl font-bold text-white">24/7</p>
                        <p className="text-xs md:text-sm text-white/80 mt-1">Support</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
