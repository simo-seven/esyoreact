import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Concerts = ({ concerts }) => {
  return (
    <VerticalTimeline className="p-5">
      {concerts.map((concert, index) => (
        <VerticalTimelineElement
          key={concert.id}
        >
          <h3 className="vertical-timeline-element-title mb-4 concertDate">
            {concert.date}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {concert.city}
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            {concert.venue}
          </h5>
          <p>
            <i className="fa-solid fa-clock"></i> {concert.time}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Concerts;
