import { categories } from "@/data/products";
import { ArrowRight } from "lucide-react";

const CategorySection = () => (
  <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
    <div className="flex items-end justify-between mb-10">
      <div>
        <span className="text-accent text-xs font-bold uppercase tracking-widest">Browse</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">Shop by Category</h2>
      </div>
      <a href="#offers" className="hidden sm:inline-flex items-center gap-1 text-primary font-semibold text-sm hover:text-primary-glow transition-smooth">
        View Offers <ArrowRight className="w-4 h-4" />
      </a>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {categories.map((c) => (
        <article
          key={c.id}
          className="group bg-card rounded-2xl p-4 md:p-5 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth cursor-pointer border border-border"
        >
          <div className="aspect-[3/2] rounded-xl overflow-hidden bg-muted">
            <img
              src={c.image}
              alt={c.name}
              loading="lazy"
              width={768}
              height={576}
              className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
            />
          </div>
          <h3 className="font-bold mt-4 text-foreground text-base md:text-lg">{c.name}</h3>
          <p className="text-xs text-muted-foreground">{c.tagline}</p>
          <p className="text-primary text-sm font-bold mt-2">From {c.from}</p>
        </article>
      ))}
    </div>
  </section>
);

export default CategorySection;