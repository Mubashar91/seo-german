import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { useTranslation } from "react-i18next";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

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
}

// German dataset
const blogPosts_de: BlogPost[] = [
  {
    id: 1,
    title: "Keyword-Recherche meistern: Hochwertige Keywords finden, die konvertieren",
    excerpt: "Ein systematischer Ansatz, um profitable Keywords mit geringer Konkurrenz und hoher Suchintention zu entdecken.",
    content: `
      <p>
        Keyword-Recherche ist die Grundlage jeder erfolgreichen SEO-Strategie. Wenn Sie wirklich verstehen,
        wonach Ihre idealen Kunden suchen, erstellen Sie Seiten, die perfekt passen – statt zu raten und auf
        Traffic zu hoffen. In diesem Leitfaden zeige ich einen praxistauglichen Workflow für neue Nischen,
        Service-Launches oder Content-Refreshes.
      </p>

      <h2>Recherche-Prozess</h2>
      <ul>
        <li>Seed-Keywords: Start mit den wichtigsten Geschäftsterminen.</li>
        <li>Wettbewerbsanalyse: Die besten Keywords der Konkurrenz identifizieren.</li>
        <li>Long-Tail-Findung: Spezifische, hochintentionale Suchphrasen entdecken.</li>
        <li>Suchintention abgleichen: Keywords mit Nutzerzielen verknüpfen.</li>
      </ul>

      <h3>Tools &amp; Kennzahlen</h3>
      <p>
        Nutzen Sie Ahrefs, SEMrush und den Google Keyword Planner. Achten Sie auf Suchvolumen, Keyword-
        Schwierigkeit und CPC. So filtern Sie schnell raus, was wenig Wert hat, und fokussieren Chancen mit
        klarem Kaufinteresse.
      </p>

      <h3>Suchintention im Detail</h3>
      <p>
        Ordnen Sie Keywords nach Intention: informativ, kommerziell, transaktional, navigational. So erstellt
        man Inhalte, die zur Phase in der Customer Journey passen – Ranking ohne Match bringt keinen Umsatz.
      </p>

      <h3>Wiederholbarer Workflow</h3>
      <p>
        Führen Sie eine einfache Tabelle mit Keyword, Metriken, Intention und Seitentyp (Guide, Vergleich,
        Landingpage, FAQ). Das wird Ihr Content-Fahrplan statt einzelner, unverbundener Artikel.
      </p>

      <h3>Fortgeschrittene Techniken</h3>
      <p>
        Finden Sie Keyword-Lücken bei Wettbewerbern, analysieren Sie SERP-Features und priorisieren Sie nach
        Business-Wert statt Volumen. Oft performt ein Begriff mit geringerem Volumen und hoher Intention
        besser für Umsatz.
      </p>

      <h3>Topic-Cluster &amp; interne Links</h3>
      <p>
        Gruppieren Sie verwandte Keywords in Clustern. Eine Pillar-Page zum Hauptkeyword, flankiert von
        Long-Tail-Artikeln. Logisch verlinken – so verstehen Nutzer und Suchmaschinen die Zusammenhänge.
      </p>

      <h3>Umsetzungsstrategie</h3>
      <p>
        Starten Sie mit 3–5 umsatznahen Themen. Bauen Sie jeweils eine Pillar-Page und unterstützende How‑to-,
        Vergleichs- und Case-Artikel. Nutzen Sie Long-Tails natürlich und optimieren Sie iterativ.
      </p>

      <h3>Laufende Optimierung</h3>
      <p>
        Prüfen Sie alle 30–60 Tage: schwache Begriffe entfernen, Gewinner ausbauen, neue Chancen aus der
        Search Console identifizieren – oft verstecken sich dort Perlen mit Impressionen ohne eigenen Content.
      </p>

      <h3>Praxisbeispiel</h3>
      <p>
        Eine E‑Commerce‑Marke entdeckte eine Long‑Tail‑Nische zu ergonomischen Stühlen für Remote‑Worker.
        Mit einem kleinen Cluster aus Vergleichen und How‑tos erschloss sie eine rentable Nische, die große
        Wettbewerber übersahen – mit konversionsstarken Besuchern.
      </p>

      <h3>Häufige Fehler</h3>
      <ul>
        <li>Nur Volumen jagen und Conversion‑Potenzial ignorieren.</li>
        <li>Keyword‑Kannibalisierung durch mehrere Seiten zum selben Begriff.</li>
        <li>Ohne Wettbewerbsfähigkeit in der SERP zu prüfen veröffentlichen.</li>
        <li>Blindes Kopieren statt eigener Markenperspektive.</li>
      </ul>

      <h3>Action‑Checkliste</h3>
      <ul>
        <li>Top 3–5 umsatztreibende Angebote auflisten.</li>
        <li>Seed‑Keywords generieren und mit Long‑Tails erweitern.</li>
        <li>Intention und Wettbewerb validieren, erst dann committen.</li>
        <li>Keywords zu Clustern mit klarer Pillar‑Seite gruppieren.</li>
        <li>Monatlich Performance prüfen und Liste schärfen.</li>
      </ul>

      <h3>Fazit</h3>
      <p>
        Behandeln Sie Keyword‑Recherche als laufenden, strategischen Prozess. So wird klar, was Sie schreiben,
        für wen und wie jede Seite Ihre Geschäftsziele stützt – das ist die Kraft konvertierender Recherche.
      </p>
    `,
    author: "SEO‑Team",
    date: "15. Oktober 2025",
    readTime: "8 Min. Lesezeit",
    category: "Keyword‑Recherche",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "On‑Page‑SEO Checkliste: Jedes Element für Rankings optimieren",
    excerpt: "Umfassender Leitfaden zur Optimierung von Title‑Tags, Meta‑Beschreibungen, Überschriften und Content.",
    content: `
      <p>
        On‑Page‑SEO ist ein Hebel, den Sie komplett kontrollieren. Struktur, Text und Präsentation einer Seite
        beeinflussen Nutzerverhalten und Suchmaschinenverständnis direkt. Diese Checkliste ist Ihr schneller
        Qualitätscheck vor der Veröffentlichung wichtiger Seiten.
      </p>

      <h2>Wesentliche Elemente</h2>
      <ul>
        <li>Titel‑Tags: Primäres Keyword innerhalb von 60 Zeichen.</li>
        <li>Meta‑Beschreibungen: Überzeugend mit Keywords in 155 Zeichen.</li>
        <li>Überschriftenstruktur: H1/H2/H3 mit Keyword‑Varianten.</li>
        <li>Interne Verlinkung: Verwandte Seiten strategisch verbinden.</li>
      </ul>
      <p>
        Fokus auf Nutzererlebnis bei konsequenter Keyword‑Optimierung. Ziel: Die Suchanfrage besser und schneller
        beantworten – und scannbare Seiten bereitstellen.
      </p>

      <h3>Above‑the‑Fold‑Erlebnis</h3>
      <p>
        Der erste Screen muss die Hauptfrage schnell beantworten. Klare Headlines, prägnante Texte und ein
        deutlicher Primär‑CTA. Vermeiden Sie überladene Hero‑Sektionen.
      </p>

      <h3>Content‑Optimierung</h3>
      <p>
        Thema umfassend abdecken, semantische Keywords natürlich nutzen, echten Mehrwert liefern. Relevante Bilder
        mit optimiertem Alt‑Text und Beispiele/Minicases erhöhen Verständlichkeit.
      </p>

      <h3>Lesbarkeit &amp; Layout</h3>
      <p>
        Lange Absätze aufteilen, Aufzählungen nutzen, Kernaussagen hervorheben. Das verbessert Verweildauer und
        hilft Scannern. Kürzer schreiben, mehr Weißraum.
      </p>

      <h3>Technische Elemente</h3>
      <p>
        Saubere URLs, Schema‑Markup, schnelle Ladezeiten, mobile Responsivität. Selbst Top‑Content kämpft, wenn
        die Seite langsam ist oder Crawler scheitern.
      </p>

      <h3>On‑Page‑QA</h3>
      <p>
        Vor Livegang: Headlines, interne Links, Alt‑Texte, strukturierte Daten, Mobile‑Format. Ein kurzer Pre‑Launch
        spart Monate an verpassten Chancen.
      </p>

      <h3>Praxisbeispiel</h3>
      <p>
        Ein B2B‑SaaS überarbeitete Feature‑Seiten auf Outcomes, mit strukturierten Überschriften und internen Links
        zu Blogposts. CTR und Time‑on‑Page stiegen noch vor neuen Backlinks.
      </p>

      <h3>Content‑Abschnitts‑Vorlage</h3>
      <ul>
        <li>Klares Versprechen in der H1.</li>
        <li>Kurze Einleitung: Problem + Lösung.</li>
        <li>H2 für Schritte/Themen, H3 für Details.</li>
        <li>Starker CTA, der mit Ihrem Angebot verknüpft.</li>
      </ul>

      <h3>Action‑Checkliste</h3>
      <ul>
        <li>5–10 wertvollste Seiten auf On‑Page‑Basics prüfen.</li>
        <li>Titles/Metas klarer und überzeugender schreiben.</li>
        <li>Struktur mit beschreibenden Überschriften und internen Links ordnen.</li>
        <li>Mindestens ein klarer Above‑the‑Fold‑CTA.</li>
        <li>Schema‑Markup dort, wo sinnvoll (FAQ, Produkt, Artikel, …).</li>
      </ul>

      <h3>In die Praxis bringen</h3>
      <p>
        Machen Sie die Checkliste zum Standardprozess. Bei jeder neuen Seite/Artikel abarbeiten. Mit der Zeit
        wird die Site sauberer, navigierbarer und wettbewerbsfähiger.
      </p>
    `,
    author: "Content‑Team",
    date: "8. Oktober 2025",
    readTime: "6 Min. Lesezeit",
    category: "On‑Page‑SEO",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Technisches SEO‑Audit: Probleme beheben, die Ihre Rankings zerstören",
    excerpt: "Technische Probleme identifizieren und beheben, die Crawling und Indexierung behindern.",
    content: `
      <p>
        Technisches SEO ist die „Infrastruktur“ Ihrer Website. Wenn im Hintergrund etwas klemmt, fallen Rankings
        selbst bei starkem Content. Ein strukturiertes Audit deckt Bremsen fürs Wachstum auf und liefert einen
        klar priorisierten Maßnahmenplan.
      </p>

      <h2>Kritische Probleme</h2>
      <ul>
        <li>Seitengeschwindigkeit: Für Core Web Vitals optimieren.</li>
        <li>Mobile Responsivität: Perfektes mobiles Erlebnis sicherstellen.</li>
        <li>Crawl‑Fehler: 404er und Redirect‑Chains beheben.</li>
        <li>Schema‑Markup: Strukturierte Daten implementieren.</li>
      </ul>
      <p>
        Nutzen Sie Search Console, PageSpeed Insights und Screaming Frog für umfassende Audits. So sehen Sie,
        welche Seiten langsam, fehlerhaft oder für Suchmaschinen unsichtbar sind.
      </p>

      <h3>Core‑Web‑Vitals erklärt</h3>
      <p>
        Achten Sie besonders auf LCP, INP/TTI und CLS. Kleine Verbesserungen wirken hier überproportional auf
        Rankings und Conversions – besonders auf bereits trafficsstarken Seiten.
      </p>

      <h3>Performance‑Optimierung</h3>
      <p>
        Bilder komprimieren, CSS/JS minifizieren, Caching nutzen, CDN einsetzen. Starten Sie auf Seiten mit
        viel Traffic/Intent – dort sehen Sie schnell Wirkung.
      </p>

      <h3>Architektur &amp; interne Links</h3>
      <p>
        Flachere Strukturen, sprechende URLs, wichtige Seiten max. drei Klicks von der Startseite. Das erhöht
        Crawl‑Effizienz, verteilt Autorität besser und verbessert die UX.
      </p>

      <h3>Crawlability &amp; Indexierung</h3>
      <p>
        robots.txt optimieren, XML‑Sitemaps, Broken Links fixen, Canonicals korrekt setzen. Search Console
        regelmäßig auf „gecrawlt, nicht indexiert“ & Fehler prüfen.
      </p>

      <h3>Monitoring &amp; Alerts</h3>
      <p>
        Alerts in Search Console und Uptime‑Monitoring einrichten, um neue technische Issues sofort zu sehen.
        Kleine Fehlkonfigurationen können tausende URLs betreffen.
      </p>

      <h3>Praxisbeispiel</h3>
      <p>
        Ein Publisher mit tausenden Seiten blockierte versehentlich per robots.txt einen ganzen Content‑Bereich.
        Regel korrigiert, Sitemaps neu eingereicht – Traffic erholte sich in den Folgewochen.
      </p>

      <h3>Action‑Checkliste</h3>
      <ul>
        <li>Vollständigen technischen Crawl mindestens quartalsweise.</li>
        <li>Core Web Vitals monitoren und Regressionen schnell fixen.</li>
        <li>Redirects, Canonicals, Hreflang sauber und dokumentiert halten.</li>
        <li>Große technische Änderungen loggen (Korrelation mit Rankings).</li>
        <li>Indexierungsberichte monatlich prüfen, Anomalien früh entdecken.</li>
      </ul>

      <h3>Vom Audit zur Roadmap</h3>
      <p>
        Wert entsteht aus der Umsetzung: Probleme nach Impact/Aufwand clustern, Crawlability ent-blocken, Revenue‑
        Seiten beschleunigen. So entsteht eine stabile, skalierbare SEO‑Basis.
      </p>
    `,
    author: "Technik‑Team",
    date: "28. September 2025",
    readTime: "10 Min. Lesezeit",
    category: "Technisches SEO",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Content, der rankt: Schreiben für Nutzer und Suchmaschinen",
    excerpt: "Überzeugenden, SEO‑optimierten Content erstellen, der Suchintention erfüllt und konvertiert.",
    content: `
      <p>
        Guter Content füllt nicht nur eine Seite mit Worten. Er spricht die Sprache Ihrer Zielgruppe, löst echte
        Probleme und zeigt Suchmaschinen klar, warum er ein Top‑Ranking verdient. In diesem Artikel vereinen wir
        Storytelling, Struktur und SEO‑Best‑Practices zu einem praxistauglichen Framework.
      </p>

      <h2>Content‑Strategie</h2>
      <ul>
        <li>Suchintention analysieren: Verstehen, was Nutzer wirklich wollen.</li>
        <li>Content‑Tiefe: Umfassende Abdeckung schlägt dünne Inhalte.</li>
        <li>Keyword‑Integration: Natürliche Platzierung im gesamten Inhalt.</li>
        <li>Nutzerbindung: Struktur für Lesbarkeit und Interaktion.</li>
      </ul>
      <p>
        Balancieren Sie Keyword‑Optimierung mit wertvollem, fesselndem Inhalt, der Nutzer auf Ihrer Seite hält.
        Seiten, die Aufmerksamkeit halten und wirklich helfen, werden belohnt.
      </p>

      <h3>Ihr Themen‑Fahrplan</h3>
      <ul>
        <li>Quartalsweise Inhalte an klaren Business‑Zielen ausrichten.</li>
        <li>Jeden Artikel einer Persona und Funnel‑Phase zuordnen.</li>
        <li>Keine Zufalls‑Themen ohne strategischen Zusammenhang veröffentlichen.</li>
      </ul>

      <h3>Content‑Struktur</h3>
      <ul>
        <li>Klaren Überschriften und kurze Absätze für schnelle Orientierung.</li>
        <li>Beispiele, Fallstudien und Screenshots einbinden, wo sinnvoll.</li>
        <li>Konkrete Handlungstipps, damit Leser wissen, was als Nächstes zu tun ist.</li>
      </ul>

      <h3>Stimme, Ton &amp; Marke</h3>
      <ul>
        <li>Einfacher Styleguide für Tonalität, Wortwahl und CTAs.</li>
        <li>Konsistente Sprache über Blog, E‑Mails und Landingpages hinweg.</li>
        <li>Storys und Analogien nutzen, die zu Ihrer Marke passen.</li>
      </ul>

      <h3>Optimierungs‑Techniken</h3>
      <ul>
        <li>Verwandte Keywords und Nutzerfragen recherchieren.</li>
        <li>Für Featured Snippets und SERP‑Features optimieren.</li>
        <li>Interne und externe Links nutzen, um Aussagen zu stützen.</li>
      </ul>

      <h3>Refresh‑Framework</h3>
      <ul>
        <li>Top‑Artikel alle paar Monate prüfen.</li>
        <li>Neue Daten, Beispiele und Screenshots ergänzen.</li>
        <li>Veraltete Inhalte zusammenführen oder entfernen.</li>
      </ul>

      <h3>Praxisbeispiel</h3>
      <p>
        Eine Agentur aktualisierte einen alten „SEO‑Basics“‑Guide mit neuen Screenshots, Tools und kurzem Video.
        Der Beitrag gewann Rankings zurück und wurde erneut Top‑Lead‑Quelle – dank Klarheit, Struktur und Aktualität.
      </p>

      <h3>Storytelling für SEO</h3>
      <p>
        Geschichten bleiben besser hängen als Feature‑Listen. Nutzen Sie eine einfache Dramaturgie: Herausforderung,
        Wendepunkt, Lösung. So bleiben Leser dran, und Sie platzieren Keywords sowie CTAs natürlich.
      </p>

      <h3>Action‑Checkliste</h3>
      <ul>
        <li>Evergreen‑Posts im CMS taggen und regelmäßig auffrischen.</li>
        <li>Ranking‑/Conversion‑Sprünge nach Refresh tracken.</li>
        <li>Änderungen dokumentieren, um Muster zu reproduzieren.</li>
        <li>Von neuen Beiträgen auf Ihre wichtigsten Money‑Pages verlinken.</li>
      </ul>

      <h3>Content als Wachstums‑Asset</h3>
      <p>
        Denken Sie Content als langfristiges Asset statt Kampagne. Investieren Sie in Qualität, Struktur und Iteration.
        Mit der Zeit wird Ihre Artikel‑Bibliothek eine verlässliche Quelle für Traffic, Vertrauen und Leads.
      </p>
    `,
    author: "Content‑Strategie",
    date: "15. September 2025",
    readTime: "7 Min. Lesezeit",
    category: "Content‑SEO",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Erfolgreicher Linkaufbau: Hochwertige Backlinks verdienen",
    excerpt: "Bewährte Strategien, um autoritative Backlinks zu gewinnen und Domainautorität sowie Rankings zu steigern.",
    content: `
      <p>
        Backlinks sind weiterhin starke Ranking‑Signale – aber nicht alle Links sind gleich. Moderner Linkaufbau
        bedeutet weniger Massen‑Outreach und mehr echter Mehrwert für die Seiten, von denen Sie Links erhalten
        wollen. Wir fokussieren hier nachhaltige Taktiken, die Autorität aufbauen ohne Risiken.
      </p>

      <h2>Taktiken für Linkaufbau</h2>
      <ul>
        <li>Ressourcenseiten‑Outreach: Aufnahme auf Branchenressourcenseiten.</li>
        <li>Broken‑Link‑Building: Tote Links durch Ihren Content ersetzen.</li>
        <li>Gastbeiträge: Beiträge auf autoritativen Branchenseiten.</li>
        <li>Digitale PR: Nachrichtenwürdige Inhalte für Medienaufmerksamkeit.</li>
      </ul>
      <p>
        Qualität vor Quantität. Ein starker Link schlägt dutzende schwache, die keinen relevanten Traffic senden.
      </p>

      <h3>Die richtigen Seiten finden</h3>
      <p>
        Prospect‑Liste nach Relevanz, Autorität und Zielgruppen‑Overlap erstellen. Priorisieren Sie Seiten, die
        bereits zu Ihren Themen ranken und echte Interaktion haben. Solche Links bewegen Rankings und Referrals.
      </p>

      <h3>Outreach‑Strategie</h3>
      <p>
        Zielseiten gründlich recherchieren, E‑Mails personalisieren, klaren Mehrwert bieten und professionell
        nachfassen. Vermeiden Sie generische Vorlagen – die besten Pitches fühlen sich wie der Start einer
        echten Zusammenarbeit an.
      </p>

      <h3>Link‑würdige Assets</h3>
      <p>
        Investieren Sie in Inhalte, auf die man sich gern bezieht: eigene Studien, Benchmarks, Rechner, visuelle
        Leitfäden. Diese Assets verdienen langfristig Links und erleichtern Outreach‑Gespräche.
      </p>

      <h3>Impact messen</h3>
      <p>
        Analytics und Rank‑Tracking nutzen, um neue Backlinks mit Sichtbarkeits‑/Traffic‑Änderungen zu verknüpfen.
        Tracken Sie nicht nur die Anzahl, sondern die Qualität der Sitzungen, die diese Links bringen.
      </p>

      <h3>Praxisbeispiel</h3>
      <p>
        Eine Nischen‑Softwarefirma setzte auf wenige, sehr relevante Branchen‑Blogs statt dutzender Verzeichnisse.
        Die Links korrelierten mit stetigen Ranking‑Anstiegen bei Bottom‑of‑Funnel‑Keywords und mehr Demos.
      </p>

      <h3>Action‑Checkliste</h3>
      <ul>
        <li>Erworbene Links nach Kampagne/Taktik taggen.</li>
        <li>Keyword‑Gruppen pro Kampagne in den Folgemonaten beobachten.</li>
        <li>Skalieren, was zuverlässig wirkt – den Rest pausieren.</li>
        <li>Linkprofil regelmäßig auf toxische/irrelevante Domains prüfen.</li>
      </ul>

      <h3>Langfristig denken</h3>
      <p>
        Effektiver Linkaufbau wächst mit der Zeit. Je mehr link‑würdige Assets und Publisher‑Beziehungen, desto
        leichter die nächste Kampagne. Seien Sie Ihrer Nische wirklich nützlich – dann folgen die Links.
      </p>
    `,
    author: "Linkbuilding‑Team",
    date: "30. August 2025",
    readTime: "9 Min. Lesezeit",
    category: "Linkbuilding",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    title: "SEO‑Analytics: Das Wichtige für Wachstum messen",
    excerpt: "Wesentliche Kennzahlen und Reporting‑Strategien, um SEO‑Erfolg zu messen und den ROI zu belegen.",
    content: `
      <p>
        SEO‑Analytics bedeutet, aus Daten Entscheidungen zu machen. Statt in Zahlen zu ertrinken, brauchen Sie
        einen klaren Blick, wie organische Suche Wachstum treibt. Dieser Artikel zeigt Kernmetriken, einfache
        Dashboards und Reporting‑Gewohnheiten, die alle auf Linie halten.
      </p>

      <h2>Wichtige Kennzahlen</h2>
      <ul>
        <li>Organischer Traffic: Wachstum und Qualität überwachen.</li>
        <li>Keyword‑Rankings: Zielkeywords verfolgen.</li>
        <li>Conversion‑Rate: Conversions aus organischem Traffic messen.</li>
        <li>Technischer Zustand: Crawl‑Fehler und Seitengeschwindigkeit überwachen.</li>
      </ul>
      <p>
        Nutzen Sie Google Analytics 4, Search Console und Rank‑Tracking‑Tools. Jedes Tool erzählt einen Teil der
        Geschichte – gemeinsam genutzt entsteht ein vollständiges Bild.
      </p>

      <h3>Einfaches SEO‑Dashboard</h3>
      <p>
        Traffic, Rankings und Conversions in einem Blick zusammenführen. Wenige KPIs hervorheben, die direkt zum
        Umsatz beitragen. Ein gutes Dashboard beantwortet: Wachsen wir? Woher kommt Wachstum? Welche Seiten liefern
        den meisten Wert?
      </p>

      <h3>Fortgeschrittene Analysen</h3>
      <p>
        Ziele tracken, Nutzerverhalten analysieren, CTR aus der Suche beobachten und die Journey bis zur Conversion
        nachzeichnen. Seiten mit viel Traffic, aber wenigen Conversions identifizieren – Top‑Kandidaten für Tests.
      </p>

      <h3>Attribution &amp; Assisted Conversions</h3>
      <p>
        SEO nicht nur am Last‑Click messen. Unterstützte Conversions und Multi‑Touch‑Modelle betrachten – häufig
        bereitet SEO oben und in der Mitte des Funnels andere Kanäle vor, auch wenn der letzte Klick woanders fällt.
      </p>

      <h3>Reporting &amp; Insights</h3>
      <p>
        Automatisierte Reports, Trends/Chancen erkennen, Wettbewerber benchmarken und Daten für Strategie & Planung
        nutzen. Ziel: Von „Was ist passiert?“ zu „Was machen wir als Nächstes?“ kommen.
      </p>

      <h3>Daten in Handlungen verwandeln</h3>
      <p>
        Jeder Bericht endet mit Prioritäten: Was fixen, was skalieren, was testen. So bleibt Analytics eng mit
        Wachstum verknüpft und schafft für Nicht‑Techniker klaren Mehrwert.
      </p>

      <h3>Praxisbeispiel</h3>
      <p>
        Eine E‑Learning‑Plattform hatte starken organischen Traffic, aber schwache Anmeldungen auf Schlüssel‑Seiten.
        Angebot vereinfacht, Formular gestrafft – Conversion‑Rate stieg ohne mehr Traffic. Erkenntnis aus einfachem
        Dashboard, das Traffic und Conversions kombinierte.
      </p>

      <h3>Action‑Checkliste</h3>
      <ul>
        <li>3–5 Kern‑KPIs festlegen und konsequent tracken.</li>
        <li>Dashboards und wiederkehrende Reports statt Einzel‑Screenshots.</li>
        <li>Jede Insight an ein Experiment oder eine Umsetzung koppeln.</li>
        <li>Monatliche Reviews mit Marketing und Führung.</li>
      </ul>

      <h3>Messkultur aufbauen</h3>
      <p>
        Wenn das Team regelmäßig SEO‑Leistung prüft und sich auf relevante Metriken einigt, ist Buy‑in für Initiativen
        leichter. Analytics wird vom Pflichtprogramm zum strategischen Vorteil.
      </p>
    `,
    author: "Analytics‑Team",
    date: "12. August 2025",
    readTime: "8 Min. Lesezeit",
    category: "SEO‑Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  }
];

// English dataset
const blogPosts_en: BlogPost[] = [
  {
    id: 1,
    title: "Master Keyword Research: Find High‑Intent Keywords That Convert",
    excerpt: `A practical workflow to discover profitable, low‑competition keywords aligned with search intent.`,
    content: `
      <p>
        Keyword research is the foundation of SEO. When you understand what your buyers search for, you stop guessing
        and build pages that fit perfectly. This guide shares a repeatable workflow for new niches or refreshes.
      </p>
      <h2>Research Process</h2>
      <ul>
        <li>Seed keywords: Start from core commercial terms.</li>
        <li>Competitor analysis: Extract what already works.</li>
        <li>Long‑tails: Find specific phrases with clear intent.</li>
        <li>Match intent: Map keywords to goals and page types.</li>
      </ul>
      <h3>Tools &amp; Metrics</h3>
      <p>Use Ahrefs/SEMrush/Keyword Planner. Prioritize volume, difficulty, CPC and business value.</p>
    `,
    author: "SEO Team",
    date: "October 15, 2025",
    readTime: "8 min read",
    category: "Keyword Research",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "On‑Page SEO Checklist: Optimize Every Element to Rank",
    excerpt: "Step‑by‑step checklist to improve titles, metas, headings, content and internal links.",
    content: `
      <p>
        On‑page SEO is fully in your control. Structure and presentation directly affect users and rankings.
        Use this quick checklist before publishing important pages.
      </p>
      <h2>Core Elements</h2>
      <ul>
        <li>Titles: Primary keyword within ~60 chars.</li>
        <li>Meta descriptions: Persuasive copy within ~155 chars.</li>
        <li>Heading structure: H1/H2/H3 with variations.</li>
        <li>Internal links: Connect relevant pages logically.</li>
      </ul>
    `,
    author: "Content Team",
    date: "October 8, 2025",
    readTime: "6 min read",
    category: "On‑Page SEO",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Technical SEO Audit: Fix Issues That Kill Rankings",
    excerpt: "Identify and fix technical blockers that hurt crawling, indexing, and page speed.",
    content: `
      <p>
        Technical SEO is your site’s infrastructure. When it breaks, rankings drop even with great content.
        A structured audit reveals bottlenecks and a prioritized roadmap.
      </p>
      <h2>Critical Issues</h2>
      <ul>
        <li>Speed: Improve Core Web Vitals.</li>
        <li>Mobile experience: Ensure perfect responsiveness.</li>
        <li>Crawl errors: Fix 404s and redirect chains.</li>
        <li>Schema: Add structured data.</li>
      </ul>
    `,
    author: "Technical Team",
    date: "September 28, 2025",
    readTime: "10 min read",
    category: "Technical SEO",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Content That Ranks: Write for Users and Search Engines",
    excerpt: "Create compelling, SEO‑optimized content that matches search intent and converts.",
    content: `
      <p>
        Great content solves real problems and makes its value obvious to users and search engines.
        Combine storytelling, clear structure, and SEO best practices.
      </p>
      <h2>Content Strategy</h2>
      <ul>
        <li>Analyze search intent.</li>
        <li>Cover topics comprehensively.</li>
        <li>Integrate keywords naturally.</li>
        <li>Guide engagement with scannable layout.</li>
      </ul>
    `,
    author: "Content Strategy",
    date: "September 15, 2025",
    readTime: "7 min read",
    category: "Content SEO",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Link Building That Works: Earn Quality Backlinks",
    excerpt: "Sustainable tactics to earn authoritative links that lift rankings and referrals.",
    content: `
      <p>
        Modern link building favors usefulness over volume. Create value for publishers you pitch.
      </p>
      <h2>Tactics</h2>
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
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    title: "SEO Analytics: Track What Matters for Growth",
    excerpt: "Essential metrics and reporting habits to prove ROI and drive action.",
    content: `
      <p>
        Analytics should drive decisions. Focus on organic traffic, rankings, conversions and technical health
        in simple dashboards that align the team.
      </p>
      <h2>Key Metrics</h2>
      <ul>
        <li>Organic traffic</li>
        <li>Keyword rankings</li>
        <li>Conversion rate</li>
        <li>Site health (speed, errors)</li>
      </ul>
    `,
    author: "Analytics Team",
    date: "August 12, 2025",
    readTime: "8 min read",
    category: "SEO Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  }
];

const BlogDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { i18n } = useTranslation();
  
  const dataset = i18n.language && i18n.language.startsWith("de") ? blogPosts_de : blogPosts_en;
  const post = dataset.find(p => p.id === Number(id));

  const trafficData = [
    { month: "Jan", clicks: 1200, impressions: 8200 },
    { month: "Feb", clicks: 1500, impressions: 9300 },
    { month: "Mar", clicks: 1800, impressions: 11250 },
    { month: "Apr", clicks: 2100, impressions: 12800 },
    { month: "May", clicks: 2450, impressions: 14200 },
    { month: "Jun", clicks: 2700, impressions: 15600 },
  ];

  const engagementData = [
    { label: "Search", value: 62 },
    { label: "Social", value: 18 },
    { label: "Referral", value: 12 },
    { label: "Direct", value: 8 },
  ];

  const trafficChartConfig = {
    clicks: {
      label: i18n.language?.startsWith("de") ? "Klicks" : "Clicks",
      color: "#38bdf8", // blue
    },
    impressions: {
      label: i18n.language?.startsWith("de") ? "Impressionen" : "Impressions",
      color: "#facc15", // gold
    },
  };

  const engagementChartConfig = {
    value: {
      label: i18n.language?.startsWith("de") ? "Sitzungen" : "Sessions",
      color: "#38bdf8", // blue for secondary charts by default
    },
  };
  const chartSettingsByPost: Record<
    number,
    {
      primaryTitle: string;
      primarySubtitle: string;
      primaryType: "line" | "bar";
      secondaryTitle: string;
      secondarySubtitle: string;
      secondaryType: "bar" | "line" | "pie";
    }
  > = {
    1: {
      primaryTitle: i18n.language?.startsWith("de") ? "Keyword‑Traffic‑Trend" : "Keyword Traffic Trend",
      primarySubtitle: i18n.language?.startsWith("de") ? "Klicks und Impressionen der letzten 6 Monate" : "Clicks and impressions over the last 6 months",
      primaryType: "line",
      secondaryTitle: i18n.language?.startsWith("de") ? "Aufteilung nach Kanälen" : "Channel Breakdown",
      secondarySubtitle: i18n.language?.startsWith("de") ? "Woher der Keyword‑Traffic kommt" : "Where keyword traffic comes from",
      secondaryType: "bar",
    },
    2: {
      primaryTitle: i18n.language?.startsWith("de") ? "On‑Page‑Performance‑Trend" : "On‑Page Performance Trend",
      primarySubtitle: i18n.language?.startsWith("de") ? "Auswirkungen von On‑Page‑Änderungen im Zeitverlauf" : "Impact of on‑page changes over time",
      primaryType: "bar",
      secondaryTitle: i18n.language?.startsWith("de") ? "Engagement nach Quelle" : "Engagement by Source",
      secondarySubtitle: i18n.language?.startsWith("de") ? "Sitzungen nach Akquisekanälen" : "Sessions by acquisition channels",
      secondaryType: "line",
    },
    3: {
      primaryTitle: i18n.language?.startsWith("de") ? "Technische Gesundheit vs. Traffic" : "Technical Health vs. Traffic",
      primarySubtitle: i18n.language?.startsWith("de") ? "Traffic‑Trend nach Behebung technischer Probleme" : "Traffic trend after fixing technical issues",
      primaryType: "bar",
      secondaryTitle: i18n.language?.startsWith("de") ? "Traffic‑Qualität" : "Traffic Quality",
      secondarySubtitle: i18n.language?.startsWith("de") ? "Verteilung der Besuche nach Kanälen" : "Visits by channel",
      secondaryType: "pie",
    },
    4: {
      primaryTitle: i18n.language?.startsWith("de") ? "Sichtbarkeit des Contents" : "Content Visibility",
      primarySubtitle: i18n.language?.startsWith("de") ? "Organische Reichweite für diesen Content‑Cluster" : "Organic reach for this content cluster",
      primaryType: "line",
      secondaryTitle: i18n.language?.startsWith("de") ? "Lesergewinnung" : "Audience Acquisition",
      secondarySubtitle: i18n.language?.startsWith("de") ? "Top‑Quellen für diesen Inhalt" : "Top sources for this content",
      secondaryType: "line",
    },
    5: {
      primaryTitle: i18n.language?.startsWith("de") ? "Auswirkung des Linkaufbaus" : "Impact of Link Building",
      primarySubtitle: i18n.language?.startsWith("de") ? "Traffic‑Veränderung durch neue Backlinks" : "Traffic change from new backlinks",
      primaryType: "bar",
      secondaryTitle: i18n.language?.startsWith("de") ? "Referrer‑Mix" : "Referrer Mix",
      secondarySubtitle: i18n.language?.startsWith("de") ? "Anteil des Traffics nach Quelle" : "Share of traffic by source",
      secondaryType: "bar",
    },
    6: {
      primaryTitle: i18n.language?.startsWith("de") ? "Analytics‑Übersicht" : "Analytics Overview",
      primarySubtitle: i18n.language?.startsWith("de") ? "Leistungsübersicht zu diesem SEO‑Thema" : "Performance overview for this SEO topic",
      primaryType: "line",
      secondaryTitle: i18n.language?.startsWith("de") ? "Sitzungen nach Kanälen" : "Sessions by Channel",
      secondarySubtitle: i18n.language?.startsWith("de") ? "Verteilung der Sitzungen auf Hauptkanäle" : "Distribution of sessions across main channels",
      secondaryType: "pie",
    },
  };

  const chartSettings = post ? chartSettingsByPost[post.id] ?? chartSettingsByPost[1] : chartSettingsByPost[1];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{i18n.language?.startsWith("de") ? "Blogartikel nicht gefunden" : "Blog article not found"}</h1>
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
      
      <motion.section
        className="relative pt-4 sm:pt-6 pb-20 sm:pb-24 md:pb-28 lg:pb-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <motion.button
            onClick={() => navigate('/')}
            className="mt-11 mb-6 sm:mb-8 inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-card/50 backdrop-blur-sm border-2 border-border/50 hover:border-gold/50 rounded-lg sm:rounded-xl text-foreground hover:text-gold transition-all duration-300 font-semibold group shadow-md hover:shadow-lg hover:shadow-gold/10 text-sm sm:text-base"
            whileHover={{ x: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
            <span>{i18n.language?.startsWith("de") ? "Zurück zur Startseite" : "Back to homepage"}</span>
          </motion.button>

          <article className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="relative mb-6 sm:mb-8 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group"
            >
              {/* Outer glow */}
              <div className="pointer-events-none absolute -inset-px rounded-[inherit] bg-gradient-to-r from-sky-500/40 via-gold/40 to-purple-500/40 opacity-40 blur-xl" />

              {/* Image gradient overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),transparent_55%),radial-gradient(circle_at_bottom,_rgba(250,204,21,0.22),transparent_60%)] z-10 mix-blend-soft-light" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent z-10" />

              <img
                src={post.image}
                alt={post.title}
                className="relative z-0 w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover transform-gpu group-hover:scale-110 group-hover:rotate-[0.4deg] transition-transform duration-700 ease-out"
              />
            </motion.div>

            {/* Meta info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 sm:mb-8 lg:mb-10"
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gold/10 text-gold text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6 border border-gold/20">
                {post.category}
              </span>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm md:text-base text-muted-foreground pb-6 sm:pb-8 border-b border-border">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gold/10 flex items-center justify-center">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                  </div>
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gold/10 flex items-center justify-center">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                  </div>
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gold/10 flex items-center justify-center">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>

            {/* Performance graphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-6 sm:mb-8"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-1">
                {i18n.language?.startsWith("de") ? "Performance‑Einblicke zu diesem Artikel" : "Performance insights for this article"}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl">
                {i18n.language?.startsWith("de") ? "Visuelle Übersicht zur Performance dieses Themas in Traffic und Engagement." : "Visual overview of this topic’s performance in traffic and engagement."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-10 sm:mb-12"
            >
              {/* Primary chart card */}
              <div className="bg-card border border-border/60 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm overflow-hidden">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">
                    {chartSettings.primaryTitle}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">
                    {chartSettings.primarySubtitle}
                  </p>
                </div>

                {chartSettings.primaryType === "line" && (
                  <ChartContainer config={trafficChartConfig} className="w-full h-56 sm:h-64 md:h-72">
                    <LineChart data={trafficData} margin={{ top: 16, left: 0, right: 16, bottom: 8 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                      <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                      <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                      <ChartLegend content={<ChartLegendContent />} />
                      <Line
                        type="monotone"
                        dataKey="clicks"
                        stroke={trafficChartConfig.clicks.color}
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 4 }}
                        isAnimationActive
                        animationDuration={800}
                        animationBegin={100}
                      />
                      <Line
                        type="monotone"
                        dataKey="impressions"
                        stroke={trafficChartConfig.impressions.color}
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 4 }}
                        isAnimationActive
                        animationDuration={800}
                        animationBegin={150}
                      />
                    </LineChart>
                  </ChartContainer>
                )}

                {chartSettings.primaryType === "bar" && (
                  <ChartContainer config={trafficChartConfig} className="w-full h-56 sm:h-64 md:h-72">
                    <BarChart data={trafficData} margin={{ top: 16, left: 0, right: 16, bottom: 8 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                      <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                      <ChartTooltip cursor={{ fill: "hsl(var(--muted))" }} content={<ChartTooltipContent />} />
                      <ChartLegend content={<ChartLegendContent />} />
                      <Bar
                        dataKey="clicks"
                        fill={trafficChartConfig.clicks.color}
                        radius={[6, 6, 0, 0]}
                        isAnimationActive
                        animationDuration={800}
                      />
                      <Bar
                        dataKey="impressions"
                        fill={trafficChartConfig.impressions.color}
                        radius={[6, 6, 0, 0]}
                        isAnimationActive
                        animationDuration={800}
                        animationBegin={120}
                      />
                    </BarChart>
                  </ChartContainer>
                )}
              </div>

              {/* Secondary chart card */}
              <div className="bg-card border border-border/60 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm overflow-hidden">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">
                    {chartSettings.secondaryTitle}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">
                    {chartSettings.secondarySubtitle}
                  </p>
                </div>

                {chartSettings.secondaryType === "bar" && (
                  <ChartContainer config={engagementChartConfig} className="w-full h-56 sm:h-64 md:h-72">
                    <BarChart data={engagementData} margin={{ top: 16, left: 0, right: 16, bottom: 8 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis
                        dataKey="label"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                      />
                      <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => `${value}%`}
                      />
                      <ChartTooltip
                        cursor={{ fill: "hsl(var(--muted))" }}
                        content={<ChartTooltipContent labelKey="label" />}
                      />
                      <Bar dataKey="value" fill={engagementChartConfig.value.color} radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ChartContainer>
                )}

                {chartSettings.secondaryType === "line" && (
                  <ChartContainer config={trafficChartConfig} className="w-full h-56 sm:h-64 md:h-72">
                    <LineChart data={trafficData} margin={{ top: 16, left: 0, right: 16, bottom: 8 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                      <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                      <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="clicks"
                        stroke={trafficChartConfig.clicks.color}
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 4 }}
                      />
                    </LineChart>
                  </ChartContainer>
                )}

                {chartSettings.secondaryType === "pie" && (
                  <ChartContainer config={engagementChartConfig} className="w-full h-56 sm:h-64 md:h-72">
                    <PieChart>
                      <Pie
                        data={engagementData}
                        dataKey="value"
                        nameKey="label"
                        innerRadius={40}
                        outerRadius={70}
                        paddingAngle={4}
                      >
                        {engagementData.map((entry, index) => {
                          const colors = [
                            "#38bdf8", // blue
                            "#facc15", // gold
                            "#60a5fa", // lighter blue
                            "#fbbf24", // lighter gold
                          ];
                          return <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />;
                        })}
                      </Pie>
                      <ChartTooltip
                        cursor={{ fill: "hsl(var(--muted))" }}
                        content={<ChartTooltipContent labelKey="label" />}
                      />
                    </PieChart>
                  </ChartContainer>
                )}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mb-10 sm:mb-12 [&_h2]:text-gold [&_h3]:text-gold [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mb-4 [&_h2]:mt-8 [&_h3]:text-xl sm:[&_h3]:text-2xl [&_h3]:font-extrabold [&_h3]:mb-3 [&_h3]:mt-6 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_strong]:text-foreground [&_ul]:text-muted-foreground [&_li]:text-muted-foreground [&_li]:my-1"
            >
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </motion.div>

            {/* Practical summary section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-10 sm:mb-12 rounded-xl sm:rounded-2xl border border-border/60 bg-gradient-to-br from-gold/5 via-card/80 to-sky-500/10 p-5 sm:p-6 md:p-7 shadow-[0_18px_45px_rgba(0,0,0,0.45)]"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gold flex items-center gap-2">
                <span className="inline-block h-6 w-6 rounded-full bg-gold/20 border border-gold/60 shadow-[0_0_20px_rgba(250,204,21,0.6)]" />
                <span>So setzen Sie diesen Artikel praktisch um</span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-5 leading-relaxed">
                Nutzen Sie diesen Artikel als praktisches Playbook – nicht nur Theorie. Starten Sie diese Woche mit
                ein bis zwei schnellen Quick Wins und planen Sie Zeit ein, um die restlichen Schritte umzusetzen – so
                erzielen Sie kontinuierliche Ergebnisse statt kurzfristiger Ausschläge.
              </p>
              <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">Quick Wins für diese Woche</h3>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground space-y-1.5">
                    <li>Wählen Sie eine Seite oder Kampagne mit größtem Potenzial für Verbesserungen.</li>
                    <li>Setzen Sie zwei Änderungen aus diesem Artikel um, die unter 60 Minuten dauern.</li>
                    <li>Legen Sie einfache Vorher/Nachher‑Benchmarks fest (Traffic, Leads, Buchungen).</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">Nächste Schritte für diesen Monat</h3>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground space-y-1.5">
                    <li>Wählen Sie 3–5 verwandte Seiten/Kampagnen zur Optimierung mit diesem Framework.</li>
                    <li>Dokumentieren Sie Änderungen, um Erfolge künftig zu wiederholen.</li>
                    <li>Bewerten Sie am Monatsende die Performance und entscheiden Sie, was skaliert wird.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* CTA at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 sm:mt-16 p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-br from-gold/10 via-gold/5 to-transparent border-2 border-gold/30 rounded-xl sm:rounded-2xl text-center relative overflow-hidden group hover:border-gold/50 transition-all duration-300"
            >
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-foreground">
                  {i18n.language?.startsWith("de") ? "Bereit, Ihr Business zu transformieren?" : "Ready to transform your business?"}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-5 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
                  {i18n.language?.startsWith("de") ? "Buchen Sie eine kostenlose Beratung und erfahren Sie, wie VAs Ihr Wachstum beschleunigen." : "Book a free consultation to see how VAs can accelerate your growth."}
                </p>
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gold text-foreground font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <span className="hidden sm:inline">{i18n.language?.startsWith("de") ? "Kostenlose Beratung buchen →" : "Book a free consultation →"}</span>
                  <span className="sm:hidden">{i18n.language?.startsWith("de") ? "Jetzt starten →" : "Get started →"}</span>
                </button>
              </div>
            </motion.div>

            {/* Related Posts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-border"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-foreground">{i18n.language?.startsWith("de") ? "Weitere Artikel" : "Related Articles"}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {dataset.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
                  <motion.div
                    key={relatedPost.id}
                    onClick={() => navigate(`/blog/${relatedPost.id}`)}
                    className="group cursor-pointer bg-card border border-border/50 rounded-lg sm:rounded-xl overflow-hidden hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10 transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-36 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-gold text-foreground text-xs font-bold rounded-full">{relatedPost.category}</span>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <h4 className="text-base sm:text-lg font-bold mb-2 text-foreground group-hover:text-gold transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">{relatedPost.excerpt}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </article>
        </div>
      </motion.section>
    </div>
  );
};

export default BlogDetail;
