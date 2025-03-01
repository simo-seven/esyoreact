import { Helmet } from "react-helmet-async";
import Description from "./Description";
import Gallery from "./Gallery";

const Orchestra = ({ bio, renderBody }) => {
  return (
    <>
      <Helmet>
        <title>Orchestra | European Spirit of Youth Orchestra</title>
        <meta
          name="description"
          content="Explore the European Spirit of Youth Orchestra, a symphonic ensemble embodying the European dream through diverse young talents. Learn about our musicians and mission."
        />
        <link rel="canonical" href="https://esyo.eu/orchestra" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Orchestra | European Spirit of Youth Orchestra"
        />
        <meta
          property="og:description"
          content="Explore the European Spirit of Youth Orchestra, a symphonic ensemble embodying the European dream through diverse young talents. Learn about our musicians and mission."
        />
        <meta property="og:url" content="https://esyo.eu/orchestra" />
        <meta
          property="og:image"
          content="https://esyo.eu/logo.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Orchestra | European Spirit of Youth Orchestra"
        />
        <meta
          name="twitter:description"
          content="Explore the European Spirit of Youth Orchestra, a symphonic ensemble embodying the European dream through diverse young talents. Learn about our musicians and mission."
        />
        <meta
          name="twitter:image"
          content="https://esyo.eu/logo.png"
        />
      </Helmet>

      <div className="container-xxl py-5">
        <Description
          filteredBio={bio.filter((paragraph) => paragraph.title === "")}
          renderBody={renderBody}
        />
        <Gallery />
        <Description
          filteredBio={bio.filter((paragraph) => paragraph.title !== "")}
          renderBody={renderBody}
        />
      </div>
    </>
  );
};

export default Orchestra;
