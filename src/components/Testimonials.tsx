import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const testimonials_en = [
  {
    name: "Emma Rodriguez",
    company: "Luxe Beauty Co.",
    role: "Founder",
    content: "Our organic traffic increased 400% in 8 months. We went from page 3 to ranking #1 for our main keywords. The ROI from SEO has been incredible.",
    rating: 5
  },
  {
    name: "David Chen",
    company: "Peak Performance Coaching",
    role: "CEO",
    content: "Local SEO was a game changer. We now dominate local search and get 15+ qualified leads per week from Google. Best investment we've made.",
    rating: 5
  },
  {
    name: "Sophie Martens",
    company: "Urban Eats",
    role: "Marketing Lead",
    content: "Their technical SEO audit fixed issues we didn't even know existed. Site speed improved 85% and we're ranking for 300+ keywords now.",
    rating: 5
  }
];

const testimonials_de = [
  {
    name: "Emma Rodriguez",
    company: "Luxe Beauty Co.",
    role: "Gründerin",
    content: "Unser organischer Traffic ist in 8 Monaten um 400% gestiegen. Von Seite 3 auf Platz #1 für unsere wichtigsten Keywords. Der SEO‑ROI ist beeindruckend.",
    rating: 5
  },
  {
    name: "David Chen",
    company: "Peak Performance Coaching",
    role: "CEO",
    content: "Local SEO war ein Game‑Changer. Wir dominieren jetzt die lokale Suche und erhalten 15+ qualifizierte Leads pro Woche über Google. Beste Investition.",
    rating: 5
  },
  {
    name: "Sophie Martens",
    company: "Urban Eats",
    role: "Marketing‑Leitung",
    content: "Das technische SEO‑Audit hat Probleme behoben, die wir gar nicht kannten. Die Seitengeschwindigkeit stieg um 85% und wir ranken für 300+ Keywords.",
    rating: 5
  }
];

export const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const items = i18n.language && i18n.language.startsWith("de") ? testimonials_de : testimonials_en;
  return (
    <motion.section 
      id="testimonials"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-background text-foreground z-40"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
        <motion.div 
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2" dangerouslySetInnerHTML={{ __html: t("testimonials.title_html") }} />
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl px-2">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12">
          {items.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 hover:bg-card transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            >
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-gold text-gold" />
                ))}
              </div>
              
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border pt-3 sm:pt-4">
                <p className="text-sm sm:text-base font-bold text-foreground">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-gold">{testimonial.role}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-gold/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-5xl mx-auto hover:border-gold/50 transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div className="text-left">
            <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
              {t("testimonials.badge")}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" dangerouslySetInnerHTML={{ __html: t("testimonials.case_title") }} />
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-5 sm:mb-6 leading-relaxed max-w-3xl">
              {t("testimonials.case_desc")}
            </p>
            <Button variant="gold" size="lg" className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
              {t("testimonials.case_cta")}
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};