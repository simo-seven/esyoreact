import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const HomeTestimonials = ({ testimonials, bcg }) => {
  const options = {
    loop: true,
    margin: 24,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    smartSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  };

  return (
    <section className={`container-xxl py-5 ${bcg}`} aria-label="Testimonials">
      <div className="container py-4 sm:py-5 px-4 sm:px-lg-5">
        <div className="text-center mb-8">
          <p className="section-title text-secondary justify-content-center">
            <span></span>Testimonials<span></span>
          </p>
          <h2 className="text-center text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
            What they say about us
          </h2>
        </div>
        <OwlCarousel className="testimonial-carousel owl-theme" {...options}>
          {testimonials.map((testimonial) => (
            <div
              className="testimonial-item bg-[#1c1c1b] border border-white/10 rounded-2xl p-6 sm:p-8 my-4 text-white shadow-xl min-h-[260px] flex flex-col justify-between"
              key={testimonial.id}
            >
              <div>
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-[#f68642] text-3xl mb-4 opacity-80"
                />
                <p className="text-gray-200 text-sm sm:text-base italic leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="d-flex align-items-center pt-4 border-t border-white/10">
                <img
                  className="reviewer-image rounded-full object-cover border-2 border-[#f68642]/60"
                  src={testimonial.img}
                  alt={testimonial.name}
                  style={{ width: "56px", height: "56px" }}
                  loading="lazy"
                />
                <div className="ps-3">
                  <h4 className="mb-0 text-white font-bold text-base">
                    {testimonial.name}
                  </h4>
                  <span className="text-gray-400 text-xs font-medium">
                    {testimonial.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default HomeTestimonials;
