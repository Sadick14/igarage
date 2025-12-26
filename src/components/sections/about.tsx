import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl font-headline">
              About The IGarage
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The IGarage specializes in comprehensive automobile repair and maintenance services across Ghana. Our mission is to provide reliable, efficient, and high-quality auto care to every customer.
            </p>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>
                  <strong>Certified Mechanics:</strong> Our team consists of highly trained and certified professionals who are passionate about cars.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>
                  <strong>Comprehensive Services:</strong> We handle everything from routine check-ups and oil changes to complex engine diagnostics and repairs.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>
                  <strong>Commitment to Safety:</strong> We ensure your vehicle meets all safety and efficiency standards, so you can drive with confidence.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
             <div className="relative w-full max-w-md">
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-primary to-accent opacity-20 blur-lg"></div>
              <div className="relative rounded-lg bg-background p-6 shadow-lg">
                <h3 className="text-xl font-bold text-primary">Our Mission</h3>
                <p className="mt-2 text-muted-foreground">
                  To be Ghana's most trusted auto repair service by delivering exceptional quality, unmatched efficiency, and transparent value to every car owner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
