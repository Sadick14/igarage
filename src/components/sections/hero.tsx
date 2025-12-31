'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const heroImage = {
    imageUrl: mounted && resolvedTheme === 'light' ? '/bmw-white.jpg' : '/bmw-black.jpg',
    description: 'BMW hero',
    imageHint: 'BMW car'
  };

  return (
    <section className="relative w-full min-h-screen flex items-center py-12 md:py-0 overflow-hidden bg-background">
      <div className="container px-4 md:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12 min-h-screen md:h-screen">
        {/* Left: Headline and CTA */}
        <div className="flex-1 flex flex-col justify-center items-start text-left w-full max-w-2xl z-10 py-8 md:py-0">
          <span className="text-red-600 font-bold tracking-widest text-xs md:text-sm uppercase mb-3 md:mb-4">igarage</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tight text-foreground mb-4 leading-none">
            AUTO REPAIR <br /> <span className="relative inline-block">SERVICES
              <span className="block absolute left-0 -bottom-1 md:-bottom-2 w-full h-1 md:h-2 bg-red-600 rounded-full" />
            </span>
          </h1>
          <p className="mt-4 md:mt-8 text-base md:text-lg lg:text-xl text-muted-foreground font-body max-w-xl">
            Fast, professional, and trustworthy car services to keep you moving. Experience expert care for your vehicle today.
          </p>
          <a
            href="#services"
            className="mt-6 md:mt-10 inline-block bg-red-600 hover:bg-red-700 text-primary-foreground font-bold text-base md:text-lg px-8 md:px-10 py-3 md:py-4 rounded-full shadow-lg transition-all duration-300"
          >
            Book Your Service
          </a>
        </div>
        {/* Right: Hero Image */}
        <div className="flex-1 relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover object-center"
            data-ai-hint={heroImage.imageHint}
            priority
            key={heroImage.imageUrl}
          />
        </div>
      </div>
    </section>
  );
}
