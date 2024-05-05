import { Link } from "react-router-dom";

const News = ({ news }) => {
  return (
    <div className="container-xxl py-5 wow fadeInUp">
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
        <p className="section-title text-secondary justify-content-center">
          what's on
        </p>
          <h1 className="text-center section mb-5 text-white text-6xl">News</h1>
        </div>
        <div className="container">
          <div className="row">
            {news.map((news) => (
              <div className="col-md-4" key={news.id}>
                <Link to={`/news/${news.id}`}>
                  <div className="card bg-grey cursor-pointer">
                    <img
                      src={news.img}
                      className="card-img-top"
                      alt={news.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title beCareful">{news.title}</h5>
                      <p className="card-text text-white">
                        {news.body.split(" ").slice(0, 10).join(" ") + "..."}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
