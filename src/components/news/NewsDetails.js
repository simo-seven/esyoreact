import { useParams, Link } from "react-router-dom";
import data from "../../data/news.json";
import SEO from "../common/SEO";
import NotFound from "../NotFound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCalendarAlt, faUser } from "@fortawesome/free-solid-svg-icons";

const NewsDetails = ({ formatDate, renderBody }) => {
  const { id } = useParams();
  const news = data.find((obj) => obj.id === id);

  if (!news) {
    return <NotFound />;
  }

  // Clean description by stripping bold markdown syntax
  const cleanDescription = news.body
    ? news.body.replace(/\*\*/g, "").split(" ").slice(0, 25).join(" ") + "..."
    : "";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": news.title,
    "image": [`https://esyo.eu${news.img.startsWith("/") ? "" : "/"}${news.img}`],
    "datePublished": news.publishedDate,
    "dateModified": news.publishedDate,
    "author": {
      "@type": "Organization",
      "name": news.author || "European Spirit of Youth Orchestra",
      "url": "https://esyo.eu"
    },
    "publisher": {
      "@type": "Organization",
      "name": "European Spirit of Youth Orchestra",
      "logo": {
        "@type": "ImageObject",
        "url": "https://esyo.eu/logo.png"
      }
    },
    "description": cleanDescription
  };

  return (
    <>
      <SEO
        title={news.title}
        description={cleanDescription}
        canonical={`https://esyo.eu/news/${id}`}
        ogType="article"
        ogImage={news.img}
        ogImageAlt={news.title}
        schema={articleSchema}
      />

      <div className="container-xxl py-5">
        <div className="container py-4 sm:py-5 px-4 sm:px-lg-5 max-w-4xl mx-auto">
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#f68642] hover:text-white transition-colors duration-200 text-sm font-semibold mb-6"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>Back to Home</span>
            </Link>
          </div>

          <article className="bg-[#1f1f1f] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl">
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-400 mb-4 pb-4 border-b border-white/10">
              <span className="inline-flex items-center gap-1.5">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-[#f68642]" />
                <time dateTime={news.publishedDate}>{formatDate(news.publishedDate)}</time>
              </span>
              {news.author && (
                <span className="inline-flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faUser} className="text-[#f68642]" />
                  <span>{news.author}</span>
                </span>
              )}
            </div>

            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              {news.title}
            </h1>

            {news.img && (
              <div className="mb-8 rounded-xl overflow-hidden aspect-video max-h-96 w-full bg-black/50 shadow-md">
                <img
                  src={news.img}
                  alt={news.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="text-gray-200 text-base sm:text-lg leading-relaxed text-justify space-y-4">
              {renderBody(news.body)}
            </div>

            {news.partnerSponsor && news.partnerSponsor.length > 0 && (
              <div className="mt-8 pt-6 border-t border-white/10 space-y-6">
                {news.partnerSponsor.map((partner) => (
                  <div key={partner.id}>
                    <h2 className="text-[#f68642] text-xl font-bold mb-2">
                      {partner.mainOrTitle}
                    </h2>
                    <div className="text-gray-300 leading-relaxed text-justify">
                      {renderBody(partner.relatedOrganisationsInstitutions)}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {news.button_link && (
              <div className="mt-10 text-center">
                <a
                  href={news.button_link}
                  target={news.button_link.startsWith("http") || news.button_link.endsWith(".pdf") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="btn btn-secondary py-3 px-8 rounded-full font-semibold inline-block hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg"
                >
                  {news.button_text || "Download Document"}
                </a>
              </div>
            )}
          </article>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
