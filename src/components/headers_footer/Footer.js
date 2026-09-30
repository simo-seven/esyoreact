import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as faEnvelopeSolid, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import ScrollToTopLink from "../reusable/ScrollToTopLink";
import logo from "../../LogoSmall.png";

const Footer = () => {
  return (
    <footer
      className="container-fluid bg-[#141414] border-t border-white/10 text-light footer mt-0"
      aria-label="Site Footer"
    >
      <div className="container py-5 px-4 sm:px-lg-5">
        <div className="row g-5">
          <div className="col-12 col-md-6 col-lg-4">
            <p className="text-[#f68642] uppercase tracking-wider text-sm font-bold mb-4">
              ORGANIZER
            </p>
            <ScrollToTopLink
              to="/organizer"
              className="text-gray-300 hover:text-[#f68642] transition-colors text-sm leading-relaxed block mb-4"
            >
              Cultural association SGME <br />
              Scuola per Giovani Musicisti Europei APS <br />
              P.IVA: 01451640328
            </ScrollToTopLink>
            <p className="text-[#f68642] uppercase tracking-wider text-sm font-bold mb-2">
              Address
            </p>
            <p className="text-gray-300 text-sm flex items-start gap-2.5">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#f68642] mt-1" />
              <span>
                Via San Giacomo in Monte 24 <br />
                I - 34137 Trieste, Italy
              </span>
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <p className="text-[#f68642] uppercase tracking-wider text-sm font-bold mb-4">
              Information
            </p>
            <div className="flex flex-col space-y-2">
              <ScrollToTopLink
                className="text-gray-300 hover:text-[#f68642] transition-colors text-sm"
                to="/publicontributions"
              >
                Public Contributions
              </ScrollToTopLink>
              <ScrollToTopLink
                className="text-gray-300 hover:text-[#f68642] transition-colors text-sm"
                to="/legaldetails"
              >
                Legal Details
              </ScrollToTopLink>
              <ScrollToTopLink
                className="text-gray-300 hover:text-[#f68642] transition-colors text-sm"
                to="/cookiepolicy"
              >
                Cookie Policy
              </ScrollToTopLink>
              <ScrollToTopLink
                className="text-gray-300 hover:text-[#f68642] transition-colors text-sm"
                to="/privacypolicy"
              >
                Privacy Policy
              </ScrollToTopLink>
              <ScrollToTopLink
                className="text-gray-300 hover:text-[#f68642] transition-colors text-sm"
                to="/donations"
              >
                Donations
              </ScrollToTopLink>
            </div>
          </div>

          <div className="col-12 col-lg-4 text-center sm:text-start flex flex-col items-center sm:items-start justify-center">
            <ScrollToTopLink to="/" aria-label="ESYO Home">
              <img
                src={logo}
                alt="European Spirit of Youth Orchestra Logo"
                className="h-24 sm:h-28 md:h-32 w-auto object-contain hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </ScrollToTopLink>
          </div>
        </div>
      </div>

      <div className="container px-4 sm:px-lg-5 pb-6">
        <div className="flex justify-center items-center gap-4 py-3 border-t border-white/10">
          <a
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#f68642] flex items-center justify-center text-white hover:text-black transition-all duration-200"
            href="https://www.instagram.com/esyo_eu/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="ESYO Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-lg" />
          </a>
          <a
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#f68642] flex items-center justify-center text-white hover:text-black transition-all duration-200"
            href="https://www.youtube.com/@esyo"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="ESYO YouTube"
          >
            <FontAwesomeIcon icon={faYoutube} className="text-lg" />
          </a>
          <a
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#f68642] flex items-center justify-center text-white hover:text-black transition-all duration-200"
            href="mailto:segreteria@esyo.eu"
            aria-label="Contact ESYO via email"
          >
            <FontAwesomeIcon icon={faEnvelopeSolid} className="text-lg" />
          </a>
        </div>
        <div className="text-center pt-2 text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} European Spirit of Youth Orchestra (ESYO). All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
