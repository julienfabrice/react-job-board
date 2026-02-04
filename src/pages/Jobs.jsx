import { useState, useEffect } from "react";
import jobs from "../data/jobs";
import JobCard from "../components/JobCard";
import "./Jobs.css";

export default function Jobs() {
  const [jobList, setJobList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [levelFilter, setLevelFilter] = useState("All");

  useEffect(() => {
    // Simuler le chargement des jobs
    setTimeout(() => {
      setJobList(jobs);
      setLoading(false);
    }, 800); // 0.8s pour l’effet loading
  }, []);

  // Liste filtrée
  const filteredJobs = jobList.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase());
    const matchesLocation =
      locationFilter === "All" || job.location === locationFilter;
    const matchesLevel = levelFilter === "All" || job.level === levelFilter;

    return matchesSearch && matchesLocation && matchesLevel;
  });

  // Locations uniques
  const locations = ["All", ...new Set(jobList.map((job) => job.location))];

  return (
    <div className="jobs-page">
      <h1>Job Board</h1>

      {/* FILTRES */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search for a job..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          {locations.map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <select
          value={levelFilter}
          onChange={(e) => setLevelFilter(e.target.value)}
        >
          <option value="All">All Levels</option>
          <option value="Junior">Junior</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Senior">Senior</option>
        </select>
      </div>

      {/* LOADING */}
      {loading ? (
        <div className="loading">Loading jobs...</div>
      ) : (
        <div className="job-list">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <p>No jobs found.</p>
          )}
        </div>
      )}
    </div>
  );
}