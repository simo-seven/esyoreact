import { useParams } from "react-router-dom";
import data from "../data/news.json";

const NewsDetails = ({ formatDate }) => {
  const { id } = useParams();
  const news = data.find((obj) => obj.id === id);
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-5 lg:px-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <article>
              <h1 className="beCareful text-4xl">{news.title}</h1>
              <p className="mt-3 mb-3 text-justify">{news.body}</p>
              <p>Published on: {formatDate(news.publishedDate)}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
