
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutSection() {
  const workshopImage = PlaceHolderImages.find(img => img.id === 'about-workshop');
  return (
    <section id="about" className="py-24 md:py-36 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden">
          {/* Left: Workshop image */}
          <div className="relative w-full md:w-1/2 h-72 md:h-[420px] flex-shrink-0">
            {workshopImage && (
              <Image
                src={workshopImage.imageUrl}
                alt={workshopImage.description}
                fill
                className="object-cover"
                data-ai-hint={workshopImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
          {/* Right: About text */}
          <div className="flex-1 flex flex-col justify-center px-8 py-10 md:py-0">
            <span className="text-red-600 font-bold tracking-widest text-xs md:text-sm uppercase mb-2">About Us</span>
            <h3 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6">The IGarage</h3>
            <p className="text-lg md:text-xl text-gray-300 font-body mb-6">
              The IGarage specializes in comprehensive automobile repair and maintenance services across Ghana. Our mission is to provide reliable, efficient, and high-quality auto care to every customer.
            </p>
            <ul className="space-y-3 text-gray-400 font-body mb-8 text-base md:text-lg">
              <li><span className="text-white font-bold">Certified Mechanics:</span> Our team consists of highly trained and certified professionals who are passionate about cars.</li>
              <li><span className="text-white font-bold">Comprehensive Services:</span> We handle everything from routine check-ups and oil changes to complex engine diagnostics and repairs.</li>
              <li><span className="text-white font-bold">Commitment to Safety:</span> We ensure your vehicle meets all safety and efficiency standards, so you can drive with confidence.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
