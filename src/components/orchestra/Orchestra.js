import Description from "./Description";
import Gallery from "./Gallery";

const Orchestra = ({ bio, renderBody }) => {
  return (
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
  );
};

export default Orchestra;
