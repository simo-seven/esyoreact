import { useParams } from "react-router-dom";
import data from "../../data/news.json";

const NewsDetails = ({ formatDate, renderBody }) => {
  const { id } = useParams();
  const news = data.find((obj) => obj.id === id);

  return (
    <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="grid grid-cols-1">
            <article>
              <h1 className="beCareful text-4xl">{news.title}</h1>
              <div className="mt-10 mb-3 text-justify">
                {renderBody(news.body)}
              </div>
              <p className="mt-10"><small>Published on: {formatDate(news.publishedDate)}</small></p>
            </article>
          </div>
      </div>
    </div>
  );
};

export default NewsDetails;
