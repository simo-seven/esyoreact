import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  return (
    <section className="py-5 border-t border-white/10" aria-label="Contact Form Section">
      <div className="container py-4 sm:py-5 px-4 sm:px-lg-5 max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <p className="section-title text-[#f68642] uppercase tracking-wider text-sm font-semibold mb-2 justify-content-center">
            <span></span>Get in Touch<span></span>
          </p>
          <h1 className="text-center text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Contact Form
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-center">
            Do you have any questions, doubts, or want to get in touch with us?
            Fill out the form below and we will get back to you as soon as possible.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <form name="contact" action="/" method="post">
              <input type="hidden" name="form-name" value="contact" />
              <div className="row g-3">
                <div className="col-12 col-md-6 mb-1">
                  <label htmlFor="contact-name" className="text-white text-sm font-semibold mb-1 d-block">
                    Your Name and Surname <span className="text-[#f68642]">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control dark-input"
                    id="contact-name"
                    name="name"
                    placeholder="e.g. Maria Rossi"
                    required
                  />
                </div>

                <div className="col-12 col-md-6 mb-1">
                  <label htmlFor="contact-email" className="text-white text-sm font-semibold mb-1 d-block">
                    Your Email <span className="text-[#f68642]">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control dark-input"
                    id="contact-email"
                    name="email"
                    placeholder="name@example.com"
                    required
                  />
                </div>

                <div className="col-12 mb-1">
                  <label htmlFor="contact-message" className="text-white text-sm font-semibold mb-1 d-block">
                    Message <span className="text-[#f68642]">*</span>
                  </label>
                  <textarea
                    className="form-control dark-input"
                    id="contact-message"
                    placeholder="Write your message here..."
                    name="message"
                    rows="5"
                    required
                    style={{ minHeight: "140px" }}
                  ></textarea>
                </div>

                <div className="col-12">
                  <div className="form-check my-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gdprConsent"
                      name="gdprConsent"
                      required
                    />
                    <label className="form-check-label text-gray-300 text-sm leading-relaxed" htmlFor="gdprConsent">
                      I agree to the{" "}
                      <Link to="/privacypolicy" className="beCareful">
                        privacy policy
                      </Link>{" "}
                      and the terms of the GDPR. I agree with the collection, storage
                      and processing of my personal data for the purpose of receiving a response.
                    </label>
                  </div>
                </div>

                <div className="col-12 text-center pt-2">
                  <button
                    className="btn btn-secondary py-3 px-8 rounded-full font-semibold inline-flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-200 text-base"
                    type="submit"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
