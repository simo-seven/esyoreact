import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeTestimonials = ({ testimonials }) => {
  const settings = {
    infinite: true,
    slidesToShow: 2, // Show two slides on larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // Disable arrows
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show one slide on mobile
        },
      },
    ],
  };

  return (
    <div className="py-10 bg-black">
      <div className="container mx-auto py-5 px-4">
        <h1 className="text-center mb-5 text-white text-4xl md:text-5xl font-bold">
          What they say about us
        </h1>
        <Slider {...settings} className="flex justify-center">
          {testimonials.map((testimonial) => (
            <div className="flex justify-center mx-2" key={testimonial.id}>
              <div className="bg-white rounded-lg shadow-md p-5 m-5 w-full max-w-lg"> {/* Adjust the card width */}
                <p className="text-lg text-gray-700">
                  <i className="fa fa-quote-left fa-2x text-primary mr-3"></i>
                  {testimonial.quote}
                </p>
                <div className="flex items-center mt-4">
                  <img
                    className="w-16 h-16 rounded-full border-2 border-gray-200"
                    src={testimonial.img}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h5 className="text-lg font-semibold">
                      {testimonial.name}
                    </h5>
                    <small className="text-gray-500">
                      {testimonial.description}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeTestimonials;
