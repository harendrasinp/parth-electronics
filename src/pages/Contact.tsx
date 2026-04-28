import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  const items = [
    { icon: Phone, title: "Call Us", value: "+1 (555) 010-2025" },
    { icon: Mail, title: "Email", value: "hello@voltmart.shop" },
    { icon: MapPin, title: "Visit Store", value: "24 Market Street, NY 10001" },
    { icon: Clock, title: "Hours", value: "Mon–Sat 9am – 9pm" },
  ];

  return (
    <Layout>
      <section className="bg-gradient-hero text-primary-foreground py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-accent text-xs font-bold uppercase tracking-widest">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3">We'd love to help</h1>
          <p className="mt-4 text-primary-foreground/80">Questions, quotes or service — our team is here for you.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          {items.map((it) => (
            <div key={it.title} className="flex items-start gap-4 bg-card border border-border rounded-2xl p-5 shadow-card">
              <div className="bg-accent-soft text-accent p-3 rounded-xl">
                <it.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-foreground">{it.title}</div>
                <div className="text-muted-foreground text-sm">{it.value}</div>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={onSubmit} className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card space-y-4">
          <h2 className="text-2xl font-extrabold text-foreground">Send a message</h2>
          <div>
            <label className="block text-sm font-semibold mb-1.5">Name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-smooth"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5">Email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-smooth"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-smooth resize-none"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-accent text-accent-foreground font-bold py-3 rounded-full shadow-card hover:shadow-elevated transition-smooth"
          >
            Send Message
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;