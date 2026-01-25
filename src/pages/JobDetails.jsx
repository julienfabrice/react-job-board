import { useParams } from "react-router-dom";
import jobs from "../data/jobs";

function JobDetails() {
  const { id } = useParams();
  const job = jobs.find(j => j.id === Number(id));

  if (!job) {
    return <p>Job not found</p>;
  }

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h1>{job.title}</h1>
      <h3>{job.company}</h3>

      <p><strong>Type:</strong> {job.type}</p>
      <p><strong>Location:</strong> Remote</p>

      <p style={{ marginTop: "20px" }}>
        This is a great opportunity to work with a modern tech stack and a
        distributed team.
      </p>

      <button style={{
        marginTop: "20px",
        padding: "10px 20px",
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "6px"
      }}>
        Apply Now
      </button>
    </div>
  );
}

export default JobDetails;