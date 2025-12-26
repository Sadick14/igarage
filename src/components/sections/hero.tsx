import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BookingModal } from '@/components/booking-modal';
import { Phone, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(
    (image) => image.id === 'hero-background'
  );

  return (
    <section className="relative w-full h-[80vh] min-h-[500px] max-h-[720px] flex items-center justify-center text-center text-white py-0">
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-primary/80 bg-gradient-to-t from-primary/90 to-transparent" />
      </div>
      <div className="relative z-10 container px-4 md:px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline text-shadow-lg">
            Reliable Auto Repair & Car Maintenance in Ghana
          </h1>
          <p className="mt-6 text-lg leading-8 md:text-xl max-w-2xl text-primary-foreground/90">
            Fast, professional, and trustworthy car services to keep you moving.
            Experience expert care for your vehicle today.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="tel:+233123456789">
                <Phone className="mr-2" /> Call Now
              </a>
            </Button>
             <Button size="lg" asChild>
              <a href="https://wa.me/233123456789" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" /> WhatsApp Now
              </a>
            </Button>
            <BookingModal>
              <Button size="lg" variant="default">
                Book Online
              </Button>
            </BookingModal>
          </div>
        </div>
      </div>
    </section>
  );
}
