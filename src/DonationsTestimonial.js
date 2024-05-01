const DonationsTestimonial = ({ testimonials }) => {
  return (
    <>
      {testimonials.map((testimonial) => (
        <div
          className="card testimonial-card mb-3 bg-grey"
          key={testimonial.id}
        >
          <div className="card-body">
            <i className="fa fa-quote-left fa-3x text-primary mt-n4 me-3"></i>
            <div className="ps-4">
              <p className="fs-5">{testimonial.body}</p>
            </div>
            <div className="d-flex align-items-center">
              <div className="ps-4">
                <h5 className="mb-1 text-white">{testimonial.author}</h5>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DonationsTestimonial;
