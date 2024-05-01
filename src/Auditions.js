import AuditionsCard from "./AuditionsCard";
import AuditionsDownloadButtons from "./AuditionsDownloadButtons";
import AuditionsForm from "./AuditionsForm";
import dataPlaces from "./data/auditions.json";
import dataButtons from "./data/auditionsDownloadButtons.json";


const Auditions = () => {
  const auditions = dataPlaces;
  const buttons = dataButtons;
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <p>
            <span className="beCareful">Welcome</span> to the Auditions page!
            <br />
            2024 auditions will be held for the following positions:
          </p>

          <ul>
            <li>18 Violins</li>
            <li>6 Violas</li>
            <li>6 Cellos</li>
            <li>4 Doublebasses</li>
            <li>3 Flutes (1 with compulsory piccolo)</li>
            <li>3 Oboes (1 with compulsory English horn)</li>
            <li>2 Clarinets</li>
            <li>1 Alto-saxophone</li>
            <li>2 Bassoons</li>
            <li>4 French Horns</li>
            <li>4 Trumpets</li>
            <li>3 Trombones</li>
            <li>1 Tuba</li>
            <li>1 Timpani & 4 Percussions</li>
            <li>1 Harp</li>
          </ul>

          <p className="text-justify">
            Please make sure you{" "}
            <span className="beCareful">read the Regulation carefully</span>{" "}
            before registering for the ESYO Auditions 2024. This is important to
            ensure a smooth and quick registration process. You will find more
            information about how to audition for the ESYO below in this page.
            Should you have any doubts or questions about your eligibility for
            participating in the auditions or about the registration process,
            please{" "}
            <span className="beCareful">don’t hesitate to contact us</span>.
          </p>

          <div className="row g-4 justify-content-center auditionDeadline">
            <div
              className="col-lg-5 col-md-6 mx-2 wow fadeInUp contactCards"
              data-wow-delay="0.1s"
            >
              <div className="d-flex flex-column text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className="fa fa-calendar fa-2x beCareful"></i>
                </div>
                <h3 className="margintop2vh text-white">Auditions Deadline</h3>
                <h4 className="beCareful">
                  May 31<sup>st</sup>, 2024
                </h4>
              </div>
            </div>
          </div>

          <AuditionsDownloadButtons buttons={buttons} />

          <div className="morespace">
            <p className="text-justify">
              <span className="beCareful">Live Auditions</span> will be held in the following Countries and Cities. <span className="beCareful">
                If you don't see your city don't panic, you can always send us a link to one of your videos in the form below
              </span> (select the option "Online" in the "Audition Place" field).
            </p>
          </div>

          <AuditionsCard auditions={auditions} />
        </div>
        <p className="margintop5vh">
          Are you ready? Just fill out the following form and you are done. <span className="beCareful">Good luck for your audition!</span>
        </p>
      </div>
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="text-center mb-5 text-white">Audition Form</h1>
        </div>

        <AuditionsForm />
      </div>
    </div>
  );
};

export default Auditions;
