import Form from "./Form";
import SEO from "../common/SEO";
import people from "../../data/contactPeople.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

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

      <section className="container-xxl py-5" aria-label="Contact Information and Form">
        <div className="container py-4 sm:py-5 px-4 sm:px-lg-5 max-w-5xl mx-auto space-y-10">
          <div className="row g-5 align-items-stretch">
            {/* Left Column: Direct Inquiries & Team */}
            <div className="col-12 col-lg-7 space-y-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/10 shadow-lg">
                <Form />
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="col-12 col-lg-5 d-flex flex-column justify-content-center">
              {/* Team Members*/}
              <div className="pt-6 border-white/10">
                <h2 className="text-white text-xl sm:text-2xl font-bold mb-4">
                  Key Contacts
                </h2>
                <div className="space-y-3">
                  {people.map((person) => (
                    <div
                      key={person.id}
                      className="pb-3 border-b border-white/10 last:border-b-0"
                    >
                      <span className="text-gray-400 text-xs uppercase tracking-wider font-semibold block mb-0.5">
                        {person.position}
                      </span>
                      <p className="text-white font-bold text-base mb-0">
                        {person.link ? (
                          <a
                            href={person.link}
                            className="text-white hover:text-[#f68642] transition-colors inline-flex items-center gap-1.5"
                          >
                            <span>{person.name}</span>
                            <FontAwesomeIcon icon={faEnvelope} className="text-xs text-[#f68642]" />
                          </a>
                        ) : (
                          <span>{person.name}</span>
                        )}
                      </p>
                      {person.formerMember && (
                        <p className="text-gray-400 text-xs mb-0 mt-0.5">
                          {person.formerMember}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Follow Our Channels */}
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-white text-xl font-bold mb-3">
                  Follow Us
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/esyo_eu/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#f68642] text-white hover:text-black transition-all text-sm font-semibold border border-white/15"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@esyo"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#f68642] text-white hover:text-black transition-all text-sm font-semibold border border-white/15"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
