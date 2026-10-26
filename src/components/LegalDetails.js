import SEO from "./common/SEO";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const LegalDetails = () => {
  return (
    <>
      <SEO
        title="Legal Details & Impressum"
        description="Official legal details and impressum for the European Spirit of Youth Orchestra (ESYO): organizer information, address, tax identification, and governance."
        keywords="ESYO legal details, impressum, SGME APS Trieste, fiscal code"
        canonical="https://esyo.eu/legaldetails"
        ogType="website"
      />

      <section className="container-xxl py-5" aria-label="Legal Details">
        <div className="container py-4 sm:py-5 px-4 sm:px-lg-5 max-w-4xl mx-auto space-y-6 text-gray-300 text-base leading-relaxed">
          {/* Organizer */}
          <div>
            <h2 className="text-[#f68642] text-xl font-bold uppercase tracking-wider mb-2">
              Organizer
            </h2>
            <p className="text-white text-xl font-bold mb-1">
              Associazione culturale SGME - Scuola per Giovani Musicisti Europei APS
            </p>
            <p className="text-gray-400 text-sm">
              (Cultural association SGME - School for Young European Musicians)
            </p>
          </div>

          {/* Legal Address & Tax Information */}
          <div className="pt-6 border-t border-white/10 space-y-2">
            <h3 className="text-white text-lg font-bold mb-3">
              Headquarters & Legal Registration
            </h3>
            <p className="mb-1">
              <span className="text-white font-semibold">Legal Address:</span> Via San Giacomo in Monte 24, I-34137 Trieste, Italy
            </p>
            <p className="mb-1">
              <span className="text-white font-semibold">Tax ID / Codice Fiscale:</span>{" "}
              <span className="font-mono text-white select-all">90049860324</span>
            </p>
            <p className="mb-0">
              <span className="text-white font-semibold">VAT / Partita IVA:</span>{" "}
              <span className="font-mono text-white select-all">01451640328</span>
            </p>
          </div>

          {/* Governance & Leadership */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            <h3 className="text-white text-lg font-bold mb-3">
              Governance & Leadership
            </h3>
            <p>
              <span className="text-white font-semibold">President:</span> Ezio Perillo &bull;{" "}
              <a href="mailto:presidente@esyo.eu" className="text-[#f68642] hover:underline inline-flex items-center gap-1">
                <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
                <span>presidente@esyo.eu</span>
              </a>
            </p>
            <p>
              <span className="text-white font-semibold">Vice-Presidents:</span> Barbara Lapornik and Franco Sideri
            </p>
            <p>
              <span className="text-white font-semibold">Secretary General:</span> Tiziano Simonut &bull;{" "}
              <a href="mailto:info@esyo.eu" className="text-[#f68642] hover:underline inline-flex items-center gap-1">
                <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
                <span>info@esyo.eu</span>
              </a>
            </p>
            <p>
              <span className="text-white font-semibold">Members of Advisory Board:</span> Gloria Favret, Veronica Logar, Lino Roncali, Katia Naro, Gabriella Valvo
            </p>
            <p>
              <span className="text-white font-semibold">Communication:</span> Lino Roncali &bull;{" "}
              <a href="mailto:comunicazione@esyo.eu" className="text-[#f68642] hover:underline inline-flex items-center gap-1">
                <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
                <span>comunicazione@esyo.eu</span>
              </a>
            </p>
            <p>
              <span className="text-white font-semibold">SGME Secretariat:</span> Alessio Glavina &bull;{" "}
              <a href="mailto:segreteria@esyo.eu" className="text-[#f68642] hover:underline inline-flex items-center gap-1">
                <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
                <span>segreteria@esyo.eu</span>
              </a>
            </p>
          </div>

          {/* Official Disclaimer */}
          <div className="pt-6 border-t border-white/10">
            <a
              href="/files/Disclaimer.pdf"
              download="Disclaimer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/10 hover:bg-[#f68642] text-white hover:text-black font-semibold border border-white/15 transition-all duration-200 shadow-sm active:scale-95"
            >
              <FontAwesomeIcon icon={faFilePdf} className="text-lg text-[#f68642]" />
              <span>Download Official Disclaimer (PDF)</span>
            </a>
          </div>

          {/* Social Profiles */}
          <div className="pt-6 border-t border-white/10">
            <h3 className="text-white text-lg font-bold mb-3">
              Official Social Media Channels
            </h3>
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                className="px-4 py-2 rounded-full bg-white/5 text-gray-300 hover:text-white border border-white/10 hover:border-[#f68642]/40 transition-all duration-200"
                href="https://www.instagram.com/esyo_eu/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="text-gray-400 font-normal">Instagram: </span>
                <span className="text-[#f68642] font-semibold">@esyo_eu</span>
              </a>
              <a
                className="px-4 py-2 rounded-full bg-white/5 text-gray-300 hover:text-white border border-white/10 hover:border-[#f68642]/40 transition-all duration-200"
                href="https://www.youtube.com/@esyo"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="text-gray-400 font-normal">YouTube: </span>
                <span className="text-[#f68642] font-semibold">@esyo</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalDetails;
