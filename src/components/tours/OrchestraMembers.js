const OrchestraMembers = ({ members }) => {
    return (
      <div className="container-xxl py-3">
        <div className="container py-5 px-lg-5">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="text-center mb-5 text-white text-4xl">Orchestra Members</h1>
            {members.map((member) => (
              <h4 key={member.id} className="m-4">
                <span className="beCareful">{member.section}</span> <br />
                <span className="text-white margin-top">
                  {member.members}
                </span>
              </h4>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default OrchestraMembers;
  