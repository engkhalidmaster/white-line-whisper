import { useState } from "react";
import { Menu, X, Search, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/anbar-logo.png";

const navItems = [
  { label: "الرئيسية", href: "#hero" },
  { label: "الأقضية", href: "#districts" },
  { label: "الخدمات", href: "#services" },
  { label: "الأخبار", href: "#news" },
  { label: "تواصل معنا", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <img src={logo} alt="شعار محافظة الأنبار" className="h-14 w-auto" />
            <div className="hidden sm:block">
              <h1 className="text-primary-foreground font-cairo text-lg font-bold leading-tight">
                محافظة الأنبار
              </h1>
              <p className="text-gold text-xs font-tajawal">البوابة الرقمية الرسمية</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-primary-foreground/80 hover:text-gold transition-colors text-sm font-tajawal font-medium rounded-lg hover:bg-primary-foreground/5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+964"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-gold text-accent-foreground rounded-lg text-sm font-bold font-cairo hover:bg-gold-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              الخط الساخن
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-primary-foreground p-2"
              aria-label="القائمة"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-primary border-t border-gold/20 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-primary-foreground/80 hover:text-gold hover:bg-primary-foreground/5 rounded-lg transition-colors font-tajawal"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
