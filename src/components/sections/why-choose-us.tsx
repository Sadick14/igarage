import { whyChooseUs } from '@/lib/data';

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl font-headline">
              Why Choose The IGarage
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are committed to providing an exceptional auto service experience. Here’s what makes us stand out.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 py-12 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {whyChooseUs.map((reason, index) => (
            <div key={index} className="grid gap-4 items-start text-left p-4 rounded-lg hover:bg-background transition-colors">
              <div className="flex items-center gap-4">
                 <div className="rounded-full bg-primary p-3 text-primary-foreground">
                    <reason.icon className="h-6 w-6" />
                 </div>
                <h3 className="text-lg font-bold text-primary">{reason.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
