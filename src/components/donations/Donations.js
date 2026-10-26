import { useState } from "react";
import DonationsTestimonial from "./Testimonial";
import data from "../../data/testimonials/donationsPage.json";
import SEO from "../common/SEO";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faCheck,
  faHeart,
  faMusic,
  faGraduationCap,
  faPlaneDeparture,
  faAward,
  faShieldAlt,
  faQuoteLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const GIVING_TIERS = [
  {
    id: "50",
    amount: "€50",
    name: "Sheet Music & Scores",
    description:
      "Funds official orchestral study scores, individual parts, and educational materials for an entire instrument section.",
    icon: faMusic,
    badge: "Section Support",
  },
  {
    id: "100",
    amount: "€100",
    name: "Faculty Masterclass",
    description:
      "Provides an intensive, one-on-one coaching session with an internationally acclaimed orchestral master and pedagogue.",
    icon: faGraduationCap,
    badge: "Masterclass",
  },
  {
    id: "250",
    amount: "€250",
    name: "Tour Travel Stipend",
    description:
      "Covers cross-border travel for a talented young musician from an economically disadvantaged European region to reach the tour base.",
    icon: faPlaneDeparture,
    badge: "Travel Grant",
  },
  {
    id: "500",
    amount: "€500",
    name: "Residency & Full Board",
    description:
      "Funds full room, board, and rehearsal facilities for a musician during our intensive 10-day symphonic preparation residency.",
    icon: faHeart,
    badge: "Residency",
  },
  {
    id: "3000",
    amount: "€3,000",
    name: "Full Orchestral Scholarship",
    description:
      "Fully sponsors a young artist through the entire annual season: auditions, masterclasses, residencies, cross-border travel, and all international tour concerts across Europe's leading concert halls. Includes personal named recognition in official tour programs.",
    icon: faAward,
    badge: "Full Season Patron",
    isFeatured: true,
  },
];

const Donations = () => {
  const testimonials = data;
  const [copiedKey, setCopiedKey] = useState("");
  const [selectedTier, setSelectedTier] = useState("3000");

  const currentTier =
    GIVING_TIERS.find((tier) => tier.id === selectedTier) || GIVING_TIERS[4];

  const handleCopy = (text, key) => {
    try {
      if (navigator?.clipboard?.writeText) {
        navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(""), 2200);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const scrollToBank = () => {
    const el = document.getElementById("bank-transfer");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Find Rocco's quote to feature him prominently as an alumni spotlight
  const roccoQuote = testimonials.find((t) => t.id === "6");
  const otherTestimonialsSx = testimonials.filter(
    (t) => t.id !== "6" && t.column === "sx"
  );
  const otherTestimonialsDx = testimonials.filter(
    (t) => t.id !== "6" && t.column === "dx"
  );

  return (
    <>
      <SEO
        title="Donations & Support"
        description="Support the European Spirit of Youth Orchestra. Your tax-deductible donation directly funds scholarships, travel stipends, and masterclasses for gifted young European musicians."
        keywords="donate ESYO, music scholarships Europe, support youth orchestra, cultural donations, ETS APS Trieste"
        canonical="https://esyo.eu/donations"
        ogType="website"
      />

      <section className="container-xxl py-5" aria-label="Donations & Support">
        <div className="container py-4 sm:py-5 px-4 sm:px-lg-5 max-w-5xl mx-auto space-y-12">
          {/* Mission & Impact Narrative */}
          <div className="space-y-4">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Invest in Talent. Inspire Europe.
            </h1>
            <div className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify space-y-4">
              <p>
                Every year, the European Spirit of Youth Orchestra brings together the most promising
                young classical musicians from over 30 European countries. Through intensive orchestral
                residencies, chamber music masterclasses, and international tours, ESYO transforms
                youthful passion into world-class artistry and builds lasting intercultural bridges.
              </p>
              <p>
                We firmly believe that exceptional talent must never be held back by financial hardship.
                Because ESYO is completely tuition-free for accepted musicians, 100% of your donation
                directly funds student scholarships, cross-border travel stipends, instrument maintenance,
                and coaching by celebrated international faculty.
              </p>
            </div>
          </div>

          {/* Impact Stats Strip */}
          <div className="py-6 border-y border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#f68642]">
                30+
              </span>
              <span className="text-gray-300 text-xs sm:text-sm uppercase tracking-wider mt-1 block">
                Years of Cultural Bridges
              </span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#f68642]">
                1,000+
              </span>
              <span className="text-gray-300 text-xs sm:text-sm uppercase tracking-wider mt-1 block">
                Musicians Empowered
              </span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#f68642]">
                30+
              </span>
              <span className="text-gray-300 text-xs sm:text-sm uppercase tracking-wider mt-1 block">
                Nations United
              </span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#f68642]">
                100%
              </span>
              <span className="text-gray-300 text-xs sm:text-sm uppercase tracking-wider mt-1 block">
                Merit-Based & Tuition-Free
              </span>
            </div>
          </div>

          {/* Maestro Riccardo Muti Quote Highlight */}
          <div className="p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/10 relative overflow-hidden">
            <div className="flex items-start gap-4">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="text-[#f68642] text-3xl sm:text-4xl opacity-80 shrink-0 mt-1"
              />
              <div>
                <p className="text-white text-lg sm:text-xl italic font-serif leading-relaxed mb-3">
                  “The youth of the European Spirit of Youth is a reality that needs to be supported,
                  defended, and developed.”
                </p>
                <p className="text-[#f68642] font-bold text-sm uppercase tracking-wider mb-0">
                  Maestro Riccardo Muti &bull; <span className="text-gray-400 font-normal">Conductor</span>
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Giving Tiers: Choose Your Impact */}
          <div className="space-y-6 pt-2">
            <div>
              <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">
                What Your Contribution Achieves
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Select a giving tier to discover how your generosity directly supports our musicians:
              </p>
            </div>

            {/* Tier Buttons */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {GIVING_TIERS.map((tier) => {
                const isSelected = tier.id === selectedTier;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedTier(tier.id)}
                    className={`px-4 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                      isSelected
                        ? "bg-[#f68642] text-black shadow-lg shadow-[#f68642]/20 scale-105"
                        : "bg-black/40 text-gray-200 border border-white/15 hover:border-[#f68642] hover:text-white"
                    }`}
                  >
                    <FontAwesomeIcon icon={tier.icon} className="text-xs sm:text-sm" />
                    <span>{tier.amount}</span>
                    {tier.isFeatured && (
                      <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-black/30 text-black font-extrabold hidden sm:inline-block">
                        Featured
                      </span>
                    )}
                  </button>
                );
              })}
              <button
                type="button"
                onClick={scrollToBank}
                className="px-4 py-2.5 rounded-xl font-medium text-sm sm:text-base bg-black/30 text-gray-300 border border-white/10 hover:border-white/30 hover:text-white transition-all cursor-pointer"
              >
                Custom Amount &rarr;
              </button>
            </div>

            {/* Active Tier Spotlight Card */}
            {currentTier && (
              <div className="p-6 sm:p-8 rounded-2xl bg-black/40 border-2 border-[#f68642]/60 shadow-xl transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#f68642]/10 border border-[#f68642]/30 flex items-center justify-center text-[#f68642] text-xl shrink-0">
                      <FontAwesomeIcon icon={currentTier.icon} />
                    </div>
                    <div>
                      <span className="text-[#f68642] text-xs uppercase tracking-wider font-bold block">
                        {currentTier.badge}
                      </span>
                      <h3 className="text-white text-xl sm:text-2xl font-bold mb-0">
                        {currentTier.name}
                      </h3>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white">
                      {currentTier.amount}
                    </span>
                    <span className="text-gray-400 text-xs block">
                      {currentTier.id === "3000" ? "Full Season Sponsorship" : "Direct Contribution"}
                    </span>
                  </div>
                </div>

                <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6">
                  {currentTier.description}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <span className="text-gray-400 text-xs sm:text-sm">
                    {currentTier.id === "3000"
                      ? "★ Includes named acknowledgement in concert tour programs and seasonal reports."
                      : "★ 100% directly allocated to student support and educational activities."}
                  </span>
                  <button
                    type="button"
                    onClick={scrollToBank}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#f68642] text-black font-bold text-sm hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer shadow-md"
                  >
                    <span>Give via Bank Transfer</span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Frictionless Bank Transfer Section */}
          <div id="bank-transfer" className="pt-6 border-t border-white/10 space-y-6 scroll-mt-24">
            <div>
              <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">
                Bank Transfer Information
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Bank transfer (SEPA) allows 100% of your donation to reach the orchestra without third-party processing fees. Please use the official details below:
              </p>
            </div>

            {/* Credentials Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/15 space-y-6">
              {/* Beneficiary Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6 border-b border-white/10">
                <div>
                  <span className="text-gray-400 text-xs uppercase tracking-wider block font-semibold mb-1">
                    Beneficiary Name
                  </span>
                  <p className="text-white font-bold text-base sm:text-lg mb-0">
                    Associazione Culturale SGME APS
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    Scuola per Giovani Musicisti Europei (ETS APS)
                  </p>
                </div>
                <div>
                  <span className="text-gray-400 text-xs uppercase tracking-wider block font-semibold mb-1">
                    Depository Bank &amp; Branch
                  </span>
                  <p className="text-white font-medium text-sm sm:text-base mb-0">
                    ZKB Credito Cooperativo di Trieste e Gorizia S.C.
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    Via Giosuè Carducci 4, I-34133 Trieste TS, Italy
                  </p>
                </div>
              </div>

              {/* Copyable IBAN */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 rounded-xl bg-black/50 border border-white/10">
                <div className="space-y-0.5">
                  <span className="text-gray-400 text-xs uppercase tracking-wider block font-semibold">
                    IBAN (European Standard Bank Account Number)
                  </span>
                  <span className="font-mono text-base sm:text-lg text-white font-bold select-all break-all tracking-wide">
                    IT11K0892802200010000053126
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy("IT11K0892802200010000053126", "iban")}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 self-start sm:self-auto shrink-0 active:scale-95 cursor-pointer ${
                    copiedKey === "iban"
                      ? "bg-emerald-600 text-white"
                      : "bg-white/10 hover:bg-[#f68642] text-white hover:text-black"
                  }`}
                  title="Copy IBAN"
                >
                  <FontAwesomeIcon icon={copiedKey === "iban" ? faCheck : faCopy} />
                  <span>{copiedKey === "iban" ? "Copied!" : "Copy IBAN"}</span>
                </button>
              </div>

              {/* Copyable BIC / SWIFT & Causale */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center justify-between gap-2 p-3.5 rounded-xl bg-black/50 border border-white/10">
                  <div>
                    <span className="text-gray-400 text-xs uppercase tracking-wider block font-semibold">
                      BIC / SWIFT Code
                    </span>
                    <span className="font-mono text-sm sm:text-base text-white font-bold select-all">
                      CCRTIT2TVOO
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("CCRTIT2TVOO", "bic")}
                    className={`inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all shrink-0 cursor-pointer ${
                      copiedKey === "bic"
                        ? "bg-emerald-600 text-white"
                        : "bg-white/10 hover:bg-[#f68642] text-white hover:text-black"
                    }`}
                  >
                    <FontAwesomeIcon icon={copiedKey === "bic" ? faCheck : faCopy} />
                    <span>{copiedKey === "bic" ? "Copied!" : "Copy"}</span>
                  </button>
                </div>

                <div className="flex items-center justify-between gap-2 p-3.5 rounded-xl bg-black/50 border border-white/10">
                  <div>
                    <span className="text-gray-400 text-xs uppercase tracking-wider block font-semibold">
                      Suggested Reference / Causale
                    </span>
                    <span className="font-mono text-sm sm:text-base text-white font-bold select-all">
                      Donazione liberale ESYO
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("Donazione liberale ESYO", "causale")}
                    className={`inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all shrink-0 cursor-pointer ${
                      copiedKey === "causale"
                        ? "bg-emerald-600 text-white"
                        : "bg-white/10 hover:bg-[#f68642] text-white hover:text-black"
                    }`}
                  >
                    <FontAwesomeIcon icon={copiedKey === "causale" ? faCheck : faCopy} />
                    <span>{copiedKey === "causale" ? "Copied!" : "Copy"}</span>
                  </button>
                </div>
              </div>

              {/* Tax Deductibility Notice */}
              <div className="pt-4 border-t border-white/10 flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faShieldAlt}
                  className="text-[#f68642] text-lg shrink-0 mt-0.5"
                />
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-0">
                  <span className="text-white font-semibold">Tax Deductibility:</span> Associazione Culturale SGME is an officially recognized Italian Third Sector Non-Profit (APS - Ente del Terzo Settore, C.F. 90049860324). Donations are tax-deductible or tax-creditable according to Italian legislation (Art. 83 D.Lgs. 117/2017) and applicable European cross-border philanthropy treaties.
                </p>
              </div>
            </div>
          </div>

          {/* Living Proof: Rocco Alumni Spotlight (Berlin Philharmonic) */}
          {roccoQuote && (
            <div className="pt-6 border-t border-white/10 space-y-6">
              <div>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">
                  From ESYO to the World's Greatest Orchestras
                </h2>
                <p className="text-gray-300 text-sm sm:text-base">
                  When you donate, you directly open doors to historic musical careers. Read how ESYO transformed our members' lives:
                </p>
              </div>

              {/* Spotlight Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-black/40 border border-[#f68642]/50 shadow-xl relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#f68642]/20 text-[#f68642] border border-[#f68642]/40 text-xs font-bold uppercase tracking-wider">
                      Alumni Spotlight
                    </span>
                    <span className="text-white font-bold text-sm sm:text-base">
                      Berlin Philharmonic Orchestra
                    </span>
                  </div>
                  <span className="text-gray-400 text-xs">
                    Room 412, Philharmonie Berlin
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className="text-[#f68642] text-2xl sm:text-3xl opacity-80 shrink-0 mt-1"
                  />
                  <div>
                    <p className="text-gray-100 text-base sm:text-lg italic leading-relaxed mb-4 text-justify">
                      "{roccoQuote.body.trim()}"
                    </p>
                    <p className="text-white font-bold text-sm sm:text-base mb-0">
                      {roccoQuote.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Voices of Former Members & Pedagogues */}
          <div className="pt-2 space-y-6">
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
              What Do Former Members Say?
            </h3>
            <div className="row g-4">
              <div className="col-12 col-lg-6">
                <DonationsTestimonial testimonials={otherTestimonialsSx} />
              </div>
              <div className="col-12 col-lg-6">
                <DonationsTestimonial testimonials={otherTestimonialsDx} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donations;
