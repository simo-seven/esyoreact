const Description = ({ filteredBio, renderBody }) => {
    return (
      <>
        {filteredBio.map((paragraph, index) => (
          <div
            className={`container py-5 px-lg-5 ${
              paragraph.title !== "" ? "hidden md:block" : ""
            }`}
            key={paragraph.id}
          >
            <div
              className="animate__animated animate__fadeInUp"
              data-wow-delay="0.1s"
            >
              <h1 className="text-center mb-5 text-white text-3xl">
                {paragraph.title}
              </h1>
            </div>
            <div
              className="animate__animated animate__fadeInUp"
              data-wow-delay="0.1s"
            >
              <p className="text-justify">{renderBody(paragraph.body)}</p>
            </div>
          </div>
        ))}
      </>
    );
  };
  
  export default Description;
  