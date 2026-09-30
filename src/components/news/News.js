import ScrollToTopLink from "../reusable/ScrollToTopLink";

const News = ({ news, formatDate }) => {
  return (
    <section className="container-xxl py-5" aria-label="Latest News and Updates">
      <div className="container py-4 sm:py-5 px-4 sm:px-lg-5">
        <div className="text-center mb-10">
          <p className="section-title text-secondary justify-content-center">
            <span></span>News &amp; Announcements<span></span>
          </p>
          <h2 className="text-center text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
            Latest News
          </h2>
        </div>
        <div className="row g-4 justify-content-center">
          {news.map((newsItem) => {
            const isNew =
              new Date() - new Date(newsItem.publishedDate) < 14 * 24 * 60 * 60 * 1000;

            return (
              <div
                className="col-12 col-md-6 col-lg-4 d-flex"
                key={newsItem.id}
              >
                <ScrollToTopLink
                  to={`/news/${newsItem.id}`}
                  className="w-full flex text-decoration-none group"
                >
                  <div className="card w-full flex flex-col bg-[#222222] border border-white/10 rounded-2xl overflow-hidden group-hover:border-[#f68642]/60 group-hover:-translate-y-1.5 transition-all duration-300 shadow-lg group-hover:shadow-2xl m-0">
                    <div className="relative overflow-hidden aspect-video bg-black/40">
                      <img
                        src={newsItem.img}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt={newsItem.title}
                        loading="lazy"
                      />
                      {isNew && (
                        <span className="absolute top-3 right-3 rounded-full bg-[#f68642] text-black px-3 py-1 text-xs font-bold uppercase tracking-wider shadow">
                          New!
                        </span>
                      )}
                    </div>
                    <div className="card-body flex-1 flex flex-col p-5">
                      <time
                        dateTime={newsItem.publishedDate}
                        className="text-gray-400 text-xs font-medium uppercase tracking-wider"
                      >
                        {formatDate(newsItem.publishedDate)}
                      </time>

                      <h3 className="card-title text-white group-hover:text-[#f68642] text-xl font-bold mt-2 mb-3 line-clamp-2 transition-colors duration-200">
                        {newsItem.title}
                      </h3>
                      <p className="card-text text-gray-300 text-sm line-clamp-3 mb-4 flex-1">
                        {newsItem.body.replace(/\*\*/g, "").split(" ").slice(0, 18).join(" ") + "..."}
                      </p>
                      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#f68642]">
                        <span>Read Article</span>
                        <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                          &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollToTopLink>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default News;
