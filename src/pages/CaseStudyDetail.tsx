import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, TrendingUp, Quote } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { caseStudies_de, caseStudies_en } from "@/components/data/caseStudies";
import { useTranslation } from "react-i18next";

const CaseStudyDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const dataset = i18n.language && i18n.language.startsWith("de") ? caseStudies_de : caseStudies_en;
  
  const caseStudy = dataset.find(cs => cs.id === Number(id));

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{i18n.language?.startsWith("de") ? "Fallstudie nicht gefunden" : "Case study not found"}</h1>
          <button
            onClick={() => navigate('/')}
            className="text-gold hover:underline"
          >
            {i18n.language?.startsWith("de") ? "Zur Startseite" : "Back to homepage"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <button
            onClick={() => navigate('/')}
            className="mb-6 flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {i18n.language?.startsWith("de") ? "Zurück zur Startseite" : "Back to homepage"}
          </button>

          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="mb-10">
              {/* Industry badge */}
              <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full mb-4">
                {caseStudy.industry}
              </span>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
                {caseStudy.title}
              </h1>

              <div className="flex items-center gap-3 text-base text-muted-foreground mb-6">
                <span className="font-semibold text-foreground">{caseStudy.company}</span>
                <span>•</span>
                <span>{caseStudy.industry}</span>
              </div>

              {/* Hero Image */}
              <div className="rounded-xl overflow-hidden shadow-lg mb-8 border border-border">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.company}
                  className="w-full h-48 sm:h-64 md:h-80 object-cover"
                />
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="bg-gold/5 border border-gold/20 rounded-lg p-5 text-center shadow-sm shadow-gold/10"
                >
                  <div className="text-3xl font-bold text-gold mb-1">{caseStudy.stats.mainResult}</div>
                  <div className="text-xs text-muted-foreground">{t("caseStudies.statResult")}</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.02 }}
                  className="bg-gold/5 border border-gold/20 rounded-lg p-5 text-center shadow-sm shadow-gold/10"
                >
                  <div className="text-3xl font-bold text-gold mb-1">{caseStudy.stats.seoFocus}</div>
                  <div className="text-xs text-muted-foreground">{t("caseStudies.statFocus")}</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.04 }}
                  className="bg-gold/5 border border-gold/20 rounded-lg p-5 text-center shadow-sm shadow-gold/10"
                >
                  <div className="text-3xl font-bold text-gold mb-1">{caseStudy.stats.timeframe}</div>
                  <div className="text-xs text-muted-foreground">{t("caseStudies.statTimeframe")}</div>
                </motion.div>
              </div>
            </div>

            {/* Challenge Section */}
            <div className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">
                {i18n.language?.startsWith("de") ? "Die Herausforderung" : "The Challenge"}
              </h2>
              <div className="bg-card border border-border rounded-lg p-5 sm:p-6">
                <p className="text-base text-muted-foreground leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>
            </div>

            {/* Solution Section */}
            <div className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">
                {i18n.language?.startsWith("de") ? "Die Lösung" : "The Solution"}
              </h2>
              <div className="bg-card border border-border rounded-lg p-5 sm:p-6">
                <p className="text-base text-muted-foreground leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Implementation Overview */}
            <div className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">
                {i18n.language?.startsWith("de") ? "So haben wir es umgesetzt" : "How we implemented it"}
              </h2>
              <div className="bg-card border border-border rounded-lg p-5 sm:p-6 space-y-4">
                <p className="text-base text-muted-foreground leading-relaxed">
                  {i18n.language?.startsWith("de")
                    ? "Wir haben nicht einfach einen virtuellen Assistenten eingesetzt und auf das Beste gehofft. Die Umsetzung folgte einem einfachen, strukturierten Plan, sodass das Team jederzeit wusste, was warum passiert."
                    : "We didn’t just hire a virtual assistant and hope for the best. Implementation followed a simple, structured plan so the team always knew what was happening and why."}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
                  <div className="bg-background/60 border border-border rounded-lg p-4">
                    <h3 className="text-foreground font-semibold mb-2 text-sm">
                      {i18n.language?.startsWith("de") ? "1. Analyse &amp; Playbook" : "1. Analysis &amp; Playbook"}
                    </h3>
                    <p>
                      {i18n.language?.startsWith("de")
                        ? "Wiederkehrende Aufgaben, Tools und Kommunikationsstandards definiert für einen reibungslosen Start."
                        : "Defined recurring tasks, tools, and communication standards for a smooth start."}
                    </p>
                  </div>
                  <div className="bg-background/60 border border-border rounded-lg p-4">
                    <h3 className="text-foreground font-semibold mb-2 text-sm">
                      {i18n.language?.startsWith("de") ? "2. Systeme &amp; Training" : "2. Systems &amp; Training"}
                    </h3>
                    <p>
                      {i18n.language?.startsWith("de")
                        ? "SOPs, Loom‑Videos und Checklisten erstellt, damit Übergaben nicht vom Gedächtnis abhängen."
                        : "Created SOPs, Loom videos, and checklists so handoffs don’t rely on memory."}
                    </p>
                  </div>
                  <div className="bg-background/60 border border-border rounded-lg p-4">
                    <h3 className="text-foreground font-semibold mb-2 text-sm">
                      {i18n.language?.startsWith("de") ? "3. Optimieren &amp; Skalieren" : "3. Optimize &amp; Scale"}
                    </h3>
                    <p>
                      {i18n.language?.startsWith("de")
                        ? "Wöchentliche Performance‑Reviews, Entlastung der Führung und Kapazitäten ausgebaut."
                        : "Weekly performance reviews, leadership unblocked, and capacity expanded."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* VA Responsibilities Snapshot */}
            <div className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">
                {i18n.language?.startsWith("de") ? "Was die virtuellen Assistenten täglich übernehmen" : "What the Virtual Assistants Handle Day to Day"}
              </h2>
              <div className="bg-card border border-border rounded-lg p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="space-y-1.5">
                  <h3 className="text-foreground font-semibold mb-1 text-sm">{i18n.language?.startsWith("de") ? "Operations &amp; Administration" : "Operations &amp; Admin"}</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>{i18n.language?.startsWith("de") ? "Postfach- und Kalenderverwaltung für Schlüsselpersonen." : "Inbox and calendar management for key stakeholders."}</li>
                    <li>{i18n.language?.startsWith("de") ? "Aktualisierung von CRMs, Projektboards und gemeinsamen Tracking‑Sheets." : "Updating CRMs, project boards, and shared tracking sheets."}</li>
                    <li>{i18n.language?.startsWith("de") ? "Wöchentliche Zusammenfassungen, damit die Führung Fortschritte auf einen Blick sieht." : "Preparing weekly summaries so leadership sees progress at a glance."}</li>
                  </ul>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-foreground font-semibold mb-1 text-sm">{i18n.language?.startsWith("de") ? "Wachstum &amp; Kundensupport" : "Growth &amp; Client Support"}</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>{i18n.language?.startsWith("de") ? "Koordination von Kundenterminen, Follow‑ups und einfachen Support‑Anfragen." : "Coordinating client calls, follow-ups, and simple support requests."}</li>
                    <li>{i18n.language?.startsWith("de") ? "Unterstützung bei Recherche, Aufbau von Prospect‑Listen oder Reporting." : "Helping with research, prospect list building, or reporting."}</li>
                    <li>{i18n.language?.startsWith("de") ? "Dokumentation neuer wiederholbarer Prozesse, während das Unternehmen wächst." : "Documenting new repeatable processes as the business evolves."}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">
                {i18n.language?.startsWith("de") ? "Die Ergebnisse" : "The Results"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.results.map((result, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="bg-card border border-border rounded-lg p-5 shadow-sm hover:shadow-gold/20 hover:border-gold/50 transition-all duration-300"
                  >
                    <div className="text-3xl font-bold text-gold mb-2">{result.value}</div>
                    <div className="text-base font-semibold text-foreground mb-1">{result.metric}</div>
                    <div className="text-sm text-muted-foreground">{result.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="mb-10">
              <div className="bg-gold/5 border border-gold/20 rounded-xl p-6 sm:p-8 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-gold/30" />
                <p className="text-base sm:text-lg text-foreground mb-5 leading-relaxed italic">"{caseStudy.testimonial}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                    {caseStudy.testimonialAuthor.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{caseStudy.testimonialAuthor}</div>
                    <div className="text-sm text-muted-foreground">{caseStudy.testimonialRole}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Case Studies */}
            <div className="mt-12 pt-10 border-t border-border">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-foreground">{i18n.language?.startsWith("de") ? "Weitere Erfolgsgeschichten" : "More Success Stories"}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {dataset
                  .filter((cs) => cs.id !== caseStudy.id)
                  .slice(0, 2)
                  .map((relatedStudy) => (
                    <div
                      key={relatedStudy.id}
                      onClick={() => navigate(`/case-study/${relatedStudy.id}`)}
                      className="group cursor-pointer bg-card border border-border rounded-lg overflow-hidden hover:border-gold/50 hover:shadow-md transition-all duration-300"
                    >
                      <img
                        src={relatedStudy.image}
                        alt={relatedStudy.company}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-4">
                        <span className="text-xs text-gold font-semibold">{relatedStudy.industry}</span>
                        <h4 className="text-base font-bold mt-2 mb-1 text-foreground group-hover:text-gold transition-colors line-clamp-2">
                          {relatedStudy.company}
                        </h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">{relatedStudy.challenge}</p>
                        <div className="mt-2 text-sm text-gold font-semibold flex items-center gap-1">
                          {i18n.language?.startsWith("de") ? "Fallstudie ansehen" : "View case study"}
                          <ArrowLeft className="w-4 h-4 rotate-180" />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
