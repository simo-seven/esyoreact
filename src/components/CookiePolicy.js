import { Link } from "react-router-dom";
import SEO from "./common/SEO";

const CookiePolicy = () => {
  return (
    <>
      <SEO
        title="Cookie Policy"
        description="Official Cookie Policy for www.esyo.eu explaining the types of technical, analytical, and preference cookies used on our website."
        canonical="https://esyo.eu/cookiepolicy"
        ogType="website"
      />

      <div className="container-xxl py-5">
        <div className="container py-4 sm:py-5 px-4 sm:px-lg-5 max-w-4xl mx-auto">
          <div className="bg-[#1f1f1f] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl space-y-6">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
              The specific purpose of this notice is to explain the types of cookies
              and the way they are used, and to provide information on how to refuse
              or delete cookies on the website www.esyo.eu (hereinafter, the
              "website").
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
              The data controller is the Cultural Association Scuola per Giovani
              Musicisti Europei (SGME). The data controller processes the personal data of
              users collected and processed with cookies through the website in
              order to ensure an optimal browsing experience. We use cookies to
              provide essential features and to analyse our traffic anonymously.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
              Cookies are small text files that can be used by websites to make the
              user experience more efficient.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
              The EU law states that we may store cookies on your device if they are
              strictly necessary for the operation of this website. For all other
              types of cookies we need your permission. Find out more about who we
              are, how you can contact us and how we process personal data in our{" "}
              <Link to="/privacypolicy" className="text-[#f68642] underline hover:text-white">
                Privacy Policy
              </Link>.
            </p>

            <div className="pt-6 border-t border-white/10">
              <h2 className="text-[#f68642] text-2xl font-bold mb-4">Types of Cookies</h2>

              <h3 className="text-white text-lg font-semibold mt-4 mb-2">Technical Cookies</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
                Technical cookies are necessary cookies that help make the website
                usable by enabling basic functionality such as page navigation and
                access to secure areas of the website. The website cannot function
                properly without these cookies.
              </p>

              <h3 className="text-white text-lg font-semibold mt-6 mb-2">Third Party Analytical Cookies</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
                These are cookies set by a service other than the one you are
                currently visiting. They are used to anonymously analyse and monitor
                how users use the website (e.g. number of accesses and pages visited),
                for statistical purposes and to improve the Site in terms of operation
                and navigation. These types of cookies are under the direct and
                exclusive responsibility of the third party. <br />
                The User is informed that this Site uses Google Tag Manager and
                analytical cookies from Google Analytics to collect and analyse
                anonymized statistical information about visits to the Site. <br />
                Further information on privacy can be found on Google's website at{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[#f68642] underline hover:text-white"
                >
                  this link
                </a>.
              </p>

              <h3 className="text-white text-lg font-semibold mt-6 mb-2">Preferences</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
                Preference cookies allow the website to store information that
                influences its behaviour or appearance, such as your preferred language.
              </p>

              <h3 className="text-white text-lg font-semibold mt-6 mb-2">Statistics</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
                Statistics cookies help website owners understand how visitors
                interact with the site by collecting and transmitting information
                anonymously.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;
