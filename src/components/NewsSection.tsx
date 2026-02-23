import { motion } from "framer-motion";
import { Calendar, ArrowLeft, Eye } from "lucide-react";

const news = [
  {
    date: "2026-02-09",
    title: "افتتاح مشروع تأهيل شبكة المياه في قضاء الرمادي",
    excerpt: "أعلنت محافظة الأنبار عن افتتاح مشروع تأهيل شبكة المياه الذي يخدم أكثر من 50 ألف مواطن في مركز قضاء الرمادي.",
    category: "مشاريع",
  },
  {
    date: "2026-02-07",
    title: "إطلاق المنصة الرقمية للخدمات الإلكترونية",
    excerpt: "تم إطلاق المرحلة الأولى من المنصة الرقمية الموحدة التي تتيح للمواطنين إتمام معاملاتهم إلكترونياً.",
    category: "تقنية",
  },
  {
    date: "2026-02-05",
    title: "اجتماع مجلس المحافظة لمناقشة خطة التنمية 2026",
    excerpt: "عقد مجلس محافظة الأنبار اجتماعه الدوري لمناقشة خطة التنمية الشاملة وأولويات المشاريع الاستراتيجية.",
    category: "حكومي",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold rounded-full text-sm font-tajawal mb-4">
              آخر الأخبار
            </span>
            <h2 className="text-3xl md:text-5xl font-cairo font-extrabold text-foreground">
              أخبار <span className="text-gradient-gold">المحافظة</span>
            </h2>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-gold font-tajawal font-medium hover:underline"
          >
            جميع الأخبار
            <ArrowLeft className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl border border-border card-gov overflow-hidden cursor-pointer"
            >
              {/* Color bar */}
              <div className="h-1.5 bg-gradient-to-l from-gold to-gold-dark" />

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-tajawal">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-tajawal">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(item.date).toLocaleDateString("ar-IQ")}
                  </div>
                </div>

                <h3 className="font-cairo font-bold text-foreground text-lg mb-3 leading-snug group-hover:text-gold transition-colors">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm font-tajawal leading-relaxed mb-4">
                  {item.excerpt}
                </p>

                <div className="flex items-center gap-1 text-gold text-sm font-tajawal opacity-0 group-hover:opacity-100 transition-opacity">
                  قراءة المزيد
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
