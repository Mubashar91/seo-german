import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search, TrendingUp, FileText, Settings, BarChart3, Link } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  seoTopics?: Array<"keyword-research" | "on-page" | "technical" | "content" | "link-building" | "analytics">;
}

// German dataset (DE)
const blogPosts_de: BlogPost[] = [
  {
    id: 1,
    title: "Keyword-Recherche meistern: Hochwertige Keywords finden, die konvertieren",
    excerpt: "Ein systematischer Ansatz, um profitable Keywords mit geringer Konkurrenz und hoher Suchintention zu entdecken.",
    content: `
      <h2>Recherche-Prozess</h2>
      <ul>
        <li>Seed-Keywords: Beginnen Sie mit Ihren wichtigsten Geschäftsterminen</li>
        <li>Wettbewerbsanalyse: Die besten Keywords der Konkurrenz identifizieren</li>
        <li>Long-Tail-Findung: Spezifische, hochintentionale Suchphrasen entdecken</li>
        <li>Suchintention abgleichen: Keywords mit Nutzerzielen verknüpfen</li>
      </ul>
      <h3>Tools & Kennzahlen</h3>
      <p>Nutzen Sie Ahrefs, SEMrush und den Google Keyword Planner. Fokus auf Suchvolumen, Keyword-Schwierigkeit und CPC.</p>
    `,
    author: "SEO‑Team",
    date: "15. Oktober 2025",
    readTime: "8 Min. Lesezeit",
    category: "Keyword‑Recherche",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    seoTopics: ["keyword-research"]
  },
  {
    id: 2,
    title: "On‑Page‑SEO Checkliste: Jedes Element für Rankings optimieren",
    excerpt: "Umfassender Leitfaden zur Optimierung von Title-Tags, Meta-Beschreibungen, Überschriften und Content für maximale Sichtbarkeit.",
    content: `
      <h2>Wesentliche Elemente</h2>
      <ul>
        <li>Titel-Tags: Primäres Keyword innerhalb von 60 Zeichen einfügen</li>
        <li>Meta-Beschreibungen: Überzeugender Text mit Keywords in 155 Zeichen</li>
        <li>Überschriftenstruktur: H1-, H2-, H3-Hierarchie mit Keyword-Variationen</li>
        <li>Interne Verlinkung: Verwandte Seiten strategisch verbinden</li>
      </ul>
      <p>Fokus auf Nutzererlebnis, bei gleichzeitiger durchgehender Keyword-Optimierung.</p>
    `,
    author: "Content‑Team",
    date: "8. Oktober 2025",
    readTime: "6 Min. Lesezeit",
    category: "On‑Page‑SEO",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop&q=80",
    seoTopics: ["on-page", "content"]
  },
  {
    id: 3,
    title: "Technisches SEO‑Audit: Probleme beheben, die Ihre Rankings zerstören",
    excerpt: "Technische Probleme identifizieren und beheben, die das Crawlen und Indexieren durch Suchmaschinen verhindern.",
    content: `
      <h2>Kritische Probleme</h2>
      <ul>
        <li>Seitengeschwindigkeit: Für Core Web Vitals optimieren</li>
        <li>Mobile Responsivität: Perfektes mobiles Erlebnis sicherstellen</li>
        <li>Crawl-Fehler: 404er und Redirect-Chains beheben</li>
        <li>Schema Markup: Strukturierte Daten implementieren</li>
      </ul>
      <p>Nutzen Sie Google Search Console, PageSpeed Insights und Screaming Frog für umfassende Audits.</p>
    `,
    author: "Technik‑Team",
    date: "28. September 2025",
    readTime: "10 Min. Lesezeit",
    category: "Technisches SEO",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop&q=80",
    seoTopics: ["technical"]
  },
  {
    id: 4,
    title: "Content, der rankt: Schreiben für Nutzer und Suchmaschinen",
    excerpt: "Überzeugenden, SEO‑optimierten Content erstellen, der Suchintention erfüllt und konvertiert.",
    content: `
      <h2>Content-Strategie</h2>
      <ul>
        <li>Analyse der Suchintention: Verstehen, was Nutzer wirklich wollen</li>
        <li>Content-Tiefe: Umfassende Abdeckung schlägt dünne Inhalte</li>
        <li>Keyword-Integration: Natürliche Platzierung im gesamten Inhalt</li>
        <li>Nutzerbindung: Struktur für Lesbarkeit und Interaktion</li>
      </ul>
      <p>Balancieren Sie Keyword-Optimierung mit wertvollem, fesselndem Inhalt, der Nutzer auf Ihrer Seite hält.</p>
    `,
    author: "Content‑Strategie",
    date: "15. September 2025",
    readTime: "7 Min. Lesezeit",
    category: "Content‑SEO",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80",
    seoTopics: ["content", "on-page"]
  },
  {
    id: 5,
    title: "Erfolgreicher Linkaufbau: Hochwertige Backlinks verdienen",
    excerpt: "Bewährte Strategien, um autoritative Backlinks zu gewinnen und Domainautorität sowie Rankings zu steigern.",
    content: `
      <h2>Taktiken für Linkaufbau</h2>
      <ul>
        <li>Ressourcenseiten-Outreach: Aufnahme auf Branchenressourcenseiten</li>
        <li>Broken-Link-Building: Tote Links durch Ihren Content ersetzen</li>
        <li>Gastbeiträge: Beiträge auf autoritativen Branchenseiten</li>
        <li>Digitale PR: Nachrichtenwürdige Inhalte für Medienaufmerksamkeit</li>
      </ul>
      <p>Qualität vor Quantität: Ein starker Link schlägt dutzende schwache.</p>
    `,
    author: "Linkbuilding‑Team",
    date: "30. August 2025",
    readTime: "9 Min. Lesezeit",
    category: "Linkbuilding",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    seoTopics: ["link-building"]
  },
  {
    id: 6,
    title: "SEO‑Analytics: Das Wichtige für Wachstum messen",
    excerpt: "Wesentliche Kennzahlen und Reporting‑Strategien, um SEO‑Erfolg zu messen und den ROI zu belegen.",
    content: `
      <h2>Wichtige Kennzahlen</h2>
      <ul>
        <li>Organischer Traffic: Wachstum und Qualität überwachen</li>
        <li>Keyword-Rankings: Zielkeywords verfolgen</li>
        <li>Conversion-Rate: Conversions aus organischem Traffic messen</li>
        <li>Technischer Zustand: Crawl-Fehler und Seitengeschwindigkeit überwachen</li>
      </ul>
      <p>Nutzen Sie Google Analytics 4, die Search Console und Rank-Tracking-Tools für umfassendes Reporting.</p>
    `,
    author: "Analytics‑Team",
    date: "12. August 2025",
    readTime: "8 Min. Lesezeit",
    category: "SEO‑Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    seoTopics: ["analytics"]
  }
];

// English dataset (EN)
const blogPosts_en: BlogPost[] = [
  {
    id: 1,
    title: "Master Keyword Research: Find High‑Intent Keywords That Convert",
    excerpt: "A practical workflow to discover profitable, low‑competition keywords aligned with search intent.",
    content: `
      <h2>Research Process</h2>
      <ul>
        <li>Seed keywords: Start from your core commercial terms</li>
        <li>Competitor analysis: Identify what already works</li>
        <li>Long‑tails: Discover specific, high‑intent queries</li>
        <li>Match intent: Map keywords to user goals</li>
      </ul>
    `,
    author: "SEO Team",
    date: "October 15, 2025",
    readTime: "8 min read",
    category: "Keyword Research",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    seoTopics: ["keyword-research"]
  },
  {
    id: 2,
    title: "On‑Page SEO Checklist: Optimize Every Element to Rank",
    excerpt: "Comprehensive tips to optimize titles, metas, headings and content for visibility.",
    content: `
      <h2>Core Elements</h2>
      <ul>
        <li>Title tags: Primary keyword within ~60 chars</li>
        <li>Meta descriptions: Persuasive copy within ~155 chars</li>
        <li>Heading structure: H1/H2/H3 hierarchy with keyword variations</li>
        <li>Internal linking: Connect related pages strategically</li>
      </ul>
    `,
    author: "Content Team",
    date: "October 8, 2025",
    readTime: "6 min read",
    category: "On‑Page SEO",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop&q=80",
    seoTopics: ["on-page", "content"]
  },
  {
    id: 3,
    title: "Technical SEO Audit: Fix Issues That Kill Rankings",
    excerpt: "Identify and fix issues that block crawling and indexing.",
    content: `
      <h2>Critical Issues</h2>
      <ul>
        <li>Site speed: Optimize for Core Web Vitals</li>
        <li>Mobile responsiveness: Ensure a perfect mobile UX</li>
        <li>Crawl errors: Fix 404s and redirect chains</li>
        <li>Schema markup: Implement structured data</li>
      </ul>
    `,
    author: "Technical Team",
    date: "September 28, 2025",
    readTime: "10 min read",
    category: "Technical SEO",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop&q=80",
    seoTopics: ["technical"]
  },
  {
    id: 4,
    title: "Content That Ranks: Write for Users and Search Engines",
    excerpt: "Create compelling, SEO‑optimized content that satisfies search intent and converts.",
    content: `
      <h2>Content Strategy</h2>
      <ul>
        <li>Analyze search intent</li>
        <li>Comprehensive coverage beats thin content</li>
        <li>Natural keyword integration</li>
        <li>Engagement through structure</li>
      </ul>
    `,
    author: "Content Strategy",
    date: "September 15, 2025",
    readTime: "7 min read",
    category: "Content SEO",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80",
    seoTopics: ["content", "on-page"]
  },
  {
    id: 5,
    title: "Link Building That Works: Earn High‑Quality Backlinks",
    excerpt: "Proven tactics to earn authoritative backlinks that boost rankings.",
    content: `
      <h2>Link Building Tactics</h2>
      <ul>
        <li>Resource pages</li>
        <li>Broken link building</li>
        <li>Guest posting</li>
        <li>Digital PR</li>
      </ul>
    `,
    author: "Link Building Team",
    date: "August 30, 2025",
    readTime: "9 min read",
    category: "Link Building",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    seoTopics: ["link-building"]
  },
  {
    id: 6,
    title: "SEO Analytics: Track What Matters for Business Growth",
    excerpt: "Essential metrics and reporting strategies to measure SEO success and ROI.",
    content: `
      <h2>Key Metrics</h2>
      <ul>
        <li>Organic traffic</li>
        <li>Keyword rankings</li>
        <li>Conversion rate</li>
        <li>Technical health</li>
      </ul>
    `,
    author: "Analytics Team",
    date: "August 12, 2025",
    readTime: "8 min read",
    category: "SEO Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    seoTopics: ["analytics"]
  }
];

export const Blog = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const posts = i18n.language && i18n.language.startsWith("de") ? blogPosts_de : blogPosts_en;

  return (
    <motion.section
      id="blog"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-background overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="relative mb-8 sm:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gold/10 text-gold text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
            {t("blog.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-gold" dangerouslySetInnerHTML={{ __html: t("blog.title_html") }} />
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {t("blog.subtitle")}
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-card border border-border/50 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden hover:border-gold/50 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer w-full flex flex-col"
                onClick={() => navigate(`/blog/${post.id}`)}
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="px-2.5 py-1 sm:px-3 bg-gold text-foreground text-[10px] sm:text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-3 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="truncate">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 sm:mb-3 text-foreground group-hover:text-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/30">
                    <span className="text-[10px] sm:text-xs text-muted-foreground truncate">{t("blog.by")} {post.author}</span>
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                      {post.seoTopics && (
                        <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground/70">
                          {post.seoTopics.includes("keyword-research") && <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-label="Keyword‑Recherche" />}
                          {post.seoTopics.includes("on-page") && <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-label="On‑Page‑SEO" />}
                          {post.seoTopics.includes("technical") && <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-label="Technisches SEO" />}
                          {post.seoTopics.includes("content") && <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-label="Content‑SEO" />}
                          {post.seoTopics.includes("link-building") && <Link className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-label="Linkbuilding" />}
                          {post.seoTopics.includes("analytics") && <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-label="SEO‑Analytics" />}
                        </div>
                      )}
                      <div className="flex items-center gap-1 text-gold font-semibold text-[10px] sm:text-xs group-hover:gap-1.5 transition-all">
                        <span className="hidden sm:inline">{t("blog.read")}</span>
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
