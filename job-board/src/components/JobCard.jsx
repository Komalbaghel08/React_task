import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div className="card">
      <h3>{job.title}</h3>
      <p>{job.department} • {job.location}</p>
      <Link to={`/jobs/${job.id}`}><button>View Details</button></Link>
    </div>
  );
}
