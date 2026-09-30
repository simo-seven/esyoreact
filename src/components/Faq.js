import SEO from "./common/SEO";
import FaqComponent from "react-faq-component";
import data from "../data/faq.json";

const Faq = () => {
  const styles = {
    bgColor: "transparent",
    titleTextColor: "white",
    rowTitleColor: "#f68642",
    rowTitleTextSize: "1.25rem",
    rowContentColor: "rgba(255, 255, 255, 0.85)",
    rowContentTextSize: "1rem",
    arrowColor: "#f68642",
  };

  const config = {
    animate: true,
    tabFocus: true,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (data.rows || []).map((row) => ({
      "@type": "Question",
      "name": row.title,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": row.content,
      },
    })),
  };

  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Find answers to common questions about European Spirit of Youth Orchestra auditions, tours, rehearsals, eligibility, and participation."
        keywords="ESYO FAQ, orchestra questions, youth orchestra audition FAQ, European orchestra FAQ"
        canonical="https://esyo.eu/faq"
        ogType="website"
        schema={faqSchema}
      />

      <div className="container-xxl py-5">
        <div className="container py-4 sm:py-5 px-4 sm:px-lg-5 max-w-4xl mx-auto">
          <div className="bg-[#1f1f1f] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl">
            <FaqComponent data={data} styles={styles} config={config} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
