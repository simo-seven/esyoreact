import { useParams } from "react-router-dom";
import data from "../../data/news.json";
import { Helmet } from "react-helmet-async";

const NewsDetails = ({ formatDate, renderBody }) => {
  const { id } = useParams();
  const news = data.find((obj) => obj.id === id);

  return (
    <>
      <Helmet>
        <title>{news.title} | European Spirit of Youth Orchestra</title>
        <meta
          name="description"
          content={news.body.split(" ").slice(0, 20).join(" ") + "..."}
        />
        <link rel="canonical" href={`/news/${id}`} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={news.title}
        />
        <meta
          property="og:description"
          content="Stay updated with the latest news and events from the European Spirit of Youth Orchestra. Explore our recent performances, announcements, and more."
        />
        <meta property="og:url" content={`https://esyo.eu/news/${id}`} />
        <meta
          property="og:image"
          content={`https://esyo.eu/${news.img}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={news.title}
        />
        <meta
          name="twitter:description"
          content="Stay updated with the latest news and events from the European Spirit of Youth Orchestra. Explore our recent performances, announcements, and more."
        />
        <meta
          name="twitter:image"
          content={`https://esyo.eu/${news.img}`}
        />
      </Helmet>

      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="grid grid-cols-1">
            <article>
              <h1 className="beCareful text-4xl">{news.title}</h1>
              <div className="mt-10 mb-3 text-justify">
                {renderBody(news.body)}
              </div>
              <p className="mt-10">
                <small>Published on: {formatDate(news.publishedDate)}</small>
              </p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
