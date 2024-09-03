import { Helmet } from "react-helmet-async";
import Faq from "react-faq-component";
import data from "../data/faq.json";

const faq = () => {
  const styles = {
    bgColor: 'transparent',
    titleTextColor: "white",
    rowTitleColor: "#f68642",
    rowTitleTextSize: 'big',
    rowContentColor: 'white',
    rowContentTextSize: '18px',
    arrowColor: "#f68642",
  };

  const config = {
    animate: true,
    // arrowIcon: "+",
    tabFocus: true
  };

  return (
    <>
      <Helmet>
        <title>FAQ | European Spirit of Youth Orchestra</title>
        <meta
          name="description"
          content="Find answers to common questions about auditions, performances, and more. Your guide to joining and participating in the orchestra."
        />
        <link rel="canonical" href="/faq" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="FAQ | European Spirit of Youth Orchestra"
        />
        <meta
          property="og:description"
          content="Find answers to common questions about auditions, performances, and more. Your guide to joining and participating in the orchestra."
        />
        <meta property="og:url" content="https://esyo.eu/" />
        <meta property="og:image" content="https://esyo.eu/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FAQ | European Spirit of Youth Orchestra"
        />
        <meta
          name="twitter:description"
          content="Find answers to common questions about auditions, performances, and more. Your guide to joining and participating in the orchestra."
        />
        <meta name="twitter:image" content="https://esyo.eu/logo.png" />
      </Helmet>

      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <Faq data={data} styles={styles} config={config} />
        </div>
      </div>
    </>
  );
};

export default faq;
