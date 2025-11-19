import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.section
        className="relative pt-28 pb-20 sm:pb-24 md:pb-28 lg:pb-32"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t("contact.title")}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-2xl">
            {t("contact.blurb")}
          </p>

          <div className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-sm">
            <form
              className="space-y-5"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input type="hidden" name="access_key" value="8aff1902-6795-4608-ad79-be6702aa7f3a" />
              <input type="hidden" name="to" value="patryk@dononlineagency.com" />
              <input type="hidden" name="subject" value="New contact request - Don Va" />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-foreground">{t("contact.name")}</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold/60"
                    placeholder={t("contact.name_ph")}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-foreground">{t("contact.email")}</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold/60"
                    placeholder={t("contact.email_ph")}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-foreground">{t("contact.vaCount")}</label>
                  <select
                    name="vaCount"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold/60"
                    defaultValue="1-2"
                  >
                    {(
                      t("contact.vaOptions", { returnObjects: true }) as string[]
                    ).map((opt) => (
                      <option key={opt} value={opt.split(" ")[0]}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-foreground">{t("contact.hours")}</label>
                  <select
                    name="hoursPerWeek"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold/60"
                    defaultValue="20-40"
                  >
                    {(
                      t("contact.hoursOptions", { returnObjects: true }) as string[]
                    ).map((opt) => (
                      <option key={opt} value={opt.split(" ")[0]}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-foreground">{t("contact.message")}</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold/60"
                  placeholder={t("contact.message_ph")}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gold text-foreground font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {t("contact.submit")}
              </button>
            </form>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
