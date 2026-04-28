import Layout from "@/components/Layout";
import { Award, Users, Truck, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Customers" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Truck, value: "50K+", label: "Orders Delivered" },
  { icon: Heart, value: "4.9/5", label: "Customer Rating" },
];

const About = () => (
  <Layout>
    <section className="bg-gradient-hero text-primary-foreground py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-accent text-xs font-bold uppercase tracking-widest">About Us</span>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-3">Powering Homes Since 2010</h1>
        <p className="mt-5 text-primary-foreground/80 text-lg">
          PARTH ELECTRONICS is your one-stop destination for premium home electronics. We bring the world's most trusted brands together with prices and service you can rely on.
        </p>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-extrabold text-foreground">Our Story</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          What started as a small family shop has grown into one of the most trusted electronics retailers in the region. We believe everyone deserves quality home appliances that just work — backed by honest advice, fair pricing, and warranties you can count on.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          From the latest 4K Smart TVs to energy-efficient refrigerators, every product we stock is hand-picked by our team of experts.
        </p>
      </div>
      <div className="bg-accent-soft rounded-2xl p-8 border border-accent/20">
        <h3 className="text-xl font-bold text-foreground">Our Promise</h3>
        <ul className="mt-4 space-y-3 text-muted-foreground">
          <li>✓ Authentic products from authorized brands</li>
          <li>✓ Best-price guarantee</li>
          <li>✓ Free installation on major appliances</li>
          <li>✓ 2-year extended warranty included</li>
          <li>✓ Trained service technicians at your door</li>
        </ul>
      </div>
    </section>

    <section className="bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-card rounded-2xl p-6 text-center shadow-card">
            <div className="inline-flex p-3 bg-accent-soft text-accent rounded-xl">
              <s.icon className="w-6 h-6" />
            </div>
            <div className="text-3xl font-extrabold text-primary mt-3">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default About;