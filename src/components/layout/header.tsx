'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { ModeToggle } from '@/components/mode-toggle';

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
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 lg:px-16 py-4 md:py-6">
        <div className="text-[10px] md:text-xs lg:text-sm tracking-[0.2em] md:tracking-[0.3em] text-muted-foreground uppercase">
          <Link href="#">Auto Repair</Link>
        </div>
        <div className="text-xs md:text-sm tracking-widest text-muted-foreground hidden md:block">
          ―――――
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="text-[10px] md:text-xs lg:text-sm tracking-[0.2em] md:tracking-[0.3em] text-muted-foreground uppercase">
            IGarage
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
