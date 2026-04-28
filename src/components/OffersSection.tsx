import { offers } from "@/data/products";
import { Flame } from "lucide-react";

const OffersSection = () => (
  <section id="offers" className="bg-accent-soft py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="inline-flex items-center gap-1 text-accent text-xs font-bold uppercase tracking-widest">
            <Flame className="w-3.5 h-3.5" /> Limited Time
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">Today's Hot Offers</h2>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {offers.map((o) => (
          <article
            key={o.id}
            className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-smooth group"
          >
            <div className="relative">
              <span className="absolute top-3 left-3 z-10 bg-gradient-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                {o.discount}
              </span>
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={o.image}
                  alt={o.title}
                  loading="lazy"
                  width={768}
                  height={576}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{o.category}</p>
              <h4 className="font-bold text-foreground mt-1">{o.title}</h4>
              <div className="flex items-baseline gap-2 mt-3">
                <span className="text-accent font-extrabold text-2xl">{o.price}</span>
                <span className="text-muted-foreground line-through text-sm">{o.oldPrice}</span>
              </div>
              <button className="mt-4 w-full bg-primary text-primary-foreground font-semibold py-2.5 rounded-full hover:bg-primary-glow transition-smooth">
                Add to Cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default OffersSection;