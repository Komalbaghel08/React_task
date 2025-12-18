import { jobsData } from "../data/jobsData.js";
import { useSearchParams } from "react-router-dom";

export default function Filters() {
  const [params, setParams] = useSearchParams();

  const departments = [...new Set(jobsData.map(job => job.department))];
  const locations = [...new Set(jobsData.map(job => job.location))];

  return (
    <div className="card">
      <select onChange={(e) => setParams({ department: e.target.value })}>
        <option value="">All Departments</option>
        {departments.map((dep, i) => (
          <option key={i} value={dep}>{dep}</option>
        ))}
      </select>

      <select onChange={(e) => setParams({ location: e.target.value })}>
        <option value="">All Locations</option>
        {locations.map((loc, i) => (
          <option key={i} value={loc}>{loc}</option>
        ))}
      </select>
    </div>
  );
}
