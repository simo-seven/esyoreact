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
      </Helmet>
      <Form />
      <People />
      <Connect />
    </>
  );
};

export default Contact;
