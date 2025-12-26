'use client';
import { Car, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookingModal } from '@/components/booking-modal';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-card/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link
          href="#"
          className="flex items-center gap-2"
          prefetch={false}
        >
          <Car className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary">iGarage</span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
            <a href="tel:+233123456789">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
            <a href="https://wa.me/233123456789" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp Now
            </a>
          </Button>
          <BookingModal>
            <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Book Online
            </Button>
          </BookingModal>
        </nav>
      </div>
    </header>
  );
}
