/* eslint-disable react/prop-types */
import "./jobs.css";

const JobCard = ({ job }) => {
  const {
    jdLink,
    jobDetailsFromCompany,
    maxJdSalary,
    minJdSalary,
    location,
    minExp,
    maxExp,
    jobRole,
    companyName,
    logoUrl,
  } = job;

  const salary =
    minJdSalary && maxJdSalary
      ? `${minJdSalary} - ${maxJdSalary} LPA`
      : minJdSalary
      ? `${minJdSalary} LPA`
      : maxJdSalary
      ? `${maxJdSalary} LPA`
      : "Undisclosed";

  const experience =
    minExp && maxExp
      ? `${minExp} - ${maxExp} years`
      : minExp
      ? `${minExp} years`
      : maxExp
      ? `${maxExp} years`
      : `0 year`;

  return (
    <div className="card">
      <div className="companyInfo">
        <div className="logo">
          <img alt="logo" src={logoUrl} className="logo-img" />
        </div>
        <div className="jobInfo-container">
          <span style={{ fontWeight: "bold", color: "#8b8b8b" }}>
            {companyName}
          </span>
          <span>{jobRole}</span>
          <span style={{ fontSize: 12 }}>{location}</span>
        </div>
      </div>
      <div className="salary">
        <span>Estimated Salary:</span>
        <span>{salary}</span>
        <span>✅</span>
      </div>
      <div className="about">
        <span style={{ fontWeight: "500" }}>About Company:</span>
        <div style={{ fontWeight: "600" }}>About us</div>
        <div className="jobDetail">{jobDetailsFromCompany}</div>
      </div>
      <div className="exp">
        <span
          style={{ fontWeight: "bold", color: "#8b8b8b", letterSpacing: "1px" }}
        >
          Minimum Experience
        </span>
        <span>{experience || 0}</span>
      </div>
      <a
        className="button"
        href={jdLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        ⚡ Easy Apply
      </a>
    </div>
  );
};

export default JobCard;
