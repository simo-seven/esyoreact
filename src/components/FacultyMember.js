const FacultyMember = ({ members }) => {
  return (
    <div className="col-md-12">
      {members.map((member) => (
        <div className="card mb-3 bg-grey" key={member.id}>
          <div className="row no-gutters align-items-center">
            <div className="col-md-4 text-center">
              <img
                src={`./img/faculty/${member.photo}`}
                className="card-img"
                alt={`${member.name}, ${member.role}`}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title text-white">{member.name}</h3>
                <h5 className="card-subtitle mb-2 beCareful">{member.role}</h5>
                <p className="card-text text-justify">{member.cv}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FacultyMember;
