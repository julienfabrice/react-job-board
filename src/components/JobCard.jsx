import { Link } from "react-router-dom";
import "./JobCard.css";

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p className="company">{job.company}</p>

      <div className="badges">
        <span className="badge remote">Remote</span>
        <span className="badge type">{job.type}</span>
      </div>

      <Link to={`/jobs/${job.id}`} className="details-btn">
        View Details →
      </Link>
    </div>
  );
}

export default JobCard;