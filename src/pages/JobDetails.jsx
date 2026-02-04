import { useParams, Link } from "react-router-dom";
import jobs from "../data/jobs";
import "./JobDetails.css";

function JobDetails() {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));

  if (!job) {
    return (
      <div className="job-details">
        <p>Job not found.</p>
        <Link to="/jobs">
          <button>Back to Jobs</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="job-details">
      <div className="job-card-detail">
        <h1>{job.title}</h1>
        <p className="company">{job.company}</p>
        <p className="location">{job.location}</p>
        <p className="level">Level: {job.level}</p>
        {job.date && <p className="date">Posted: {job.date}</p>}
        <p className="description">{job.description}</p>

        {job.skills && job.skills.length > 0 && (
          <div className="skills">
            <h3>Skills Required:</h3>
            <ul>
              {job.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="buttons">
          <Link to="/jobs">
            <button>Back to Jobs</button>
          </Link>
          <a href={job.applyLink || "#"} target="_blank" rel="noreferrer">
            <button className="apply">Apply Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;