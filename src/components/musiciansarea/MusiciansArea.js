import { useState, useEffect } from "react";
import SEO from "../common/SEO";
import DownloadButtons from "../reusable/DownloadButtons";
import docs from "../../data/musiciansarea/downloadButtons.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faUnlock,
  faEye,
  faEyeSlash,
  faSignOutAlt,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const ACCESS_PASSWORD = "esyo2027";
const STORAGE_KEY = "esyo_musicians_auth";

const MusiciansArea = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored === "true") {
        setIsAuthenticated(true);
      }
    } catch (err) {}
  }, []);

  const handleUnlock = (e) => {
    e.preventDefault();
    if (inputPassword.trim().toLowerCase() === ACCESS_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
      try {
        sessionStorage.setItem(STORAGE_KEY, "true");
      } catch (err) {}
    } else {
      setError("Incorrect password. Please verify the code received in your acceptance email.");
    }
  };

  const handleLock = () => {
    setIsAuthenticated(false);
    setInputPassword("");
    setError("");
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch (err) {}
  };

  return (
    <>
      <SEO
        title="Musician's Area"
        description="Access official documentation, application finalization, and payment proofs upload for accepted members of the European Spirit of Youth Orchestra."
        canonical="https://esyo.eu/musiciansarea"
        ogType="website"
      />

      <section className="container-xxl py-5 bckblack" aria-label="Musician's Area">
        <div className="container py-4 sm:py-5 px-4 sm:px-lg-5 max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <p className="section-title text-[#f68642] uppercase tracking-wider text-sm font-semibold mb-2">
              Accepted Members Portal
            </p>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Musician's Area
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify mb-4">
              Welcome to the official musician's area. Please download, complete,
              sign, and upload the required documents to finalize your registration
              and secure your place in the European Spirit of Youth Orchestra.
            </p>
          </div>

          {!isAuthenticated ? (
            /* Password Protection Gate - Clean & Open */
            <div className="py-5 text-center max-w-md mx-auto my-4 border-t border-white/10">
              <div className="mb-3">
                <FontAwesomeIcon icon={faLock} className="text-[#f68642] text-3xl" />
              </div>
              <p className="section-title text-[#f68642] uppercase tracking-wider text-sm font-semibold mb-2 justify-content-center">
                <span></span>Protected Section<span></span>
              </p>
              <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3">
                Passcode Required
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mb-5 leading-relaxed">
                This area is reserved for accepted ESYO orchestra members. Please enter the passcode to access documents and registration forms.
              </p>

              <form onSubmit={handleUnlock} className="max-w-xs mx-auto">
                <div className="relative mb-3">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={inputPassword}
                    onChange={(e) => {
                      setInputPassword(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Enter password..."
                    className="form-control dark-input text-center py-2.5 rounded-full"
                    style={{
                      backgroundColor: "#1a1a1a",
                      color: "#ffffff",
                      borderColor: "rgba(255, 255, 255, 0.3)",
                      caretColor: "#f68642",
                    }}
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>

                {error && (
                  <p className="text-danger text-sm mb-3 font-semibold">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-secondary py-2.5 px-6 rounded-full font-semibold w-100 hover:scale-105 active:scale-95 transition-all duration-200 inline-flex items-center justify-center gap-2"
                >
                  <FontAwesomeIcon icon={faUnlock} />
                  <span>Unlock Musician's Area</span>
                </button>
              </form>
            </div>
          ) : (
            /* Unlocked Flow - Seamless & Open */
            <div className="space-y-8 animate__animated animate__fadeIn">
              {/* Authenticated Status Bar */}
              <div className="d-flex align-items-center justify-content-between py-2 px-3 border-top border-bottom border-white/10 text-sm">
                <span className="text-gray-300 d-flex align-items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[#f68642]" />
                  <span>Authenticated as <strong className="text-white">ESYO Musician</strong></span>
                </span>
                <button
                  onClick={handleLock}
                  className="btn btn-link text-gray-400 p-0 text-decoration-none hover:text-[#f68642] d-flex align-items-center gap-1.5"
                  title="Lock the area"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  <span>Lock Area</span>
                </button>
              </div>

              {/* Step 1 */}
              <section className="py-3" aria-label="Step 1">
                <p className="section-title text-[#f68642] uppercase tracking-wider text-sm font-semibold mb-1">
                  Step 1
                </p>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">
                  Download and Complete Documents
                </h2>
                <p className="text-gray-300 text-base sm:text-lg mb-4 leading-relaxed">
                  Please download, complete, and sign all the following required documents:
                </p>
                <div className="pt-2">
                  <DownloadButtons buttons={docs} />
                </div>
              </section>

              <hr className="border-white/10 my-4" />

              {/* Step 2 */}
              <section className="py-3 text-center sm:text-start" aria-label="Step 2">
                <p className="section-title text-[#f68642] uppercase tracking-wider text-sm font-semibold mb-1">
                  Step 2
                </p>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">
                  Upload Signed Documents
                </h2>
                <p className="text-gray-300 text-base sm:text-lg mb-4 leading-relaxed">
                  Once signed, submit your complete package via the official registration portal.
                </p>
                <div className="mb-3">
                  <a
                    href="https://forms.gle/UfgMCVNqU9SPwqoKA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary py-3 px-8 rounded-full font-semibold inline-block hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    Finalize My Application*
                  </a>
                </div>
                <p className="text-gray-400 text-xs italic max-w-xl">
                  *Please note: All required documents must be uploaded in order to
                  submit the form. Errors resulting from misreading official documents
                  will not be accepted.
                </p>
              </section>

              <hr className="border-white/10 my-4" />

              {/* Step 3 */}
              <section className="py-3 text-center sm:text-start" aria-label="Step 3">
                <p className="section-title text-[#f68642] uppercase tracking-wider text-sm font-semibold mb-1">
                  Step 3
                </p>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">
                  Proof of Payment
                </h2>
                <p className="text-gray-300 text-base sm:text-lg mb-4 leading-relaxed">
                  Please upload your proof of bank transfer here. If you are paying in cash upon arrival in Sežana (Slovenia), you can skip this step.
                </p>
                <div>
                  <a
                    href="https://forms.gle/JGFxgQ1NUv5yxpd86"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary py-3 px-8 rounded-full font-semibold inline-block hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    Upload Proof of Payment
                  </a>
                </div>
              </section>

              <hr className="border-white/10 my-4" />

              {/* Step 4 */}
              <section className="py-3 text-center sm:text-start" aria-label="Step 4">
                <p className="section-title text-[#f68642] uppercase tracking-wider text-sm font-semibold mb-1">
                  Step 4
                </p>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">
                  Bring Original Documents
                </h2>
                <p className="text-gray-200 text-base sm:text-lg mb-2 leading-relaxed">
                  Do not forget to bring the physical, original signed documents with you on the concert tour!
                </p>
                <p className="text-[#f68642] font-semibold text-lg">
                  See you soon &bull; The ESYO Team
                </p>
              </section>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default MusiciansArea;
