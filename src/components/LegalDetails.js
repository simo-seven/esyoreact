import SEO from "./common/SEO";

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

      <div className="container-xxl py-5">
        <div className="container py-4 sm:py-5 px-4 sm:px-lg-5 max-w-4xl mx-auto">
          <div className="bg-[#1f1f1f] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl space-y-6">
            <div>
              <h2 className="text-[#f68642] text-xl font-bold uppercase tracking-wider mb-2">
                Organizer
              </h2>
              <p className="text-white text-lg font-medium">
                Associazione culturale SGME - Scuola per Giovani Musicisti Europei APS <br />
                <span className="text-gray-400 text-sm">
                  (Cultural association SGME - School for Young European Musicians)
                </span>
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-gray-300">
                <span className="text-white font-semibold">Legal Address:</span> Via San Giacomo in Monte 24, I-34137 Trieste, Italy <br />
                <span className="text-white font-semibold">Tax ID / Codice Fiscale:</span> 90049860324 <br />
                <span className="text-white font-semibold">VAT / Partita IVA:</span> 01451640328
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2 text-gray-300">
              <p>
                <span className="text-white font-semibold">President:</span> Ezio Perillo &bull;{" "}
                <a href="mailto:presidente@esyo.eu" className="text-[#f68642] hover:underline">
                  presidente[at]esyo.eu
                </a>
              </p>
              <p>
                <span className="text-white font-semibold">Vice-Presidents:</span> Barbara Lapornik and Franco Sideri
              </p>
              <p>
                <span className="text-white font-semibold">Secretary General:</span> Tiziano Simonut &bull;{" "}
                <a href="mailto:info@esyo.eu" className="text-[#f68642] hover:underline">
                  info[at]esyo.eu
                </a>
              </p>
              <p>
                <span className="text-white font-semibold">Members of Advisory Board:</span> Gloria Favret, Veronica Logar, Lino Roncali, Katia Naro, Gabriella Valvo
              </p>
              <p>
                <span className="text-white font-semibold">Communication:</span> Lino Roncali &bull;{" "}
                <a href="mailto:comunicazione@esyo.eu" className="text-[#f68642] hover:underline">
                  comunicazione[at]esyo.eu
                </a>
              </p>
              <p>
                <span className="text-white font-semibold">SGME Secretariat:</span> Alessio Glavina &bull;{" "}
                <a href="mailto:segreteria@esyo.eu" className="text-[#f68642] hover:underline">
                  segreteria[at]esyo.eu
                </a>
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href="/files/Disclaimer.pdf"
                download="Disclaimer"
                className="inline-flex items-center gap-2 text-[#f68642] hover:text-white font-semibold transition-colors duration-200"
              >
                <span>&darr; Download Official Disclaimer (PDF)</span>
              </a>
            </div>

            <div className="pt-4 border-t border-white/10">
              <h3 className="text-white text-lg font-bold mb-3">
                Official Social Media Profiles
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-gray-400">Instagram: </span>
                  <a
                    className="text-[#f68642] hover:underline"
                    href="https://www.instagram.com/esyo_eu/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    https://www.instagram.com/esyo_eu/
                  </a>
                </li>
                <li>
                  <span className="text-gray-400">YouTube: </span>
                  <a
                    className="text-[#f68642] hover:underline"
                    href="https://www.youtube.com/@esyo"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    https://www.youtube.com/@esyo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalDetails;
