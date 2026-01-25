import { Link } from "react-router-dom";
import jobs from "../data/jobs";
import JobCard from "../components/JobCard";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Find Your Next Remote Job</h1>
        <p>
          Discover remote opportunities for developers around the world.
        </p>

        <Link to="/jobs">
          <button>Browse Jobs</button>
        </Link>
      </section>

      <section className="stats">
        <div className="stat">
          <h3>120+</h3>
          <p>Jobs</p>
        </div>
        <div className="stat">
          <h3>40+</h3>
          <p>Companies</p>
        </div>
        <div className="stat">
          <h3>100%</h3>
          <p>Remote</p>
        </div>
      </section>

      <section>
        <h2>Featured Jobs</h2>
        {jobs.slice(0, 3).map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </section>
    </div>
  );
}

export default Home;