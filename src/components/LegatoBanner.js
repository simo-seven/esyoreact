import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const LegatoBanner = () => {
  return (
    <section
      className="container-xxl py-5 bckblack bg-black border-t border-white/10"
      aria-label="Progetto LEGATO"
    >
      <div className="container py-4 px-4 sm:px-lg-5 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Section subtitle */}
          <p className="section-title text-secondary justify-content-center mb-4">
            <span></span>Progetto Finanziato • Financiran Projekt<span></span>
          </p>

          {/* Project & Interreg SPF Logos */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-6">
            <img
              src="/img/logos/legato_logo.png"
              alt="Logo Progetto LEGATO"
              className="h-8 sm:h-10 w-auto object-contain"
              loading="lazy"
            />
            <img
              src="/img/logos/interreg_spf_go2025.png"
              alt="Interreg Italia-Slovenia - Fondo per piccoli progetti GO! 2025 / Sklad za male projekte GO! 2025"
              className="w-[250px] sm:w-[280px] md:w-[320px] max-w-full h-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* Project Acronym & Title */}
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
            Progetto LEGATO
          </h2>

          {/* Mandatory Regulatory Sentences (IT & SLO) */}
          <div className="bg-[#181818] border border-white/10 rounded-2xl p-5 sm:p-6 mb-6 max-w-3xl text-sm sm:text-base leading-relaxed text-gray-300 space-y-3 shadow-lg">
            <p className="mb-0 text-gray-200">
              Il progetto <strong>LEGATO</strong> è finanziato dall’Unione europea nell’ambito del <strong>Fondo per piccoli progetti GO! 2025</strong> del Programma Interreg VI-A Italia-Slovenia 2021-2027, gestito dal GECT GO.
            </p>
            <p className="mb-0 text-gray-400 border-t border-white/5 pt-3 italic">
              Projekt <strong>LEGATO</strong> financira Evropska unija iz <strong>Sklada za male projekte GO! 2025</strong> Programa Interreg VI-A Italija-Slovenija 2021-2027, ki ga upravlja EZTS GO.
            </p>
          </div>

          {/* Action button to project website */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
            <a
              href="https://legatomusic.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary py-3 px-8 rounded-full font-semibold inline-flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-orange-500/20"
            >
              <span>Visita il sito LEGATO</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>

          {/* Mandatory links to ita-slo.eu and euro-go.eu/spf */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400 mt-2">
            <a
              href="https://www.ita-slo.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f68642] hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span>www.ita-slo.eu</span>
              <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[10px]" />
            </a>
            <span>•</span>
            <a
              href="https://euro-go.eu/spf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f68642] hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span>www.euro-go.eu/spf</span>
              <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[10px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegatoBanner;
