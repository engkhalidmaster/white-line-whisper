import { motion } from "framer-motion";
import { MessageSquare, BarChart3, ClipboardCheck, Send } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: MessageSquare,
    title: "الشكاوى والمقترحات",
    desc: "قدّم شكواك أو مقترحك وتابع حالتها بشفافية تامة",
  },
  {
    icon: BarChart3,
    title: "لوحة المشاريع",
    desc: "تتبع نسب إنجاز مشاريع الإعمار في محافظتك",
  },
  {
    icon: ClipboardCheck,
    title: "استطلاعات الرأي",
    desc: "شارك رأيك في القرارات والخطط التنموية",
  },
];

const CitizenEngagement = () => {
  const [message, setMessage] = useState("");

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold rounded-full text-sm font-tajawal mb-4">
              مشاركة المواطن
            </span>
            <h2 className="text-3xl md:text-4xl font-cairo font-extrabold text-foreground mb-4">
              صوتك <span className="text-gradient-gold">يُسمع</span>
            </h2>
            <p className="text-muted-foreground font-tajawal text-lg leading-relaxed mb-8">
              نؤمن بأن التنمية الحقيقية تبدأ بمشاركة المواطن. شاركنا آراءك ومقترحاتك لبناء أنبار أفضل.
            </p>

            <div className="space-y-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border"
                >
                  <div className="p-2.5 rounded-lg bg-gold/10">
                    <f.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-cairo font-bold text-foreground">{f.title}</h4>
                    <p className="text-sm text-muted-foreground font-tajawal">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 border border-border shadow-lg"
          >
            <h3 className="font-cairo font-bold text-xl text-foreground mb-6">
              أرسل رسالتك
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setMessage("");
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-tajawal text-muted-foreground mb-1.5">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground font-tajawal focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition"
                    placeholder="أدخل اسمك"
                  />
                </div>
                <div>
                  <label className="block text-sm font-tajawal text-muted-foreground mb-1.5">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground font-tajawal focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition"
                    placeholder="07XX XXXX XXX"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-tajawal text-muted-foreground mb-1.5">
                  نوع الرسالة
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground font-tajawal focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition">
                  <option>شكوى</option>
                  <option>مقترح</option>
                  <option>استفسار</option>
                  <option>شكر وتقدير</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-tajawal text-muted-foreground mb-1.5">
                  الرسالة
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground font-tajawal focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition resize-none"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gold text-accent-foreground font-cairo font-bold rounded-xl hover:bg-gold-light transition-all"
                style={{ boxShadow: "var(--shadow-gold)" }}
              >
                <Send className="w-5 h-5" />
                إرسال الرسالة
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CitizenEngagement;
