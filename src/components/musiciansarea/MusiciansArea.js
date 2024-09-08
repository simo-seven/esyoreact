import { Helmet } from "react-helmet-async";
import DownloadButtons from "../reusable/DownloadButtons";
import data from "../../data/musiciansarea/downloadButtons.json";

const MusiciansArea = () => {
  return (
    <>
      <Helmet>
        <title>Musicians Area | European Spirit of Youth Orchestra</title>
        <meta
          name="description"
          content="Finalize your application at Musicians Area and access vital resources for musicians. Stay informed with expert tips and timely updates."
        />
        <link rel="canonical" href="https://esyo.eu/musiciansarea" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Musicians Area | European Spirit of Youth Orchestra"
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
          content="Musicians Area | European Spirit of Youth Orchestra"
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
            <span className="beCareful">Hello and welcome</span> to the
            Musicians Area!
          </p>
          <p className="mt-5 mb-4">
            Here, you will find the documents you need to download, complete,
            sign, and upload using the form we sent you via email. Completing
            these steps is essential to finalize your application and secure
            your spot in the European Spirit of Youth Orchestra.
          </p>
          <DownloadButtons buttons={data} />
          <p className="mt-5">
            If you have any questions, you can reach out to us by replying to
            the email that brought you here or by writing to us at{" "}
            <a href="mailto:orchestra@esyo.eu" className="beCareful">
              orchestra@esyo.eu
            </a>
            . We are here to assist you and ensure a smooth application process.{" "}
          </p>

          <p className="text-center beCareful m-5">
            Do not forget to bring the original documents with you on the next
            concert tour!
          </p>

          <p>
            Errors resulting from misreading or neglecting the official
            documents provided will not be tolerated.
          </p>
        </div>
      </div>
    </>
  );
};

export default MusiciansArea;
