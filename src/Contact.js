const Contact = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="text-center mb-5 text-white" id="fillout">
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
                        <label for="name">Your Name and Surname</label>
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
                        <label for="email">Your Email</label>
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
                        <label for="message">Message</label>
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
                        <label className="form-check-label" for="gdprConsent">
                          I agree to the
                          <a href="/pages/privacypolicy.html">privacy-policy</a>
                          and the terms of the GDPR. I agree with the
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
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-5 col-md-6 mx-2 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="d-flex flex-column text-center rounded">
                <h3 className="margintop2vh text-white">
                  Office and Communication
                </h3>
                <a href="mailto:segreteria@esyo.eu">
                  <small>
                    <i className="fa fa-envelope beCareful"></i>
                  </small>{" "}
                  Alessio Glavina
                </a>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 mx-2 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="d-flex flex-column text-center rounded">
                <h3 className="margintop2vh text-white">Artistic Director</h3>
                <a href="mailto:maestro@esyo.eu">
                  <small>
                    <i className="fa fa-envelope beCareful"></i>
                  </small>{" "}
                  M<sup>o</sup> {" "}
                  Igor Coretti Kuret
                </a>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 mx-2 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="d-flex flex-column text-center rounded">
                <h3 className="margintop2vh text-white">Social Media</h3>
                <p>
                  <i className="fa-solid fa-share-nodes beCareful"></i> {" "} Jan Coretti Kuret
                </p>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 mx-2 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="d-flex flex-column text-center rounded">
                <h3 className="margintop2vh text-white">Webmaster</h3>
                <p>
                  <a href="https://linktr.ee/simo_seven">
                    <i className="fa-solid fa-arrow-pointer"></i>
                  </a> {" "} Simone Sette
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="text-center mb-5 text-white" id="fillout">
              Connect with us
            </h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="wow fadeInUp" data-wow-delay="0.3s">
                <div className="social-icons">
                  <a href="https://www.instagram.com/esyo_eu/" target="_blank">
                    <i className="fab fa-instagram fa-2x"></i>
                  </a>
                  <a href="https://www.youtube.com/@esyo" target="_blank">
                    <i className="fab fa-youtube fa-2x"></i>
                  </a>
                  {/* <a href="https://www.youtube.com/@esyo" target="_blank"
                    ><i className="fab fa-facebook-f fa-2x"></i
                  ></a>*/}
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
