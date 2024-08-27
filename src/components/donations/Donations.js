import DonationsTestimonial from "./Testimonial";
import data from "../../data/testimonials/donationsPage.json";
import { Helmet } from "react-helmet-async";

const Donations = () => {
  const testimonials = data;
  return (
    <>
      <Helmet>
        <title>Donations - European Spirit of Youth Orchestra</title>
        <meta
          name="description"
          content="Support the European Spirit of Youth Orchestra. Your donation helps young musicians access educational projects, scholarships, and concert tours across Europe."
        />
        <link rel="canonical" href="/donations" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Donations - European Spirit of Youth Orchestra"
        />
        <meta
          property="og:description"
          content="Support the European Spirit of Youth Orchestra. Your donation helps young musicians access educational projects, scholarships, and concert tours across Europe."
        />
        <meta property="og:url" content="https://esyo.eu/donations" />
        <meta
          property="og:image"
          content="https://esyo.eu/static/media/LogoSmall.180757e2ef4a35c3599e.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Donations - European Spirit of Youth Orchestra"
        />
        <meta
          name="twitter:description"
          content="Support the European Spirit of Youth Orchestra. Your donation helps young musicians access educational projects, scholarships, and concert tours across Europe."
        />
        <meta
          name="twitter:image"
          content="https://esyo.eu/static/media/LogoSmall.180757e2ef4a35c3599e.png"
        />
      </Helmet>

      <div className="container-xxl py-3 hidden md:block">
        <div className="container py-3 px-lg-3">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <p className="section-title text-secondary justify-content-center">
              What do former members say?
            </p>
          </div>
        </div>
      </div>

      <div
        className="container-xxl py-2 wow fadeInUp hidden md:block"
        data-wow-delay="0.1s"
      >
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

      <div className="container-xxl py-3 mb-5">
        <div className="container py-3 px-lg-3">
          <div className="wow fadeInUp hidden md:block" data-wow-delay="0.1s">
            <h1 className="text-center mb-5 text-white text-4xl">
              Become an ESYO supporter
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
            <p className="text-center beCareful mt-5 mb-5">
              By donating, you are helping to make a real difference in the
              lives of these young musicians. <br />
              Thank you for your support!
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
              Associazione Culturale SGME APS <br />
              Bank: ZKB Credito Cooperativo di Trieste e Gorizia S.C. <br />
              Address: Via Giosuè Carducci, 4, 34133 Trieste TS, Italia <br />
              IBAN: IT11K0892802200010000053126 <br />
              BIC: CCRTIT2TVOO
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
          <div className="container mt-5 mb-5">
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
        </div>
      </div>
    </>
  );
};

export default Donations;
