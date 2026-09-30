import DonationsTestimonial from "./Testimonial";
import data from "../../data/testimonials/donationsPage.json";
import SEO from "../common/SEO";

const Donations = () => {
  const testimonials = data;

  return (
    <>
      <SEO
        title="Donations & Support"
        description="Support the European Spirit of Youth Orchestra. Your donation funds scholarships, travel, and tuition for talented young European musicians."
        keywords="donate ESYO, music scholarships Europe, support youth orchestra, cultural donations"
        canonical="https://esyo.eu/donations"
        ogType="website"
      />

      {/* Testimonials from former members */}
      <section className="container-xxl py-4" aria-label="Former members testimonials">
        <div className="container py-3 px-4 sm:px-lg-5">
          <div className="text-center mb-6">
            <p className="section-title text-secondary justify-content-center">
              <span></span>Their Stories<span></span>
            </p>
            <h2 className="text-center text-white text-2xl sm:text-3xl font-bold">
              What do former members say?
            </h2>
          </div>
          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <DonationsTestimonial
                testimonials={testimonials.filter(
                  (testimonial) => testimonial.column === "sx"
                )}
              />
            </div>
            <div className="col-12 col-lg-6">
              <DonationsTestimonial
                testimonials={testimonials.filter(
                  (testimonial) => testimonial.column === "dx"
                )}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Donation Section */}
      <section className="container-xxl py-4 mb-5" aria-label="Become a Supporter">
        <div className="container py-4 px-4 sm:px-lg-5 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3">
              Become an ESYO Supporter
            </h1>
            <div className="w-16 h-1 bg-[#f68642] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
            <p>
              Join us and support the European Spirit of Youth Orchestra and its
              talented young musicians. Your donation will help our young
              musicians to participate in all ESYO educational projects. With
              your support, they will have the opportunity to learn from
              internationally renowned faculty, to grow musically and personally
              together with other young European musicians, to participate in
              the planned concert tours and to develop their musical and
              artistic skills.
            </p>
            <p className="text-center text-[#f68642] font-semibold text-lg py-3">
              By donating, you are helping to make a real difference in the
              lives of these young musicians. Thank you for your support!
            </p>
            <p>
              For our young musicians ESYO is a life-changing experience. Your
              donation will help them reach their full potential and make a
              lasting impact on the world of music. To donate, please make a
              bank transfer to the following account:
            </p>
          </div>

          {/* Bank Transfer Details Box */}
          <div className="my-8 p-6 sm:p-8 bg-[#1f1f1f] border border-[#f68642]/40 rounded-2xl shadow-xl text-center">
            <h3 className="text-white font-bold text-lg sm:text-xl mb-3">
              Associazione Culturale SGME APS
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              <span className="text-gray-400">Bank:</span> ZKB Credito Cooperativo di Trieste e Gorizia S.C. <br />
              <span className="text-gray-400">Address:</span> Via Giosuè Carducci, 4, 34133 Trieste TS, Italia
            </p>
            <div className="inline-block bg-black/60 px-4 py-3 rounded-xl border border-white/10 text-left sm:text-center">
              <p className="font-mono text-xs sm:text-sm text-[#f68642] font-bold mb-1">
                IBAN: <span className="text-white select-all">IT11K0892802200010000053126</span>
              </p>
              <p className="font-mono text-xs sm:text-sm text-[#f68642] font-bold">
                BIC / SWIFT: <span className="text-white select-all">CCRTIT2TVOO</span>
              </p>
            </div>
          </div>

          {/* Scholarship contribution cards */}
          <div className="my-8 p-6 sm:p-8 bg-black/40 border border-white/10 rounded-2xl text-center">
            <p className="text-white text-xl sm:text-2xl font-bold uppercase mb-2">
              <span className="text-[#f68642]">3,000&euro;</span> Full Scholarship
            </p>
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">or</p>
            <div className="flex flex-wrap justify-center items-center gap-3 mb-4">
              {["50€", "100€", "250€", "500€"].map((amount) => (
                <span
                  key={amount}
                  className="px-4 py-2 rounded-xl bg-white/10 text-[#f68642] font-bold text-lg border border-white/10"
                >
                  {amount}
                </span>
              ))}
            </div>
            <p className="text-gray-300 text-sm sm:text-base">
              Your donation contributes directly to creating scholarships for deserving young artists.
            </p>
          </div>

          <p className="text-gray-400 text-sm text-center italic">
            All received donations help cover tuition, travel, and accommodation
            for young musicians who would otherwise not be able to participate in ESYO.
          </p>
        </div>
      </section>
    </>
  );
};

export default Donations;
