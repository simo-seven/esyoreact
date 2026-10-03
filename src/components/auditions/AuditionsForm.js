import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const AuditionsForm = ({ title = "Audition Form" }) => {
  return (
    <section className="py-5 border-t border-white/10" aria-label="Audition Form Section">
      <div className="text-center mb-6">
        <p className="section-title text-[#f68642] uppercase tracking-wider text-sm font-semibold mb-2 justify-content-center">
          <span></span>Registration<span></span>
        </p>
        <h1 className="text-center text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
          {title}
        </h1>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-center">
          Are you ready? Just fill out the following form and you are done. Good luck for your audition! Should you have any doubts, please{" "}
          <Link to="/contact" className="beCareful">
            don't hesitate to contact us
          </Link>.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <form name="audition" action="/" method="post">
            <input type="hidden" name="form-name" value="audition" />

            {/* Candidate Details */}
            <div className="mb-4">
              <p className="text-[#f68642] font-semibold text-sm uppercase tracking-wider mb-3">
                1. Candidate Information
              </p>
              <div className="row g-3">
                <div className="col-12 col-md-6 mb-1">
                  <label htmlFor="audition-name" className="text-white text-sm font-semibold mb-1 d-block">
                    First Name <span className="text-[#f68642]">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control dark-input"
                    id="audition-name"
                    name="name"
                    placeholder="e.g. Maria"
                    required
                  />
                </div>

                <div className="col-12 col-md-6 mb-1">
                  <label htmlFor="audition-surname" className="text-white text-sm font-semibold mb-1 d-block">
                    Last Name <span className="text-[#f68642]">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control dark-input"
                    id="audition-surname"
                    name="surname"
                    placeholder="e.g. Rossi"
                    required
                  />
                </div>

                <div className="col-12 col-md-6 mb-1">
                  <label htmlFor="audition-email" className="text-white text-sm font-semibold mb-1 d-block">
                    Your Email <span className="text-[#f68642]">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control dark-input"
                    id="audition-email"
                    name="email"
                    placeholder="name@example.com"
                    required
                  />
                </div>

                <div className="col-12 col-md-6 mb-1">
                  <label htmlFor="audition-parent-email" className="text-white text-sm font-semibold mb-1 d-block">
                    Parent's / Tutor's Email <span className="text-gray-400 text-xs font-normal">(only if under 18)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control dark-input"
                    id="audition-parent-email"
                    name="parentEmail"
                    placeholder="parent@example.com"
                  />
                </div>

                <div className="col-12 col-md-6 mb-1">
                  <label htmlFor="audition-phone" className="text-white text-sm font-semibold mb-1 d-block">
                    Phone Number <span className="text-[#f68642]">*</span>
                  </label>
                  <input
                    type="tel"
                    className="form-control dark-input"
                    id="audition-phone"
                    name="phone"
                    placeholder="+39 123 456 7890"
                    required
                  />
                </div>

                <div className="col-12 col-md-6 mb-1">
                  <label htmlFor="audition-birthday" className="text-white text-sm font-semibold mb-1 d-block">
                    Date of Birth <span className="text-[#f68642]">*</span>
                  </label>
                  <input
                    type="date"
                    className="form-control dark-input"
                    id="audition-birthday"
                    name="birthday"
                    required
                  />
                </div>

                <div className="col-12 col-md-6 mb-1">
                  <label htmlFor="audition-country" className="text-white text-sm font-semibold mb-1 d-block">
                    Country of Origin <span className="text-[#f68642]">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control dark-input"
                    id="audition-country"
                    name="country"
                    placeholder="e.g. Italy, Slovenia, Spain..."
                    required
                  />
                </div>

                <div className="col-12 col-md-6 mb-1">
                  <label htmlFor="audition-doc-number" className="text-white text-sm font-semibold mb-1 d-block">
                    Passport or ID Number <span className="text-[#f68642]">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control dark-input"
                    id="audition-doc-number"
                    name="DocumentNumber"
                    placeholder="Passport or National ID document number"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Instrument and Video URL */}
            <div className="mb-4 pt-3 border-t border-white/10">
              <p className="text-[#f68642] font-semibold text-sm uppercase tracking-wider mb-3">
                2. Instrument & Video Audition
              </p>
              <div className="row g-3">
                <div className="col-12 col-md-6 mb-1">
                  <label htmlFor="audition-instrument" className="text-white text-sm font-semibold mb-1 d-block">
                    Your Instrument <span className="text-[#f68642]">*</span>
                  </label>
                  <select
                    className="form-control dark-input"
                    id="audition-instrument"
                    name="instrument[]"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Select your instrument...</option>
                    <option value="Violin">Violin</option>
                    <option value="Viola">Viola</option>
                    <option value="Cello">Cello</option>
                    <option value="Doublebass">Double Bass</option>
                    <option value="FlutePiccolo">Flute / Piccolo</option>
                    <option value="Oboe">Oboe</option>
                    <option value="Clarinet">Clarinet</option>
                    <option value="Bassoon">Bassoon</option>
                    <option value="FrenchHorn">French Horn</option>
                    <option value="Trumpet">Trumpet</option>
                    <option value="Trombone">Trombone</option>
                    <option value="Tuba">Tuba</option>
                    <option value="TimpaniPercussions">Timpani & Percussions</option>
                  </select>
                </div>

                <div className="col-12 col-md-6 mb-1">
                  <label htmlFor="audition-videourl" className="text-white text-sm font-semibold mb-1 d-block">
                    Video Audition Link <span className="text-[#f68642]">*</span>
                  </label>
                  <input
                    type="url"
                    className="form-control dark-input"
                    id="audition-videourl"
                    name="videoURL"
                    placeholder="https://youtube.com/... or Vimeo / Drive"
                    required
                  />
                </div>
              </div>
              <p className="text-gray-400 text-xs mt-2 italic">
                Please make sure your video link is accessible (Unlisted or Public) and features two contrasting pieces (5–7 minutes max).
              </p>
            </div>

            {/* Declarations and Consents */}
            <div className="mb-4 pt-3 border-t border-white/10">
              <p className="text-[#f68642] font-semibold text-sm uppercase tracking-wider mb-3">
                3. Declarations & Consents
              </p>
              <div className="space-y-3">
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="legalTutor"
                    name="legalTutor"
                    required
                  />
                  <label className="form-check-label text-gray-300 text-sm leading-relaxed" htmlFor="legalTutor">
                    <strong className="text-white">Parents' declaration:</strong> I hereby declare as legal tutor of the applicant that I have knowledge about this application request (or confirm being of legal age).
                  </label>
                </div>

                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="esyoRegulations"
                    name="esyoRegulations"
                    required
                  />
                  <label className="form-check-label text-gray-300 text-sm leading-relaxed" htmlFor="esyoRegulations">
                    I agree with all the terms and conditions listed in the <span className="beCareful">ESYO Regulations</span>.
                  </label>
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gdprConsent"
                    name="gdprConsent"
                    required
                  />
                  <label className="form-check-label text-gray-300 text-sm leading-relaxed" htmlFor="gdprConsent">
                    I agree to the{" "}
                    <Link to="/privacypolicy" className="beCareful">
                      privacy-policy
                    </Link>{" "}
                    and the terms of the GDPR. I agree with the collection, storage and processing of my personal data for organizational and administrative purposes.
                  </label>
                </div>
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                className="btn btn-secondary py-3 px-8 rounded-full font-semibold inline-flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-200 text-base"
                type="submit"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
                <span>Apply Now!</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AuditionsForm;
