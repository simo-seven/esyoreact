import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-4 sm:py-5 px-4 sm:px-lg-5">
        <div className="text-center mb-6">
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold mb-2">
            Contact Form
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Do you have any questions, doubts, or want to get in touch with us?
            Fill out the form below and we will get back to you as soon as possible.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            <div className="bg-[#1f1f1f] border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl">
              <form name="contact" action="/" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="contact-name"
                        name="name"
                        placeholder="Your Name and Surname"
                        required
                      />
                      <label htmlFor="contact-name">Your Name and Surname</label>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="contact-email"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                      <label htmlFor="contact-email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control textareaheight"
                        id="contact-message"
                        placeholder="Leave a message here"
                        name="message"
                        required
                        style={{ height: "140px" }}
                      ></textarea>
                      <label htmlFor="contact-message">Message</label>
                    </div>
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
                      <label className="form-check-label text-gray-300 text-xs sm:text-sm leading-relaxed" htmlFor="gdprConsent">
                        I agree to the{" "}
                        <Link to="/privacypolicy" className="text-[#f68642] underline hover:text-white">
                          privacy policy
                        </Link>{" "}
                        and the terms of the GDPR. I agree with the collection, storage
                        and processing of my personal data and with being
                        contacted.
                      </label>
                    </div>
                  </div>
                  <div className="col-12 mt-4">
                    <button
                      className="btn btn-secondary w-full py-3.5 rounded-full text-base font-bold shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-200"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
