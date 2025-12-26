import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { services } from '@/lib/data';

export default function ServicesSection() {
  return (
    <section id="services">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">Our Services</div>
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl font-headline">
              Complete Car Care Under One Roof
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From routine maintenance to complex repairs, our certified mechanics are equipped to handle all your vehicle needs with precision and care.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 transition-transform hover:scale-105 hover:shadow-lg">
              <div className="mb-4 rounded-full bg-primary p-4 text-primary-foreground">
                <service.icon className="h-8 w-8" />
              </div>
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-sm">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
