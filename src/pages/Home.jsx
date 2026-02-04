import { Link } from "react-router-dom";
import jobs from "../data/jobs";
import JobCard from "../components/JobCard";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Next Remote Job</h1>
          <p>Discover remote opportunities for developers around the world.</p>
          <Link to="/jobs">
            <button>Browse Jobs</button>
          </Link>
        </div>
      </section>

      {/* STATS */}
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

      {/* FEATURED JOBS */}
      <section className="featured-section">
        <h2>Featured Jobs</h2>
        <div className="featured-jobs">
          {jobs.slice(0, 3).map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;