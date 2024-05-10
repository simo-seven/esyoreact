import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <p className="text-justify">
          The specific purpose of this notice is to explain the types of cookies
          and the way they are used, and to provide information on how to refuse
          or delete cookies on the website www.esyo.eu (hereinafter, the
          "website").
        </p>
        <p className="text-justify">
          The data controller is the Cultural Association Scuola per Giovani
          Musicisti Europei. The data controller processes the personal data of
          users collected and processed with cookies through the website in
          order to ensure an optimal browsing experience. We use cookies to
          provide social media features and to analyse our traffic.
        </p>
        <p className="text-justify">
          Cookies are small text files that can be used by websites to make the
          user experience more efficient.
        </p>
        <p className="text-justify">
          The EU law states that we may store cookies on your device if they are
          strictly necessary for the operation of this website. For all other
          types of cookies we need your permission. Find out more about who we
          are, how you can contact us and how we process personal data in our{" "}
          <Link to="/privacypolicy" className="beCareful">Privacy Policy</Link>.
        </p>
      </div>
      <div className="container py-5 px-lg-5">
        <div className="text-center">
          <h2 className="text-white text-4xl">Types of Cookies</h2>
        </div>
        <h4 className="margintop2vh text-white">Technical Cookies</h4>
        <p className="text-justify">
          Analytical cookies are necessary cookies that help make the website
          usable by enabling basic functionality such as page navigation and
          access to secure areas of the website. The website cannot function
          properly without these cookies.
        </p>
        <h4 className="margintop2vh text-white">Third Party Analytical Cookies</h4>
        <p className="text-justify">
          These are cookies set by a website other than the one you are
          currently visiting. They are used to anonymously analyse and monitor
          how users use the website (e.g. number of accesses and pages visited),
          for statistical purposes and to improve the Site in terms of operation
          and navigation. These types of cookies are under the direct and
          exclusive responsibility of the third party. <br />
          The User is informed that this Site uses Google Tag Manager and
          analytical cookies from Google Analytics, to collect and analyse
          statistical information about visits to the Site. The information is
          collected anonymously, which does not allow the personal
          identification of users, and relates to their activity on the Site,
          the way they arrived at the Site and the pages they visited. <br />
          The Data Controller uses the information made available by Google Tag
          Manager and Google Analytics for statistical analyses, to improve the
          Site, to simplify its use and to monitor its correct functioning.
          Further information on privacy and its use can be found on Google's
          website at <Link
            to="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer noopener"
            className="beCareful"
          >
            this link
          </Link>
          .
        </p>
        <h4 className="margintop2vh text-white">Preferences</h4>
        <p className="text-justify">
          Preference cookies allow the website to store information that
          influences its behaviour or appearance, such as your location.
        </p>
        <h4 className="margintop2vh text-white">Statistics</h4>
        <p className="text-justify">
          Statistics cookies help website owners understand how visitors
          interact with the site by collecting and transmitting information
          anonymously.
        </p>

        <h4 className="margintop2vh text-white">Unclassified</h4>
        <p className="text-justify">
          Unclassified cookies are cookies that are in the process of being
          classified, along with individual cookie providers.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;
