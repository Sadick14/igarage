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
    <section id="testimonials">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl font-headline">
              What Our Customers Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We take pride in our work, and it shows. Here's what our satisfied customers have to say about their iGarage experience.
            </p>
          </div>
        </div>
        <div className="py-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full flex flex-col justify-between">
                      <CardContent className="pt-6">
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-accent fill-accent" />)}
                        </div>
                        <p className="text-sm text-muted-foreground">"{testimonial.quote}"</p>
                      </CardContent>
                      <CardFooter>
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold text-primary">{testimonial.author}</p>
                                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
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
