'use client';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { testimonials } from '@/lib/data';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-36 bg-black">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-red-600 font-bold tracking-widest text-xs md:text-sm uppercase">Testimonials</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tight text-white">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-red-600 rounded-full mt-2 mb-2" />
          <p className="max-w-2xl text-lg md:text-xl text-gray-300 font-body">
            We take pride in our work, and it shows. Here's what our satisfied customers have to say about their IGarage experience.
          </p>
        </div>
        <div className="py-12">
          <Carousel
            opts={{ align: 'start', loop: true }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full flex flex-col justify-between bg-white/90 border-0 shadow-xl">
                      <CardContent className="pt-6">
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-red-600 fill-red-600" />
                          ))}
                        </div>
                        <p className="text-base text-gray-700 font-body">"{testimonial.quote}"</p>
                      </CardContent>
                      <CardFooter>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-gray-900 font-headline">{testimonial.author}</p>
                            <p className="text-xs text-gray-500">{testimonial.location}</p>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
