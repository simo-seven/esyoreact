import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="text-center mb-5 text-white text-4xl">
              Contact Form
            </h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="wow fadeInUp" data-wow-delay="0.3s">
                <p className="text-center mb-4">
                  Do you have any questions? Doubts? Want to get in touch with
                  us? You are in the right place! Fill out the form and we will
                  get back to you as soon as possible.
                </p>
                <form
                  netlify
                  name="contact"
                  action="/pages/formsuccess.html"
                  method="POST"
                  data-netlify="true"
                  data-netlify-recaptcha="true"
                >
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
                          I agree to the <Link to="/privacypolicy">privacy-policy</Link> and the terms of the GDPR. I agree with the
                          collection, storage and processing of my personal data
                          and with being contacted. Data is stored on ESYO
                          infrastructure for organizational and administrative
                          purposes until it is deleted.
                        </label>
                      </div>
                    </div>
                    <div data-netlify-recaptcha="true"></div>
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
      <div className="container-xxl py-5 mb-0">
        <div className="container py-5 px-lg-5 pt-0">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="text-center mb-5 text-white text-4xl" id="fillout">
              People
            </h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-5 col-md-6 mx-2 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="d-flex flex-column text-center rounded">
                <h3 className="margintop2vh text-white text-2xl">
                  Office and Communication
                </h3>
                <Link to="mailto:segreteria@esyo.eu">
                  <i className="fa fa-envelope beCareful"></i> Alessio Glavina
                </Link>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 mx-2 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="d-flex flex-column text-center rounded">
                <h3 className="margintop2vh text-white text-2xl">Artistic Director</h3>
                <Link to="mailto:maestro@esyo.eu">
                  <i className="fa fa-envelope beCareful"></i> M<sup>o</sup>{" "}
                  Igor Coretti Kuret
                </Link>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 mx-2 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="d-flex flex-column text-center rounded">
                <h3 className="margintop2vh text-white text-2xl">Social Media</h3>
                <p>
                  <i className="fa-solid fa-share-nodes beCareful"></i> Jan Coretti Kuret
                </p>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 mx-2 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="d-flex flex-column text-center rounded">
                <h3 className="margintop2vh text-white text-2xl">Webmaster</h3>
                <p>
                  <Link
                    to="https://linktr.ee/simo_seven"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className="fa-solid fa-arrow-pointer beCareful"></i>
                  </Link>{" "}
                  Simone Sette
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5 mt-0 pt-0">
        <div className="container py-5 px-lg-5 mt-0">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="text-center mb-5 text-white text-4xl" id="fillout">
              Connect with us
            </h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="wow fadeInUp" data-wow-delay="0.3s">
                <div className="social-icons">
                  <Link
                    to="https://www.instagram.com/esyo_eu/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className="fab fa-instagram fa-2x"></i>
                  </Link>
                  <Link
                    to="https://www.youtube.com/@esyo"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className="fab fa-youtube fa-2x"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
