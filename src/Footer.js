import { Link } from "react-router-dom";
import logo from "./img/logos/LogoSmall.png";

const Footer = () => {
  return (
    <div
      className="container-fluid bg-primary text-light footer wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5 px-lg-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-4 font1rem">
            <p className="section-title text-white h5 mb-4">ORGANIZER</p>
            <Link to="/organizer" className="text-white">
              Cultural association SGME <br />
              Scuola per Giovani Musicisti Europei APS
            </Link>
            <p className="section-title text-white h5 mb-4">Address</p>
            <p>
              <i className="fa fa-map-marker-alt me-3"></i>Via San Giacomo in
              Monte 24 <br />I - 34137 Trieste
            </p>
          </div>
          <div className="col-md-6 col-lg-4">
            <p className="section-title text-white h5 mb-4">Information</p>
            <Link className="btn btn-link" to="/contact">
              Contact Us
            </Link>
            <Link className="btn btn-link" to="/legaldetails">
              Legal details
            </Link>
            <Link className="btn btn-link" to="/cookiepolicy">
              Cookie Policy
            </Link>
            <Link className="btn btn-link" to="/pressmedia">
              Press & Media
            </Link>
            <Link className="btn btn-link" to="/privacypolicy">
              Privacy Policy
            </Link>
          </div>
          <div className="col-md-6 col-lg-4 hideOnMobile">
            <Link to="/">
              <img src={logo} alt="Logo ESYO" className="footerlogo" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container px-lg-5">
        <div className="d-flex justify-content-center pt-2 footersocials">
          <a
            className="btn text-white"
            href="https://www.instagram.com/esyo_eu/"
          >
            <i className="fab fa-2x fa-instagram"></i>
          </a>
          <a className="btn text-white" href="https://www.youtube.com/@esyo">
            <i className="fab fa-2x fa-youtube"></i>
          </a>
          <a className="btn text-white" href="mailto:segreteria@esyo.eu">
            <i className="fa-solid fa-2x fa-envelope"></i>
          </a>
        </div>
        <div className="copyright">
          <div className="row">
            <div className="text-center">
              &copy; ESYO 2024, All Right Reserved. <br />
            </div>
            {/* <!-- <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; ESYO 2024, All Right Reserved. <br />

                 This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. 
               <small>
                  Designed By
                  <a className="border-bottom" href="https://htmlcodex.com"
                    >HTML Codex</a
                  >
                </small>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
