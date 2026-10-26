import { Link } from "react-router-dom";
import SEO from "./common/SEO";

const CookiePolicy = () => {
  return (
    <>
      <SEO
        title="Cookie Policy"
        description="Official Cookie Policy for www.esyo.eu explaining the types of technical, analytical, and preference cookies used on our website."
        keywords="ESYO cookie policy, cookies disclosure, GDPR cookie consent, technical cookies"
        canonical="https://esyo.eu/cookiepolicy"
        ogType="website"
      />

      <section className="container-xxl py-5" aria-label="Cookie Policy">
        <div className="container py-4 sm:py-5 px-4 sm:px-lg-5 max-w-4xl mx-auto space-y-6 text-gray-300 text-base leading-relaxed text-justify">
          <p>
            The specific purpose of this notice is to explain the types of cookies and the way they are used, and to provide information on how to refuse or delete cookies on the website <span className="text-white font-medium">www.esyo.eu</span> (hereinafter, the "website").
          </p>
          <p>
            The data controller is the Cultural Association Scuola per Giovani Musicisti Europei (SGME). The data controller processes personal data collected through cookies to ensure an optimal browsing experience, essential features, and anonymous statistical analytics.
          </p>
          <p>
            Cookies are small text files that are stored on your device by websites to make the user experience more efficient. European regulations state that we may store cookies on your device if they are strictly necessary for the operation of this website. For all other types of cookies, your permission is required. Find out more in our{" "}
            <Link to="/privacypolicy" className="text-[#f68642] underline hover:text-white font-medium">
              Privacy Policy
            </Link>.
          </p>

          <div className="pt-6 border-t border-white/10">
            <h2 className="text-[#f68642] text-xl font-bold uppercase tracking-wider mb-4">
              Types of Cookies Used
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-white text-lg font-bold mb-2">
                  Technical Cookies (Strictly Necessary)
                </h3>
                <p className="leading-relaxed">
                  Technical cookies are necessary cookies that help make the website usable by enabling basic functionality such as page navigation, media playback, and secure access. The website cannot function properly without these cookies.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h3 className="text-white text-lg font-bold mb-2">
                  Third-Party Analytical Cookies
                </h3>
                <p className="leading-relaxed mb-2">
                  These cookies are set by third-party services to anonymously monitor how visitors navigate the website (e.g., number of accesses, page visits, and performance metrics) for statistical and site enhancement purposes.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-0">
                  This website utilizes Google Tag Manager and Google Analytics with IP anonymization. Further privacy details can be found on Google's privacy portal at{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-[#f68642] underline hover:text-white"
                  >
                    policies.google.com/privacy
                  </a>.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h3 className="text-white text-lg font-bold mb-2">
                  Preferences & Statistics
                </h3>
                <p className="leading-relaxed mb-0">
                  Preference cookies enable the website to remember user preferences (such as language or consent status). Statistical cookies collect aggregated, anonymized insights to help us continuously improve the orchestral platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CookiePolicy;
