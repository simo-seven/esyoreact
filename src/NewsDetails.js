import { useParams } from "react-router-dom";
import data from "./data/news.json";

const NewsDetails = () => {
  const { id } = useParams();
  const news = data.find((obj) => obj.id === id);
  return (
    <div className="news-details">
        <article>
        <h2>{news.title}</h2>
        <div>{news.body}</div>
        </article>
    </div>
  );
};

export default NewsDetails;
