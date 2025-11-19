export interface CaseStudy {
  id: number;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial: string;
  testimonialAuthor: string;
  testimonialRole: string;
  image: string;
  stats: {
    mainResult: string;
    timeframe: string;
    seoFocus: string;
  };
}

export const caseStudies_de: CaseStudy[] = [
  {
    id: 1,
    title: "E‑Commerce‑Shop erzielt 400% organisches Wachstum durch technisches SEO‑Upgrade",
    company: "TechMart Online",
    industry: "E‑Commerce",
    challenge: "Schlechte Seitenperformance, technische Probleme und geringe Sichtbarkeit. Der organische Traffic sank, während Wettbewerber die Suche dominierten.",
    solution: "Umfassendes technisches SEO‑Audit, Pagespeed‑Optimierung, bessere mobile Responsivität, Schema‑Markup und gezieltes Keyword‑Targeting.",
    results: [
      { metric: "Organischer Traffic", value: "+400%", description: "Massiver Anstieg der organischen Sitzungen in 6 Monaten" },
      { metric: "Keyword‑Rankings", value: "250+", description: "Keywords in den Top‑10‑Positionen" },
      { metric: "Umsatz", value: "+280%", description: "Organisches Umsatzwachstum durch bessere Rankings" },
      { metric: "Page Speed", value: "+85%", description: "Verbesserung der Core‑Web‑Vitals" }
    ],
    testimonial: "Unser organischer Traffic ist nach den technischen SEO‑Verbesserungen explodiert. Wir ranken nun für Keywords, die wir nie für möglich hielten.",
    testimonialAuthor: "Stefan Richter",
    testimonialRole: "CEO, TechMart Online",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    stats: {
      mainResult: "+400% Traffic",
      timeframe: "6 Monate",
      seoFocus: "Technisches SEO"
    }
  },
  {
    id: 2,
    title: "Lokales Unternehmen dominiert die Suche mit gezielter Local‑SEO‑Kampagne",
    company: "Digital Dynamics",
    industry: "Professionelle Dienstleistungen",
    challenge: "Kaum Sichtbarkeit in lokalen Suchergebnissen, schwaches Google‑My‑Business‑Profil, Kundenverlust an besser sichtbare Wettbewerber.",
    solution: "Local‑SEO‑Optimierung, GMB‑Verbesserung, lokale Zitate, Bewertungsmanagement und standortbasierte Content‑Strategie.",
    results: [
      { metric: "Lokale Rankings", value: "#1 Position", description: "Top‑Ranking für primäre lokale Keywords" },
      { metric: "GMB‑Aufrufe", value: "+320%", description: "Mehr Aufrufe des Google‑My‑Business‑Profils" },
      { metric: "Telefonanrufe", value: "+180%", description: "Mehr direkte Anrufe aus den Suchergebnissen" },
      { metric: "Bewertungen", value: "+150%", description: "Zunahme positiver Google‑Bewertungen" }
    ],
    testimonial: "Wir dominieren jetzt die lokale Suche. Das Telefon klingelt ständig mit qualifizierten Leads aus Google‑Suchen.",
    testimonialAuthor: "Julia Becker",
    testimonialRole: "Gründerin, Digital Dynamics",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    stats: {
      mainResult: "#1 Local Ranking",
      timeframe: "4 Monate",
      seoFocus: "Local SEO"
    }
  },
  {
    id: 3,
    title: "SaaS‑Unternehmen senkt Akquisekosten mit Content‑getriebener SEO",
    company: "CloudFlow Solutions",
    industry: "SaaS",
    challenge: "Hohe Akquisekosten durch Paid Ads, geringe organische Sichtbarkeit und schwierige Zielgruppenreichweite über die Suche.",
    solution: "Umfassende Content‑Strategie, keywordoptimierte Blogposts, SEO für technische Dokus und strategische interne Verlinkung für organische Leads.",
    results: [
      { metric: "Organische Leads", value: "+450%", description: "Mehr qualifizierte Leads über die organische Suche" },
      { metric: "CAC‑Reduktion", value: "-60%", description: "Deutlich niedrigere Akquisekosten insgesamt" },
      { metric: "Content‑Traffic", value: "+380%", description: "Wachstum bei Blog‑ und Ressourcen‑Seiten" },
      { metric: "Conversion‑Rate", value: "+25%", description: "Besser qualifizierter Traffic konvertiert häufiger" }
    ],
    testimonial: "SEO hat unsere Lead‑Generierung transformiert. Hochwertige Anfragen ohne die hohen Kosten bezahlter Werbung.",
    testimonialAuthor: "Marco Schneider",
    testimonialRole: "CTO, CloudFlow Solutions",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    stats: {
      mainResult: "-60% CAC",
      timeframe: "8 Monate",
      seoFocus: "Content‑SEO"
    }
  }
];

export const caseStudies_en: CaseStudy[] = [
  {
    id: 1,
    title: "E‑commerce store achieves 400% organic growth with technical SEO upgrade",
    company: "TechMart Online",
    industry: "E‑commerce",
    challenge: "Poor site performance, technical issues, and low visibility. Organic traffic declined while competitors dominated search.",
    solution: "Comprehensive technical SEO audit, page speed improvements, better mobile responsiveness, schema markup, and targeted keyword strategy.",
    results: [
      { metric: "Organic traffic", value: "+400%", description: "Massive increase in organic sessions in 6 months" },
      { metric: "Keyword rankings", value: "250+", description: "Keywords in Top‑10 positions" },
      { metric: "Revenue", value: "+280%", description: "Organic revenue growth from improved rankings" },
      { metric: "Page speed", value: "+85%", description: "Core Web Vitals improvements" }
    ],
    testimonial: "Our organic traffic exploded after the technical SEO improvements. We now rank for terms we never thought possible.",
    testimonialAuthor: "Stefan Richter",
    testimonialRole: "CEO, TechMart Online",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    stats: {
      mainResult: "+400% traffic",
      timeframe: "6 months",
      seoFocus: "Technical SEO"
    }
  },
  {
    id: 2,
    title: "Local business dominates search with targeted local SEO campaign",
    company: "Digital Dynamics",
    industry: "Professional services",
    challenge: "Low visibility in local search results, weak Google Business Profile, losing customers to more visible competitors.",
    solution: "Local SEO optimization, GBP improvements, local citations, review management, and location‑based content strategy.",
    results: [
      { metric: "Local rankings", value: "#1 position", description: "Top ranking for primary local keywords" },
      { metric: "GBP views", value: "+320%", description: "Increase in Google Business Profile views" },
      { metric: "Phone calls", value: "+180%", description: "More direct calls from search results" },
      { metric: "Reviews", value: "+150%", description: "Growth in positive Google reviews" }
    ],
    testimonial: "We now dominate local search. The phone keeps ringing with qualified leads from Google searches.",
    testimonialAuthor: "Julia Becker",
    testimonialRole: "Founder, Digital Dynamics",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    stats: {
      mainResult: "#1 local ranking",
      timeframe: "4 months",
      seoFocus: "Local SEO"
    }
  },
  {
    id: 3,
    title: "SaaS company lowers acquisition costs with content‑driven SEO",
    company: "CloudFlow Solutions",
    industry: "SaaS",
    challenge: "High acquisition costs from paid ads, low organic visibility, and difficulty reaching the target audience via search.",
    solution: "Full content strategy, keyword‑optimized blogs, SEO for technical docs, and strategic internal linking for organic leads.",
    results: [
      { metric: "Organic leads", value: "+450%", description: "More qualified leads from organic search" },
      { metric: "CAC reduction", value: "-60%", description: "Significantly lower overall acquisition costs" },
      { metric: "Content traffic", value: "+380%", description: "Growth across blogs and resource pages" },
      { metric: "Conversion rate", value: "+25%", description: "Better qualified traffic converts more often" }
    ],
    testimonial: "SEO transformed our lead generation. High‑quality inquiries without the high costs of paid ads.",
    testimonialAuthor: "Marco Schneider",
    testimonialRole: "CTO, CloudFlow Solutions",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    stats: {
      mainResult: "-60% CAC",
      timeframe: "8 months",
      seoFocus: "Content SEO"
    }
  }
];

// Backward-compat: default export used elsewhere
export const caseStudies: CaseStudy[] = caseStudies_de;
