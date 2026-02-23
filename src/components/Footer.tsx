import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import logo from "@/assets/anbar-logo.png";

const quickLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "الأقضية", href: "#districts" },
  { label: "الخدمات", href: "#services" },
  { label: "الأخبار", href: "#news" },
  { label: "تواصل معنا", href: "#contact" },
];

const directorates = [
  "مديرية التربية",
  "دائرة الصحة",
  "مديرية البلديات",
  "مديرية الماء",
  "مديرية الكهرباء",
];

const Footer = () => {
  return (
    <footer className="bg-primary bg-pattern-islamic pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex flex-col items-center text-center mb-4">
              <img src={logo} alt="شعار محافظة الأنبار" className="h-16 w-auto mb-3" />
              <h3 className="text-primary-foreground font-cairo font-bold text-lg">محافظة الأنبار</h3>
              <p className="text-gold text-sm font-tajawal">البوابة الرقمية الرسمية</p>
            </div>
            <p className="text-primary-foreground/50 font-tajawal text-sm leading-relaxed text-center">
              بوابة إلكترونية شاملة تهدف لتقديم خدمات حكومية ذكية وشفافة لمواطني محافظة الأنبار.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-cairo font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/50 hover:text-gold transition-colors font-tajawal text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Directorates */}
          <div>
            <h4 className="text-primary-foreground font-cairo font-bold mb-4">المديريات</h4>
            <ul className="space-y-2">
              {directorates.map((d) => (
                <li key={d}>
                  <span className="text-primary-foreground/50 font-tajawal text-sm flex items-center gap-1.5">
                    <ExternalLink className="w-3 h-3 text-gold/50" />
                    {d}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground font-cairo font-bold mb-4">معلومات الاتصال</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span className="text-primary-foreground/50 font-tajawal text-sm">
                  الرمادي - المجمع الحكومي
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span className="text-primary-foreground/50 font-tajawal text-sm" dir="ltr">
                  +964 24 XXX XXXX
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span className="text-primary-foreground/50 font-tajawal text-sm" dir="ltr">
                  info@anbar.iq
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span className="text-primary-foreground/50 font-tajawal text-sm">
                  الأحد - الخميس: 8:00 ص - 3:00 م
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/30 text-xs font-tajawal">
            © {new Date().getFullYear()} محافظة الأنبار - جميع الحقوق محفوظة
          </p>
          <p className="text-primary-foreground/20 text-xs font-tajawal">
            تم التطوير بأحدث التقنيات الرقمية
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
