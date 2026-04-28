import { Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react";

const features = [
  { icon: Truck, title: "Free Shipping", desc: "On orders over $299" },
  { icon: ShieldCheck, title: "2-Year Warranty", desc: "On all appliances" },
  { icon: RotateCcw, title: "Easy Returns", desc: "30-day money back" },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated experts" },
];

const FeatureBar = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 md:-mt-12 relative z-10">
    <div className="bg-card rounded-2xl shadow-elevated grid grid-cols-2 md:grid-cols-4 divide-x divide-border border border-border overflow-hidden">
      {features.map((f) => (
        <div key={f.title} className="p-5 flex items-center gap-3">
          <div className="bg-accent-soft text-accent p-2.5 rounded-xl">
            <f.icon className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-sm text-foreground">{f.title}</div>
            <div className="text-xs text-muted-foreground">{f.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureBar;