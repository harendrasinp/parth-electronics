import heroImg from "@/assets/hero-electronics.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => (
  <section className="bg-gradient-hero text-primary-foreground overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <span className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Mega Sale — Up to 50% Off
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-6 leading-[1.05] tracking-tight">
          Best Electronics at <span className="text-accent">Unbeatable</span> Prices
        </h1>
        <p className="mt-5 text-primary-foreground/80 max-w-lg text-base md:text-lg">
          Refrigerators, ACs, TVs and Washing Machines from the brands you love — delivered fast, backed by warranty.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#categories"
            className="inline-flex items-center gap-2 bg-gradient-accent text-accent-foreground px-6 py-3 rounded-full font-bold shadow-elevated hover:scale-105 transition-smooth"
          >
            Shop Now <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#offers"
            className="inline-flex items-center border-2 border-primary-foreground/30 px-6 py-3 rounded-full font-bold hover:bg-primary-foreground/10 transition-smooth"
          >
            View Offers
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
          {[
            { n: "10K+", l: "Happy Customers" },
            { n: "200+", l: "Products" },
            { n: "5★", l: "Rated Service" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-2xl font-extrabold text-accent">{s.n}</div>
              <div className="text-xs text-primary-foreground/70">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full" aria-hidden />
        <img
          src={heroImg}
          alt="Premium home electronics — refrigerator, air conditioner, TV and washing machine"
          width={1280}
          height={960}
          className="relative rounded-3xl shadow-elevated w-full h-auto"
        />
      </div>
    </div>
  </section>
);

export default Hero;