import SEO from "../common/SEO";
import DownloadButtons from "../reusable/DownloadButtons";
import docs from "../../data/musiciansarea/downloadButtons.json";

const MusiciansArea = () => {
  return (
    <>
      <SEO
        title="Musician's Area"
        description="Access official documentation, application finalization, and payment proofs upload for accepted members of the European Spirit of Youth Orchestra."
        canonical="https://esyo.eu/musiciansarea"
        ogType="website"
      />

      <div className="container-xxl py-5">
        <div className="container py-4 sm:py-5 px-4 sm:px-lg-5 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3">
              Musician's Area
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto text-justify sm:text-center leading-relaxed">
              Welcome to the official musician's area. Please download, complete,
              sign, and upload the required documents to finalize your registration
              and secure your place in the European Spirit of Youth Orchestra.
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-[#1f1f1f] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg">
              <span className="inline-block px-3 py-1 rounded-full bg-[#f68642] text-black text-xs font-bold uppercase tracking-wider mb-2">
                Step 1
              </span>
              <h2 className="text-white text-xl sm:text-2xl font-bold mb-3">
                Download and Complete Documents
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                Please download, complete, and sign all the following required documents:
              </p>
              <DownloadButtons buttons={docs} />
            </div>

            {/* Step 2 */}
            <div className="bg-[#1f1f1f] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-[#f68642] text-black text-xs font-bold uppercase tracking-wider mb-2">
                Step 2
              </span>
              <h2 className="text-white text-xl sm:text-2xl font-bold mb-3">
                Upload Signed Documents
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-xl mx-auto leading-relaxed">
                Once signed, submit your complete package via the official registration portal.
              </p>
              <div className="mb-4">
                <a
                  href="https://forms.gle/UfgMCVNqU9SPwqoKA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary py-3 px-8 rounded-full font-bold inline-block hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg"
                >
                  Finalize My Application*
                </a>
              </div>
              <p className="text-gray-400 text-xs italic max-w-xl mx-auto">
                *Please note: All required documents must be uploaded in order to
                submit the form. Errors resulting from misreading official documents
                will not be accepted.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#1f1f1f] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-[#f68642] text-black text-xs font-bold uppercase tracking-wider mb-2">
                Step 3
              </span>
              <h2 className="text-white text-xl sm:text-2xl font-bold mb-3">
                Proof of Payment
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-xl mx-auto leading-relaxed">
                Please upload your proof of bank transfer here. If you are paying in cash upon arrival in Sežana (Slovenia), you can skip this step.
              </p>
              <div>
                <a
                  href="https://forms.gle/JGFxgQ1NUv5yxpd86"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary py-3 px-8 rounded-full font-bold inline-block hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg"
                >
                  Upload Proof of Payment
                </a>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-[#1f1f1f] border border-[#f68642]/40 rounded-2xl p-6 sm:p-8 shadow-lg text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-[#f68642] text-black text-xs font-bold uppercase tracking-wider mb-2">
                Step 4
              </span>
              <h2 className="text-white text-xl sm:text-2xl font-bold mb-3">
                Bring Original Documents
              </h2>
              <p className="text-gray-200 text-base font-medium max-w-xl mx-auto mb-4">
                Do not forget to bring the physical, original signed documents with you on the concert tour!
              </p>
              <p className="text-[#f68642] font-semibold text-base">
                See you soon &bull; The ESYO Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusiciansArea;
