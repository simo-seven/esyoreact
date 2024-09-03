import ScrollToTopLink from "../reusable/ScrollToTopLink";

const News = ({ news, formatDate }) => {
  return (
    <div className="container-xxl py-5 wow fadeInUp">
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="text-center mb-5 text-white text-5xl">
            Latest Updates
          </h1>
        </div>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            {news.map((newsItem) => {
              // Calculate the time difference between now and the published date
              const isNew = new Date() - new Date(newsItem.publishedDate) < 14 * 24 * 60 * 60 * 1000;

              return (
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
                        <div className="flex items-center gap-x-4 text-xs">
                          {isNew && (
                            <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                              New!
                            </p>
                          )}
                          <time
                            dateTime={newsItem.publishedDate}
                            className="text-gray-300"
                          >
                            {formatDate(newsItem.publishedDate)}
                          </time>
                        </div>

                        <h5 className="card-title beCareful text-2xl mt-3">
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
