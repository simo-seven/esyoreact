import SEO from "../common/SEO";
import Description from "./Description";
import Gallery from "./Gallery";

const Orchestra = ({ bio, renderBody }) => {
  return (
    <>
      <SEO
        title="The Orchestra"
        description="Explore the European Spirit of Youth Orchestra (ESYO), a unique symphonic ensemble embodying the European spirit through intercultural dialogue and exceptional young musicians."
        keywords="ESYO history, European Spirit of Youth Orchestra, youth symphony orchestra, European cultural project"
        canonical="https://esyo.eu/orchestra"
        ogType="website"
      />

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
