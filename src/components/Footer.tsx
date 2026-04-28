import { Zap, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4">
      <div>
        <div className="flex items-center gap-2 font-extrabold text-2xl">
          <span className="bg-gradient-accent text-accent-foreground p-1.5 rounded-lg">
            <Zap className="w-4 h-4" />
          </span>
          PARTH ELECTRONICS
        </div>
        <p className="mt-4 text-sm text-primary-foreground/70 max-w-xs">
          Your trusted destination for premium home electronics at unbeatable prices.
        </p>
      </div>
      <div>
        <h4 className="font-bold mb-4">Shop</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          <li>Refrigerators</li>
          <li>Air Conditioners</li>
          <li>Televisions</li>
          <li>Washing Machines</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">Company</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-accent">Contact Us</Link></li>
          <li>Warranty</li>
          <li>Service Centers</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">Get in Touch</h4>
        <ul className="space-y-3 text-sm text-primary-foreground/70">
          <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91-982-512-5355</li>
          <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@ParthElectronics.com</li>
          <li className="flex items-center gap-2"><MapPin className="w-10 h-10" /> V1, Shankheshwar Complex, Kshetrapal Dada Marg, opp. Raymond showroom, Kailash Nagar, Sagrampura, Surat, Gujarat 395002</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/60">
      © {new Date().getFullYear()} Parth Electronics. All rights reserved.
    </div>
  </footer>
);

export default Footer;