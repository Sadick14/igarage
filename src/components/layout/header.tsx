'use client';
import Link from 'next/link';
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
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-8 md:px-16 py-6">
        <div className="text-xs md:text-sm tracking-[0.3em] text-gray-400 uppercase">
          <Link href="#">Auto Repair Services</Link>
        </div>
        <div className="text-xs md:text-sm tracking-widest text-gray-500">
          ―――――
        </div>
        <div className="text-xs md:text-sm tracking-[0.3em] text-gray-400 uppercase">
          The IGarage
        </div>
      </div>
    </header>
  );
}
