import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import DownloadButtons from "../reusable/DownloadButtons";
import docs from "../../data/musiciansarea/downloadButtons.json";

const MusiciansArea = () => {
  return (
    <>
      <Helmet>
        <title>Musician's Area | European Spirit of Youth Orchestra</title>
        <meta
          name="description"
          content="Finalize your application at Musician's Area and access vital resources for musicians. Stay informed with expert tips and timely updates."
        />
        <link rel="canonical" href="https://esyo.eu/musiciansarea" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Musician's Area | European Spirit of Youth Orchestra"
        />
        <meta
          property="og:description"
          content="Finalize your application at Musicians Area and access vital resources for musicians. Stay informed with expert tips and timely updates."
        />
        <meta property="og:url" content="https://esyo.eu/" />
        <meta property="og:image" content="https://esyo.eu/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Musician's Area | European Spirit of Youth Orchestra"
        />
        <meta
          name="twitter:description"
          content="Finalize your application at Musicians Area and access vital resources for musicians. Stay informed with expert tips and timely updates."
        />
        <meta name="twitter:image" content="https://esyo.eu/logo.png" />
      </Helmet>

      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <p>
            Hello and welcome to the
            <span className="beCareful"> Musician's Area</span>!
          </p>
          <p className="mt-5 text-justify">
            On this page, you will find all the documents you need to{" "}
            <span className="beCareful">
              download, complete, sign, and upload
            </span>
            . Completing these steps is essential to finalize your application
            and secure your place in the European Spirit of Youth Orchestra. The
            deadline for submitting all forms is{" "}
            <span className="beCareful">
              November 11<sup>th</sup>, 2025 at 12.00pm CET
            </span>
            .
          </p>
          {/* <p className="text-justify">
            If you have any questions, you can reach out to us by replying to
            the email that brought you here or by writing to us at{" "}
            <a href="mailto:orchestra@esyo.eu" className="beCareful">
              orchestra@esyo.eu
            </a>
            . We are here to assist you and ensure a smooth application process.{" "}
          </p> */}

          <h3 className="mt-5 text-white text-3xl">STEP 1</h3>
          <p className="mt-2 text-justify">
            Please download, complete, and sign the following documents.
          </p>
          <DownloadButtons buttons={docs} />

          <h3 className="mt-5 text-white text-3xl">STEP 2</h3>
          <p className="mt-2 text-justify">
            It’s now time to upload all the completed and signed documents!
          </p>
          <div className="row justify-content-center mb-5">
            <div className=" text-center">
              <Link
                to="https://forms.gle/UfgMCVNqU9SPwqoKA"
                className="btn btn-secondary py-3 px-5 rounded-full me-3 animated slideInRight wow joinNow"
              >
                Finalize my application*
              </Link>
            </div>
          </div>
          <i className="text-justify">
            *Please note: All required documents must be uploaded in order to
            submit the form. All fields are mandatory. Errors resulting from
            misreading or disregarding the official documents provided will not
            be accepted.
          </i>

          <h3 className="mt-5 text-white text-3xl">STEP 3</h3>
          <p className="mt-2 text-justify">
            Please upload the proofs of payment here. If you are paying cash at your arrival in Sežana (SLO), you can skip this step.
          </p>
          <div className="row justify-content-center">
            <div className=" text-center">
              <Link
                to="https://forms.gle/JGFxgQ1NUv5yxpd86"
                className="btn btn-secondary py-3 px-5 rounded-full me-3 animated slideInRight wow joinNow"
              >
                Upload the proofs of payment
              </Link>
            </div>

            <h3 className="mt-5 text-white text-3xl">STEP 4</h3>
            <p className="mt-2 text-justify beCareful mb-5">
              Do not forget to bring the original documents with you on the next
              concert tour!
            </p>

            <i className="mt-5">
              See you soon, <br />
              The ESYO team
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusiciansArea;
