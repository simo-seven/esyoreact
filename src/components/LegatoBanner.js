import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const LegatoBanner = () => {
  return (
    <section
      className="container-xxl py-5 bckblack bg-black border-t border-white/10"
      aria-label="LEGATO Project"
    >
      <div className="container py-4 px-4 sm:px-lg-5 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Section subtitle */}
          <p className="section-title text-secondary justify-content-center mb-4">
            <span></span>Cross-Border Initiative<span></span>
          </p>

          {/* Project & Interreg SPF Logos */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-6">
            <img
              src="/img/logos/legato_logo.png"
              alt="LEGATO Project Logo"
              className="h-8 sm:h-10 w-auto object-contain"
              loading="lazy"
            />
            <img
              src="/img/logos/interreg_spf_go2025.png"
              alt="Interreg Italy-Slovenia - Small Project Fund GO! 2025"
              className="w-[250px] sm:w-[280px] md:w-[320px] max-w-full h-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* Project Acronym & Title */}
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
            LEGATO Project
          </h2>

          {/* Regulatory Statement in English */}
          <div className="bg-[#181818] border border-white/10 rounded-2xl p-5 sm:p-6 mb-6 max-w-3xl text-sm sm:text-base leading-relaxed text-gray-300 shadow-lg">
            <p className="mb-0 text-gray-200">
              The <strong>LEGATO</strong> project is funded by the European Union under the <strong>Small Project Fund GO! 2025</strong> of the Interreg VI-A Italy-Slovenia Programme 2021-2027, managed by EGTC GO.
            </p>
          </div>

          {/* Action button to project website */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://legatomusic.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary py-3 px-8 rounded-full font-semibold inline-flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-orange-500/20"
            >
              <span>Visit LEGATO Website</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegatoBanner;
