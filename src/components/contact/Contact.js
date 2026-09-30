import Form from "./Form";
import People from "./People";
import Connect from "./Connect";
import SEO from "../common/SEO";

const Contact = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact European Spirit of Youth Orchestra",
    "description": "Connect with the European Spirit of Youth Orchestra. Inquiries, collaborations, and official secretariat.",
    "url": "https://esyo.eu/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "European Spirit of Youth Orchestra",
      "email": "segreteria@esyo.eu",
      "telephone": "+390403720448",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via San Giacomo in Monte 24",
        "addressLocality": "Trieste",
        "postalCode": "34137",
        "addressCountry": "IT"
      }
    }
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Connect with the European Spirit of Youth Orchestra. Reach out for inquiries, partnerships, auditions, or general information."
        keywords="contact ESYO, European Spirit of Youth Orchestra contact, orchestra email, Trieste music association"
        canonical="https://esyo.eu/contact"
        ogType="website"
        schema={schema}
      />
      <Form />
      <People />
      <Connect />
    </>
  );
};

export default Contact;
