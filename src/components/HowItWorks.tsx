import { motion, useReducedMotion } from "framer-motion";
import { Search, FileText, Settings, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "Schritt 1",
    title: "SEO‑Audit & Strategie",
    description: "Umfassende Website‑Analyse, Keyword‑Recherche und Wettbewerbsanalyse. Wir erstellen eine individuelle SEO‑Roadmap für Ihr Unternehmen."
  },
  {
    icon: FileText,
    step: "Schritt 2",
    title: "Content & On‑Page‑SEO",
    description: "Bestehende Inhalte optimieren und neue SEO‑fokussierte Inhalte erstellen. Meta‑Tags, Überschriften und interne Verlinkungsstrategie."
  },
  {
    icon: Settings,
    step: "Schritt 3",
    title: "Technische Umsetzung",
    description: "Pagespeed‑Optimierung, mobile Responsivität, Schema‑Markup und technische SEO‑Fixes für bessere Crawlability."
  },
  {
    icon: TrendingUp,
    step: "Schritt 4",
    title: "Messen & Skalieren",
    description: "Rankings verfolgen, Traffic‑Wachstum analysieren und kontinuierlich optimieren. Monatliche Reports und Strategie‑Anpassungen."
  }
];

export const HowItWorks = () => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.section 
      id="how-it-works"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-gradient-to-b from-background via-muted/30 to-background z-20 min-h-[600px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: prefersReducedMotion ? 0.5 : 1.0, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="mb-10 sm:mb-16 md:mb-20 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-2 bg-foreground text-gold text-sm font-semibold rounded-full mb-4">
            SEO in 4 Schritten
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            So <span className="text-gold">funktioniert's</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Von der Analyse bis zu Ranking‑Verbesserungen in 30–90 Tagen. Bewährter Prozess, messbare Ergebnisse.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative mb-12 sm:mb-16 last:mb-0"
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : (index % 2 === 0 ? -16 : 16), rotateY: 0 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: prefersReducedMotion ? 0.45 : 0.7, delay: index * 0.15, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <div className={`flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <motion.div 
                  className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-gold via-[hsl(var(--brand-blue))] to-gold flex items-center justify-center text-white ring-1 ring-brand/30 shadow-[0_12px_30px_-12px_hsl(var(--brand-blue)/0.45)] relative group"
                  whileHover={prefersReducedMotion ? { scale: 1.02 } : { scale: 1.06, rotate: 6 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 rounded-full bg-gold/20 blur-md group-hover:blur-lg transition-all duration-500" />
                  <step.icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white relative z-10" />
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-7 h-7 sm:w-8 sm:h-8 bg-foreground text-brand-blue rounded-full flex items-center justify-center text-xs sm:text-sm font-bold border-2 border-brand-blue">
                    {index + 1}
                  </div>
                </motion.div>
                
                <motion.div 
                  className={`relative flex-1 bg-card border-2 border-brand-blue/30 rounded-xl sm:rounded-2xl p-5 sm:p-7 md:p-9 hover:border-brand-blue hover:shadow-[0_16px_40px_-14px_hsl(var(--brand-blue)/0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-all duration-300 group ${index % 2 === 1 ? 'md:text-right' : ''}`}
                  whileHover={{ y: -4, scale: 1.01 }}
                  tabIndex={0}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand-blue/8 via-[hsl(var(--brand-blue)/0.08)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="text-brand-blue font-semibold text-sm uppercase tracking-wider mb-3 inline-block px-3 py-1 bg-brand-blue/15 rounded-full">
                    {step.step}
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-foreground group-hover:text-brand-blue transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base sm:text-base md:text-lg">
                    {step.description}
                  </p>
                  
                  {/* Decorative corner */}
                  <div className={`absolute ${index % 2 === 1 ? 'top-0 left-0 border-t-2 border-l-2 rounded-tl-xl sm:rounded-tl-2xl' : 'bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl sm:rounded-br-2xl'} w-12 h-12 sm:w-16 sm:h-16 border-gold/0 group-hover:border-gold/50 transition-all duration-500`} />
                </motion.div>
              </div>
              
              {index < steps.length - 1 && (
                <motion.div 
                  className="absolute left-16 top-32 w-0.5 h-16 bg-gradient-to-b from-gold via-[hsl(var(--brand-blue)/0.5)] to-transparent hidden md:block"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: prefersReducedMotion ? 0.3 : 0.5, delay: index * 0.15 + 0.3 }}
                />
              )}
            </motion.div>
          ))}
          <motion.div 
            className="mt-8 sm:mt-12 flex justify-center"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.3 : 0.5 }}
          >
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background hover:bg-gold hover:text-foreground transition-colors duration-300 font-semibold ring-1 ring-foreground/20">
              SEO‑Audit buchen
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};