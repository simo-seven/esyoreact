import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonial = ({ testimonials }) => {
  return (
    <div className="space-y-4">
      {testimonials.map((testimonial) => (
        <div
          className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-white shadow-md hover:border-[#f68642]/50 hover:bg-black/60 transition-all duration-300 flex flex-col justify-between"
          key={testimonial.id}
        >
          <div>
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="text-[#f68642] text-xl mb-3 opacity-90"
            />
            <p className="text-gray-200 text-sm sm:text-base italic leading-relaxed mb-4 text-justify">
              "{testimonial.body.trim()}"
            </p>
          </div>
          <div className="pt-3 border-t border-white/10">
            <h4 className="text-white font-bold text-sm sm:text-base mb-0">
              {testimonial.author}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
