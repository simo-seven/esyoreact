import { Helmet } from "react-helmet-async";
import Description from "./Description";
import Gallery from "./Gallery";

const Orchestra = ({ bio, renderBody }) => {
  return (
    <>
    <Helmet>
    <title>Orchestra - European Spirit of Youth Orchestra</title>
        <meta
          name="description"
          content="Explore the European Spirit of Youth Orchestra, a symphonic ensemble embodying the European dream through diverse young talents. Learn about our musicians and mission."
          />
        <link rel="canonical" href="/orchestra" />
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
