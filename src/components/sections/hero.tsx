
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImage = { imageUrl: '/hreo.jpg', description: 'BMW hero', imageHint: 'BMW car' };
  return (
    <section className="relative w-full min-h-screen h-screen flex items-center justify-center text-white py-0 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 min-h-screen h-screen w-full">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover object-center opacity-80"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      </div>
      <div className="relative z-10 container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between h-full">
        {/* Left: Headline and CTA */}
        <div className="flex-1 flex flex-col justify-center items-start md:items-start text-left max-w-2xl">
          <span className="text-red-600 font-bold tracking-widest text-xs md:text-sm uppercase mb-4">igarage</span>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-headline font-bold tracking-tight text-white mb-4 leading-none">
            AUTO REPAIR <br /> <span className="relative inline-block">SERVICES
              <span className="block absolute left-0 -bottom-2 w-full h-2 bg-red-600 rounded-full" />
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-gray-300 font-body max-w-xl">
            Fast, professional, and trustworthy car services to keep you moving. Experience expert care for your vehicle today.
          </p>
          <a
            href="#services"
            className="mt-10 inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300"
          >
            Book Your Service
          </a>
        </div>
        {/* Right: Empty for spacing or future content */}
        <div className="hidden md:block flex-1" />
      </div>
    </section>
  );
}
