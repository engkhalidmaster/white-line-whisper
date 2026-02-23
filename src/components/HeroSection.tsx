import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Users, Building2 } from "lucide-react";
const heroBg = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgM6IWPSXCq8ZvPVk6d-ixx48ONAlfRp7rGeNxcDC8gsrrziN4HLY8EVbm0Kfc7MZJqLG0Hn_z7sgWxMUNBThfme9CsmySaX9Dp5eG2wjlFMg-TEW8je1a64gTEnZtOjhsNGyF6ey_k5t919p1tjLq6MIJyd4zANYFQE0BwAi0iKWuMSCxQ91YEXSpvkDM/s1290/14.jpg";

const stats = [
  { icon: MapPin, value: "138,501", label: "كم²", desc: "المساحة" },
  { icon: Users, value: "1.8M+", label: "نسمة", desc: "السكان" },
  { icon: Building2, value: "9", label: "أقضية", desc: "الوحدات الإدارية" },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay bg-pattern-islamic" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-gold/20 border border-gold/30 rounded-full text-gold text-sm font-tajawal mb-6">
              البوابة الرقمية الرسمية
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-6xl lg:text-7xl font-cairo font-extrabold text-primary-foreground leading-tight mb-6"
          >
            محافظة{" "}
            <span className="text-gradient-gold">الأنبار</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground/80">
              نحو مستقبل رقمي متكامل
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-primary-foreground/70 font-tajawal max-w-2xl mb-10 leading-relaxed"
          >
            بوابتك الشاملة للخدمات الحكومية الذكية، تتبع المشاريع، والتواصل المباشر مع مؤسسات المحافظة.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-accent-foreground font-cairo font-bold rounded-xl hover:bg-gold-light transition-all hover:shadow-lg"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              استكشف الخدمات
              <ArrowLeft className="w-5 h-5" />
            </a>
            <a
              href="#districts"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-cairo font-bold rounded-xl hover:border-gold hover:text-gold transition-all"
            >
              خريطة الأقضية
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center md:text-right p-4 md:p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
              >
                <stat.icon className="w-6 h-6 text-gold mb-2 mx-auto md:mx-0" />
                <div className="text-2xl md:text-3xl font-cairo font-extrabold text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-gold font-tajawal">{stat.label}</div>
                <div className="text-xs text-primary-foreground/50 font-tajawal">{stat.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
