import { Link } from "react-router-dom";

const AuditionsForm = ({ title }) => {
  return (
    <>
      <p className="mt-10">
        Are you ready? Just fill out the following form and you are done.{" "}
        <span className="beCareful">Good luck for your audition!</span>
      </p>
      <div
        className="animate__animated animate__fadeInUp mt-5"
        data-wow-delay="0.1s"
      >
        <h1 className="text-center mb-5 text-white text-4xl">{title}</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="wow fadeInUp" data-wow-delay="0.3s">
            <p className="mb-2">
              All fields are <span className="beCareful">required</span>!
            </p>
            <form
              name="audition"
              action="/adsuccess"
              method="post"
            >
              <input type="hidden" name="form-name" value="audition" />
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                    <label htmlFor="name">First Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      name="surname"
                      placeholder="Your Surname"
                      required
                    />
                    <label htmlFor="surname">Last Name</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="Telephone"
                      required
                    />
                    <label htmlFor="phone">Your Phone Number</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="date"
                      className="form-control"
                      name="birthday"
                      placeholder="Birth Day"
                      required
                    />
                    <label htmlFor="birthday">Your Birth Day (dd/mm/yy)</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      name="country"
                      placeholder="Country of Origin"
                      required
                    />
                    <label htmlFor="country">Country of Origin</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      name="DocumentNumber"
                      placeholder="Passport or ID Number"
                      required
                    />
                    <label htmlFor="DocumentNumber">
                      Passport or ID Number
                    </label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <select
                      className="form-control"
                      name="instrument[]"
                      required
                    >
                      <option value="Violin">Violin</option>
                      <option value="Viola">Viola</option>
                      <option value="Cello">Cello</option>
                      <option value="Doublebass">Double Bass</option>
                      <option value="FlutePiccolo">Flute/Piccolo</option>
                      <option value="Oboe/EnglishHorn">
                        Oboe/English Horn
                      </option>
                      <option value="ClarinetBassClarinet">Clarinet</option>
                      <option value="AltoSaxophone">Alto-saxophone</option>
                      <option value="Bassoon">Bassoon</option>
                      <option value="FrenchHorn">French Horn</option>
                      <option value="Trumpet">Trumpet</option>
                      <option value="Trombone">Trombone</option>
                      <option value="Tuba">Tuba</option>
                      <option value="TimpaniPercussions">
                        Timpani/Percussions
                      </option>
                      <option value="Harp">Harp</option>
                    </select>
                    <label htmlFor="Instrument">Your Instrument</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <select
                      className="form-control"
                      name="auditionplace[]"
                      required
                    >
                      <option value="Trieste">
                        Trieste, Italy (8th June, 2024)
                      </option>
                      <option value="Online">Online</option>
                    </select>
                    <label htmlFor="auditionplace">Audition Place</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <p>Only if your previous selection is "Online":</p>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      name="videoURL"
                      placeholder="Video URL"
                    />
                    <label htmlFor="videoURL">Video Url</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <p>Parents' declaration:</p>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="legalTutor"
                      required
                    />
                    <label className="form-check-label" htmlFor="gdprConsent">
                      I hereby declare as legal tutor of the applicant that I
                      have knowledge about this application request.
                    </label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="esyoRegulations"
                      required
                    />
                    <label className="form-check-label" htmlFor="gdprConsent">
                      I agree with all the terms and conditions listed in the
                      ESYO 2024 Regulation.
                    </label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="gdprConsent"
                      required
                    />
                    <label className="form-check-label" htmlFor="gdprConsent">
                      I agree to the{" "}
                      <Link to="privacypolicy">privacy-policy</Link> and the
                      terms of the GDPR. I agree with the collection, storage
                      and processing of my personal data and with being
                      contacted. Data is stored on ESYO infrastructure for
                      organizational and administrative purposes until it is
                      deleted.
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-secondary w-100 py-3"
                    type="submit"
                  >
                    Apply Now!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuditionsForm;
