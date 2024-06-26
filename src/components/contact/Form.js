import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp hidden md:block" data-wow-delay="0.1s">
          <h1 className="text-center mb-5 text-white text-4xl">Contact Form</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="wow fadeInUp" data-wow-delay="0.3s">
              <p className="text-center mb-4">
                Do you have any questions? Doubts? Want to get in touch with us?
                You are in the right place! Fill out the form and we will get
                back to you as soon as possible.
              </p>
              <form name="contact" action="/" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your Name"
                        required
                      />
                      <label htmlFor="name">Your Name and Surname</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control textareaheight"
                        placeholder="Leave a message here"
                        name="message"
                        required
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="gdprConsent"
                        required
                      />
                      <label className="form-check-label" htmlFor="gdprConsent">
                        I agree to the{" "}
                        <Link to="/privacypolicy">privacy-policy</Link> and the
                        terms of the GDPR. I agree with the collection, storage
                        and processing of my personal data and with being
                        contacted. Data is stored on ESYO infrastructure for
                        organizational and administrative purposes until it is
                        deleted.
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-secondary w-100 py-3"
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
