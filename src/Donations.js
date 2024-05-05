import DonationsTestimonial from "./components/DonationsTestimonial";
import data from "./data/testimonials.json";

const Donations = () => {
  const testimonials = data;
  return (
    <>
      <div className="container-xxl py-3">
        <div className="container py-3 px-lg-3">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <p className="section-title text-secondary justify-content-center">
              What do former members say?
            </p>
          </div>
        </div>
      </div>

      <div className="container-xxl py-2 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-2 px-lg-2">
          <div className="row">
            <div className="col-lg-6">
              <DonationsTestimonial
                testimonials={testimonials.filter(
                  (testimonial) => testimonial.column === "sx"
                )}
              />
            </div>
            <div className="col-lg-6">
              <DonationsTestimonial
                testimonials={testimonials.filter(
                  (testimonial) => testimonial.column === "dx"
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-3">
        <div className="container py-3 px-lg-3">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="text-center mb-5 text-white text-4xl">
              Become an ESYO donor
            </h1>
          </div>
          <div className="py-3">
            <p className="text-justify">
              Join us and support the European Spirit of Youth Orchestra and its
              talented young musicians. Your donation will help our young
              musicians to participate in all ESYO educational projects. With
              your support, they will have the opportunity to learn from
              internationally renowned faculty, to grow musically and personally
              together with other young European musicians, to participate in
              the planned concert tours and to develop their musical and
              artistic skills.
            </p>
            <p className="text-justify">
              For our young musicians ESYO is a life-changing experience. Your
              donation will help them reach their full potential and make a
              lasting impact on the world of music. To donate, please make a
              bank transfer to the following account:
            </p>
          </div>
          <div className="py-3">
            <p className="text-center">
              Associazione culturale SGME APS <br />
              Bank: CIVIBANK - Agenzia Trieste 4 <br />
              Address: I - 34122 Trieste, Via XXX Ottobre 16 <br />
              IBAN: IT43H0548402200CC0040396662 <br />
              SWIFT: CIVIIT2CXXX
            </p>
          </div>
          <div className="py-3">
            <p className="text-justify">
              The ESYO is a unique educational project that brings together
              young musicians from all over Europe to work with some of the
              world's leading conductors and musicians. It offers a variety of
              educational activities, including workshops, masterclasses, and
              concerts.
            </p>
          </div>
          <div className="container">
            <div className="hideOnMobile">
              <p className="text-center text-uppercase text-white">
                <span className="beCareful">3000&#x20AC;</span> full scholarship
              </p>
              <p className="text-center">or</p>
              <div className="row">
                <div className="col-md-6 align-items-center">
                  <div>
                    <p className="beCareful alignend">
                      50&#x20AC; <br />
                      100&#x20AC; <br />
                      250&#x20AC; <br />
                      500&#x20AC;
                    </p>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <div>
                    <p className="text-uppercase text-white">
                      your donation <br /> can contribute <br /> to create{" "}
                      <br /> scholarships
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="onlyMobile">
              <p className="text-center text-uppercase text-white">
                <span className="beCareful">3000&#x20AC;</span> full scholarship
              </p>
              <p className="text-center">or</p>
              <p className="text-center text-uppercase text-white">
                <span className="beCareful">50&#x20AC;</span>,{" "}
                <span className="beCareful">100&#x20AC;</span>,{" "}
                <span className="beCareful">250&#x20AC;</span> or{" "}
                <span className="beCareful">500&#x20AC;</span> your donation can
                contribute to create scholarships
              </p>
            </div>
          </div>
          <div className="py-3">
            <p className="text-justify">
              All received donations are helping to cover the costs of tuition,
              travel, and accommodation of young musicians who would otherwise
              not be able to participate in the ESYO.
            </p>
          </div>

          <div className="py-3">
            <p className="text-center beCareful">
              By donating, you are helping to make a real difference in the
              lives of these young musicians. <br />
              Thank you for your support!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donations;
