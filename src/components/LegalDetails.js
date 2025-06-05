import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const LegalDetails = () => {
  return (
    <>
      <Helmet>
        <title>Legal Details | European Spirit of Youth Orchestra</title>
        <meta
          name="description"
          content="Legal details for the European Spirit of Youth Orchestra (ESYO): organizer info, address, key personnel, and links to social media profiles."
        />
        <link rel="canonical" href="https://esyo.eu/legaldetails" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Legal Details | European Spirit of Youth Orchestra"
        />
        <meta
          property="og:description"
          content="Legal details for the European Spirit of Youth Orchestra (ESYO): organizer info, address, key personnel, and links to social media profiles."
        />
        <meta property="og:url" content="https://esyo.eu/legaldetails" />
        <meta property="og:image" content="https://esyo.eu/logo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Legal Details | European Spirit of Youth Orchestra"
        />
        <meta
          name="twitter:description"
          content="Legal details for the European Spirit of Youth Orchestra (ESYO): organizer info, address, key personnel, and links to social media profiles."
        />
        <meta name="twitter:image" content="https://esyo.eu/logo.png" />
      </Helmet>

      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div>
            <h2 className="section-title text-white text-3xl">ORGANIZER</h2>
            <p>
              Associazione culturale SGME - Scuola per Giovani Musicisti Europei
              APS <br /> (Cultural association SGME - School for Young European
              Musicians)
            </p>
            <p>
              <span className="fw-bold">Legal Address</span>: I - 34137 Trieste,
              Via San Giacomo in Monte 24 <br />
              <span className="fw-bold">Tax ID</span>: 90049860324
            </p>
            <div className="py-3">
              <p>
                <span className="fw-bold">President</span>: MR Ezio Perillo • <a href="mailto:presidente@esyo.eu" className="justOrange">presidente[at]esyo.eu</a>
                <br />
                <span className="fw-bold">Vice-presidents</span>: MS Barbara Lapornik and MR Franco Sideri <br />
                <span className="fw-bold">Secretary General</span>: Tiziano Simonut • <a href="mailto:info@esyo.eu" className="justOrange">info[at]esyo.eu</a>
                <br />
                <span className="fw-bold">Members of Advisory Board</span>:
                MS Gloria Favret, MS Veronica Logar, MR Lino Roncali, MS Katia Naro and MS Gabriella Valvo
                <br />
                <span className="fw-bold">Communication with the associated members</span>: MR Lino Roncali • <a href="mailto:comunicazione@esyo.eu" className="justOrange">comunicazione[at]esyo.eu</a>
                <br />
                <span className="fw-bold">SGME Secretariat</span>: MR Alessio Glavina • <a href="mailto:segreteria@esyo.eu" className="justOrange">segreteria[at]esyo.eu</a>
              </p>
            </div>
            <div className="py-3">
              <a
                href="/files/Disclaimer.pdf"
                download="Disclaimer"
                className="beCareful"
              >
                <i className="fa fa-file-invoice me-3"></i>Disclaimer
              </a>
            </div>
          </div>
          <h4 className="section-title text-white text-3xl">
            This information also applies to the following social media profiles
          </h4>
          <ul>
            <li>
              Instagram:{" "}
              <Link
                className="beCareful"
                to="https://www.instagram.com/esyo_eu/"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://www.instagram.com/esyo_eu/
              </Link>
            </li>
            <li>
              Youtube{" "}
              <Link
                className="beCareful"
                to="https://www.youtube.com/@esyo"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://www.youtube.com/@esyo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LegalDetails;
