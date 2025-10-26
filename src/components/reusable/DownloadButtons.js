import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";

const DownloadButtons = ({ buttons }) => {
  return (
    <div className="container-xxl">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {buttons.map((button) => (
            <div
              className="col-lg-2 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
              key={button.id}
            >
              <div className="d-flex flex-column text-center rounded">
                <a
                  href={button.file}
                  download={button.name}
                  className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill mt-3 joinNow fontsize1point1rem"
                >
                  <FontAwesomeIcon icon={faFileInvoice} className="me-3" />
                  {button.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadButtons;
