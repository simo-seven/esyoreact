import ScrollToTopLink from "../ScrollToTopLink";

const News = ({ news }) => {
  return (
    <div className="container-xxl py-5 wow fadeInUp">
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="text-center mb-5 text-white text-5xl">
            Latest Updates
          </h1>
        </div>
        <div className="container">
          <div
            className="row justify-content-center align-items-center"
          >
            {news.map((newsItem) => (
              <div
                className="col-md-4 d-flex justify-content-center mb-4"
                key={newsItem.id}
              >
                <ScrollToTopLink to={`/news/${newsItem.id}`}>
                  <div className="card zoom bg-grey cursor-pointer">
                    <img
                      src={newsItem.img}
                      className="card-img-top"
                      alt={newsItem.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title beCareful text-2xl">
                        {newsItem.title}
                      </h5>
                      <p className="card-text text-white">
                        {newsItem.body.split(" ").slice(0, 10).join(" ") +
                          "..."}
                      </p>
                    </div>
                  </div>
                </ScrollToTopLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
