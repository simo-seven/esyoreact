import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  return (
    <div>
      <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">
        Contact Form
      </h2>
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
        Do you have any questions, doubts, or want to get in touch with us? Fill out the form below and we will get back to you as soon as possible.
      </p>

      <form name="contact" action="/" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <div className="space-y-4">
          <div>
            <label htmlFor="contact-name" className="text-white text-sm font-semibold mb-1 block">
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

          <div>
            <label htmlFor="contact-email" className="text-white text-sm font-semibold mb-1 block">
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

          <div>
            <label htmlFor="contact-message" className="text-white text-sm font-semibold mb-1 block">
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

          <div className="pt-2">
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
  );
};

export default Form;
