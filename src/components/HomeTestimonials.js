import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const HomeTestimonials = ({ testimonials }) => {
  const options = {
    //implementing owlcarousel library
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1, // Show 1 item on mobile
      },
      768: {
        items: 2, // Show 2 items on desktop
      }
    },
  };

  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5 px-lg-5">
        <p className="section-title text-secondary justify-content-center mt-0">
          Testimonial
        </p>
        <h1 className="text-center mb-5 text-white text-5xl">What they say about us</h1>
        <OwlCarousel className="testimonial-carousel" {...options}>
          {testimonials.map((testimonial) => (
            <div
              className="testimonial-item bg-light rounded my-4"
              key={testimonial.id}
            >
              <p className="fs-5">
                <i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>
                {testimonial.quote}
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="reviewer-image rounded-circle"
                  src={testimonial.img}
                  alt={testimonial.name}
                />
                <div className="ps-4">
                  <h5 className="mb-1">{testimonial.name}</h5>
                  <span>{testimonial.description}</span>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default HomeTestimonials;
