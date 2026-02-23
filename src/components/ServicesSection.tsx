import { motion } from "framer-motion";
import {
  FileText,
  GraduationCap,
  Stethoscope,
  Building2,
  HardHat,
  Droplets,
  Zap,
  Scale,
  ArrowLeft,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "الوثائق الرسمية",
    desc: "إصدار وتجديد الوثائق والمستندات الحكومية إلكترونياً",
    tag: "متاح",
  },
  {
    icon: GraduationCap,
    title: "التربية والتعليم",
    desc: "خدمات المديرية العامة للتربية ومتابعة الشؤون التعليمية",
    tag: "متاح",
  },
  {
    icon: Stethoscope,
    title: "الصحة",
    desc: "خدمات دائرة الصحة والمستشفيات والمراكز الصحية",
    tag: "متاح",
  },
  {
    icon: Building2,
    title: "البلديات",
    desc: "خدمات البلديات والتخطيط العمراني وتراخيص البناء",
    tag: "متاح",
  },
  {
    icon: HardHat,
    title: "المشاريع",
    desc: "متابعة مشاريع الإعمار والبنية التحتية في المحافظة",
    tag: "جديد",
  },
  {
    icon: Droplets,
    title: "الماء والمجاري",
    desc: "خدمات مديرية الماء والصرف الصحي",
    tag: "متاح",
  },
  {
    icon: Zap,
    title: "الكهرباء",
    desc: "خدمات توزيع الكهرباء والشكاوى الخاصة بالطاقة",
    tag: "متاح",
  },
  {
    icon: Scale,
    title: "العدل",
    desc: "خدمات المحاكم والتوثيق والشؤون القانونية",
    tag: "متاح",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-primary bg-pattern-islamic">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold rounded-full text-sm font-tajawal mb-4">
            الخدمات الذكية
          </span>
          <h2 className="text-3xl md:text-5xl font-cairo font-extrabold text-primary-foreground mb-4">
            خدمات حكومية <span className="text-gradient-gold">متكاملة</span>
          </h2>
          <p className="text-primary-foreground/60 font-tajawal max-w-2xl mx-auto">
            نظام موحد يربط جميع مديريات المحافظة لتقديم خدمات سلسة وسريعة للمواطنين
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group relative p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 hover:border-gold/30 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-gold/15">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-tajawal ${
                    service.tag === "جديد"
                      ? "bg-gold/20 text-gold"
                      : "bg-primary-foreground/10 text-primary-foreground/50"
                  }`}
                >
                  {service.tag}
                </span>
              </div>

              <h3 className="font-cairo font-bold text-primary-foreground text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-primary-foreground/50 text-sm font-tajawal leading-relaxed mb-4">
                {service.desc}
              </p>

              <div className="flex items-center gap-1 text-gold text-sm font-tajawal opacity-0 group-hover:opacity-100 transition-opacity">
                الدخول للخدمة
                <ArrowLeft className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
