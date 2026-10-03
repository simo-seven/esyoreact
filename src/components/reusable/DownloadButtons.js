import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faDownload } from "@fortawesome/free-solid-svg-icons";

const DownloadButtons = ({ buttons }) => {
  return (
    <div className="w-full my-4">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {buttons.map((button) => (
          <a
            key={button.id}
            href={button.file}
            download={button.name}
            className="btn btn-secondary py-3 px-6 rounded-full font-bold inline-flex items-center justify-center gap-2.5 shadow-lg hover:scale-105 active:scale-95 transition-all text-sm sm:text-base group"
          >
            <FontAwesomeIcon
              icon={faFilePdf}
              className="text-lg opacity-90 group-hover:scale-110 transition-transform"
            />
            <span>{button.name}</span>
            <FontAwesomeIcon icon={faDownload} className="text-xs opacity-70 ml-1" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default DownloadButtons;
