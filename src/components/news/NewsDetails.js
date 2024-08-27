import { useParams } from "react-router-dom";
import data from "../../data/news.json";
import { Helmet } from "react-helmet-async";

const NewsDetails = ({ formatDate, renderBody }) => {
  const { id } = useParams();
  const news = data.find((obj) => obj.id === id);

  return (
    <>
      <Helmet>
        <title>News - European Spirit of Youth Orchestra</title>
        <meta
          name="description"
          content="Stay updated with the latest news and events from the European Spirit of Youth Orchestra. Explore our recent performances, announcements, and more."
        />
        <link rel="canonical" href={`/news/${id}`} />
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
