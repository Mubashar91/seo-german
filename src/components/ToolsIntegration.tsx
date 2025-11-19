import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const tools = [
  { name: "Instagram", category: "Platform" },
  { name: "TikTok", category: "Platform" },
  { name: "LinkedIn", category: "Platform" },
  { name: "Facebook", category: "Platform" },
  { name: "X (Twitter)", category: "Platform" },
  { name: "YouTube", category: "Platform" },
  { name: "Canva", category: "Design" },
  { name: "Adobe Suite", category: "Design" },
  { name: "Figma", category: "Design" },
  { name: "CapCut", category: "Video Editing" },
  { name: "Premiere Pro", category: "Video Editing" },
  { name: "Final Cut Pro", category: "Video Editing" },
  { name: "Hootsuite", category: "Scheduling" },
  { name: "Buffer", category: "Scheduling" },
  { name: "Later", category: "Scheduling" },
  { name: "Sprout Social", category: "Analytics" },
  { name: "Google Analytics", category: "Analytics" },
  { name: "Meta Business Suite", category: "Analytics" }
];

const categories = ["Platform", "Design", "Video Editing", "Scheduling", "Analytics"];

export const ToolsIntegration = () => {
  const { i18n } = useTranslation();
  const isDe = i18n.language && i18n.language.startsWith("de");
  const catLabel = (c: string) => {
    if (!isDe) return c;
    switch (c) {
      case "Platform": return "Plattform";
      case "Design": return "Design";
      case "Video Editing": return "Videoschnitt";
      case "Scheduling": return "Planung";
      case "Analytics": return "Analytik";
      default: return c;
    }
  };
  return (
    <motion.section 
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-gradient-to-b from-background via-muted/30 to-background z-60"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
        <motion.div 
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
            {isDe ? (
              <>Wir arbeiten mit <span className="text-gold">allen großen Plattformen</span></>
            ) : (
              <>We Work With <span className="text-gold">All Major Platforms</span></>
            )}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl px-2">
            {isDe
              ? "Von Content‑Erstellung bis Analytik – wir beherrschen die Tools, die modernes Social Media antreiben."
              : "From content creation to analytics—we're fluent in the tools that power modern social media."}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {tools.slice(0, 18).map((tool, index) => (
              <motion.div 
                key={index}
                className="bg-card border-2 border-border rounded-lg p-3 sm:p-4 text-center hover:border-gold hover:shadow-gold transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
              >
                <p className="text-sm sm:text-base font-semibold text-foreground group-hover:text-gold transition-colors">
                  {tool.name}
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                  {catLabel(tool.category)}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="bg-card border-2 border-gold/30 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-base sm:text-lg text-foreground mb-3 sm:mb-4">
              {isDe ? (
                <>
                  <span className="font-bold text-gold">Sie nutzen eine andere Plattform oder ein anderes Tool?</span> Wir passen uns an.
                </>
              ) : (
                <>
                  <span className="font-bold text-gold">Using a different platform or tool?</span> We adapt.
                </>
              )}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              {isDe
                ? "Unser Team bleibt bei neuen Plattformen und Tools up‑to‑date. Wenn es Teil Ihres Stacks ist, beherrschen wir es."
                : "Our team stays current with emerging platforms and tools. If it's part of your stack, we'll master it."}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};