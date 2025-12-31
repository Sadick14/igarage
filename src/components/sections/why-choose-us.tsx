
import { whyChooseUs } from '@/lib/data';


export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-16 md:py-24 lg:py-36 bg-background">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <span className="text-red-600 font-bold tracking-widest text-xs md:text-sm uppercase">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-headline font-bold tracking-tight text-foreground">
            The IGarage Difference
          </h2>
          <div className="w-24 h-1 bg-red-600 rounded-full mt-2 mb-2" />
          <p className="max-w-2xl text-base md:text-lg lg:text-xl text-muted-foreground font-body px-4">
            We are committed to providing an exceptional auto service experience. Here’s what makes us stand out.
          </p>
        </div>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 max-w-6xl">
          {whyChooseUs.map((reason, idx) => {
            return (
              <div
                key={idx}
                className="group bg-card border border-border rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full p-6 md:p-8"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 md:mb-6 w-14 h-14 md:w-16 md:h-16 bg-red-600/10 rounded-full flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                    <reason.icon className="h-7 w-7 md:h-8 md:w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-headline font-bold text-card-foreground mb-2 md:mb-3 tracking-wide">
                    {reason.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
