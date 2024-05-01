const OrganizerDescription = ({ content, filePath }) => {
  return (
    <>
      {content.map((text) => (
        <div className="text-justify" key={text.id}>
          <p>{text.body}</p>
          <div className="d-flex flex-column text-center rounded">
            <a
              href={filePath}
              download={text.downloadedFileName}
              className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill mt-3 joinNow"
            >
              <i className="fa fa-file-invoice me-3 text-uppercase"></i>{" "}
              {text.button}
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default OrganizerDescription;
