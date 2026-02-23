import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Users, Building, Landmark, ArrowLeft } from "lucide-react";

interface District {
  id: string;
  name: string;
  population: string;
  area: string;
  description: string;
  subDistricts: string[];
  color: string;
}

const districts: District[] = [
  {
    id: "ramadi",
    name: "الرمادي",
    population: "450,000",
    area: "6,033 كم²",
    description: "مركز محافظة الأنبار وعاصمتها الإدارية، تقع على ضفاف نهر الفرات وتعد مركزاً حضرياً رئيسياً.",
    subDistricts: ["الرمادي المركز", "الخالدية", "الحبانية"],
    color: "from-navy to-navy-light",
  },
  {
    id: "fallujah",
    name: "الفلوجة",
    population: "350,000",
    area: "4,468 كم²",
    description: "مدينة المساجد، تتميز بموقعها الاستراتيجي على نهر الفرات وتراثها العريق.",
    subDistricts: ["الفلوجة المركز", "العامرية", "الكرمة"],
    color: "from-gold-dark to-gold",
  },
  {
    id: "heet",
    name: "هيت",
    population: "150,000",
    area: "3,890 كم²",
    description: "مدينة تاريخية عريقة تشتهر بقلعتها الأثرية وموقعها على نهر الفرات.",
    subDistricts: ["هيت المركز", "كبيسة", "البغدادي"],
    color: "from-navy-light to-navy",
  },
  {
    id: "haditha",
    name: "حديثة",
    population: "100,000",
    area: "8,250 كم²",
    description: "تضم أكبر سد في العراق (سد حديثة) وتعد مركزاً مهماً لتوليد الطاقة الكهربائية.",
    subDistricts: ["حديثة المركز", "حقلانية", "البرانة"],
    color: "from-gold to-gold-light",
  },
  {
    id: "ana",
    name: "عانة",
    population: "50,000",
    area: "7,120 كم²",
    description: "جزيرة فريدة على نهر الفرات، تشتهر ببساتينها الغناء وتراثها الحضاري.",
    subDistricts: ["عانة المركز", "راوة"],
    color: "from-navy to-gold-dark",
  },
  {
    id: "qaim",
    name: "القائم",
    population: "200,000",
    area: "12,350 كم²",
    description: "أكبر أقضية المحافظة مساحةً، تقع على الحدود العراقية السورية.",
    subDistricts: ["القائم المركز", "عكاشات", "العبيدي"],
    color: "from-gold-dark to-navy-light",
  },
  {
    id: "rutba",
    name: "الرطبة",
    population: "65,000",
    area: "28,000 كم²",
    description: "أكبر أقضية العراق مساحةً، تقع في الصحراء الغربية وتضم معبر طريبيل الحدودي مع الأردن.",
    subDistricts: ["الرطبة المركز", "النخيب"],
    color: "from-navy to-gold",
  },
  {
    id: "rawa",
    name: "راوة",
    population: "35,000",
    area: "5,400 كم²",
    description: "مدينة صغيرة تقع على ضفاف نهر الفرات بين عانة وحديثة، تتميز بطبيعتها الخلابة.",
    subDistricts: ["راوة المركز"],
    color: "from-gold to-navy",
  },
  {
    id: "khalidiya",
    name: "الخالدية",
    population: "120,000",
    area: "3,200 كم²",
    description: "تقع بين الرمادي والفلوجة على ضفاف نهر الفرات وبحيرة الحبانية السياحية.",
    subDistricts: ["الخالدية المركز", "الحبانية"],
    color: "from-navy-light to-gold-dark",
  },
];

const DistrictsSection = () => {
  const [selected, setSelected] = useState<District>(districts[0]);

  return (
    <section id="districts" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold rounded-full text-sm font-tajawal mb-4">
            الخريطة التفاعلية
          </span>
          <h2 className="text-3xl md:text-5xl font-cairo font-extrabold text-foreground mb-4">
            أقضية محافظة <span className="text-gradient-gold">الأنبار</span>
          </h2>
          <p className="text-muted-foreground font-tajawal max-w-2xl mx-auto">
            استكشف الأقضية والنواحي التابعة للمحافظة مع بيانات تفصيلية لكل وحدة إدارية
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* District Cards - Left Grid */}
          <div className="lg:col-span-2 grid grid-cols-3 gap-3">
            {districts.map((district, i) => (
              <motion.button
                key={district.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setSelected(district)}
                className={`relative p-5 rounded-2xl text-right transition-all ${
                  selected.id === district.id
                    ? "bg-primary text-primary-foreground ring-2 ring-gold shadow-lg"
                    : "bg-card text-card-foreground card-gov border border-border hover:border-gold/30"
                }`}
              >
                <MapPin
                  className={`w-5 h-5 mb-2 ${
                    selected.id === district.id ? "text-gold" : "text-gold/60"
                  }`}
                />
                <h3 className="font-cairo font-bold text-lg">{district.name}</h3>
                <p
                  className={`text-xs font-tajawal mt-1 ${
                    selected.id === district.id
                      ? "text-primary-foreground/60"
                      : "text-muted-foreground"
                  }`}
                >
                  {district.population} نسمة
                </p>
              </motion.button>
            ))}
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-lg h-full"
              >
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-l ${selected.color} text-primary-foreground text-sm font-tajawal mb-6`}>
                  <MapPin className="w-4 h-4" />
                  قضاء {selected.name}
                </div>

                <h3 className="text-3xl md:text-4xl font-cairo font-extrabold text-foreground mb-4">
                  {selected.name}
                </h3>

                <p className="text-muted-foreground font-tajawal text-lg leading-relaxed mb-8">
                  {selected.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-muted">
                    <Users className="w-5 h-5 text-gold mb-2" />
                    <div className="text-xl font-cairo font-bold text-foreground">
                      {selected.population}
                    </div>
                    <div className="text-xs text-muted-foreground font-tajawal">عدد السكان</div>
                  </div>
                  <div className="p-4 rounded-xl bg-muted">
                    <Landmark className="w-5 h-5 text-gold mb-2" />
                    <div className="text-xl font-cairo font-bold text-foreground">
                      {selected.area}
                    </div>
                    <div className="text-xs text-muted-foreground font-tajawal">المساحة</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-cairo font-bold text-foreground mb-3 flex items-center gap-2">
                    <Building className="w-4 h-4 text-gold" />
                    النواحي التابعة
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.subDistricts.map((sub) => (
                      <span
                        key={sub}
                        className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-sm font-tajawal"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistrictsSection;
