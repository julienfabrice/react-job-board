import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jobs from "../data/jobs";
import JobCard from "../components/JobCard";
import "./Home.css";

function Home() {
  // Statistiques avec animation
  const statsData = [
    { label: "Jobs", value: 120 },
    { label: "Companies", value: 40 },
    { label: "Remote", value: 100 },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((stat, index) => {
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.value) {
            newCounts[index] += Math.ceil(stat.value / 100);
            if (newCounts[index] > stat.value) newCounts[index] = stat.value;
          }
          return newCounts;
        });
      }, 15);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

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
        {statsData.map((stat, index) => (
          <div className="stat" key={index}>
            <h3>{counts[index]}+</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      {/* FEATURED JOBS */}
      <section className="featured-section">
        <h2>Featured Jobs</h2>
        <div className="featured-jobs">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;