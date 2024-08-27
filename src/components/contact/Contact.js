import Form from "./Form";
import People from "./People";
import Connect from "./Connect";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - European Spirit of Youth Orchestra</title>
        <meta
          name="description"
          content="Connect with the European Spirit of Youth Orchestra. Reach out for inquiries, collaborations, or to learn more about our vibrant musical community."
        />
        <link rel="canonical" href="/contact" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Contact - European Spirit of Youth Orchestra"
        />
        <meta
          property="og:description"
          content="Connect with the European Spirit of Youth Orchestra. Reach out for inquiries, collaborations, or to learn more about our vibrant musical community."
        />
        <meta property="og:url" content="https://esyo.eu/contact" />
        <meta
          property="og:image"
          content="https://esyo.eu/static/media/LogoSmall.180757e2ef4a35c3599e.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact - European Spirit of Youth Orchestra"
        />
        <meta
          name="twitter:description"
          content="Connect with the European Spirit of Youth Orchestra. Reach out for inquiries, collaborations, or to learn more about our vibrant musical community."
        />
        <meta
          name="twitter:image"
          content="https://esyo.eu/static/media/LogoSmall.180757e2ef4a35c3599e.png"
        />
      </Helmet>

      <Form />
      <People />
      <Connect />
    </>
  );
};

export default Contact;
