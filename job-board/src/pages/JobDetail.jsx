import { useParams } from "react-router-dom";
import { jobsData } from "../data/jobsData";
import ApplyForm from "../components/ApplyForm";

export default function JobDetail() {
  const { id } = useParams();
  const job = jobsData.find(j => j.id === Number(id));

  return (
    <div className="container">
      <div className="header">{job.title}</div>
      <p>{job.description}</p>
      <ApplyForm job={job} />
    </div>
  );
}
