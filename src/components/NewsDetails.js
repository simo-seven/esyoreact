import { useParams } from "react-router-dom";
import data from "../data/news.json";

const NewsDetails = () => {
  const { id } = useParams();
  const news = data.find((obj) => obj.id === id);
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="container-fluid">
          <div className="row">
            <article>
              <h1 className="beCareful text-4xl">{news.title}</h1>
              <p className="mt-3 mb-3 text-justify">{news.body}</p>
              <p>Published on: {news.publishedDate}</p>
              <p className="beCareful">CONVERT THE DATE WITH THE RIGHT FORMAT. <br /> First create the function that converts the time. You are using it already in the Auditions Page in the Auditions Places cards</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;