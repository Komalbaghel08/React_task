import { jobsData } from "../data/jobsData";
import JobCard from "../components/JobCard";
import Filters from "../components/Filters";
import { useSearchParams } from "react-router-dom";

export default function Jobs() {
  const [params] = useSearchParams();
  const dept = params.get("department");
  const loc = params.get("location");

  const filteredJobs = jobsData.filter(
    (job) =>
      (!dept || job.department === dept) && (!loc || job.location === loc)
  );

  return (
    <div className="container">
      <div className="header">Available Jobs</div>
      <Filters />
      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}