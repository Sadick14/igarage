
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';


export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-36 bg-black">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-20">
          <span className="text-red-600 font-bold tracking-widest text-xs md:text-sm uppercase">Our Services</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tight text-white">
            Complete Car Care
          </h2>
          <div className="w-24 h-1 bg-red-600 rounded-full mt-2 mb-2" />
          <p className="max-w-2xl text-lg md:text-xl text-gray-300 font-body">
            From routine maintenance to complex repairs, our certified mechanics handle all your vehicle needs with precision and care.
          </p>
        </div>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
          {services.map((service, index) => {
            const image = PlaceHolderImages.find(img => img.id === service.imageId);
            return (
              <div
                key={index}
                className="group bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                {image && (
                  <div className="relative w-full h-56 md:h-64 overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint={image.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                )}
                <div className="flex-1 flex flex-col items-center text-center px-6 py-8">
                  <div className="mb-4">
                    <service.icon className="h-10 w-10 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-white mb-2 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-400 font-body">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
