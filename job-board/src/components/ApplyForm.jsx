import { useState } from "react";
import { validateForm } from "../utils/validators";
import { canApply } from "../utils/rateLimit";
import { useNavigate } from "react-router-dom";

export default function ApplyForm({ job }) {
  const [form, setForm] = useState({ name: "", email: "", resume: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    if (!canApply()) { setError("Please wait before applying again."); return; }
    const err = validateForm(form);
    if (err) { setError(err); return; }

    const stored = JSON.parse(localStorage.getItem("applications")) || [];
    stored.push({ ...form, jobTitle: job.title });
    localStorage.setItem("applications", JSON.stringify(stored));
    navigate("/applications");
  };

  return (
    <div className="card">
      <h3>Apply for this job</h3>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Resume URL" onChange={e => setForm({ ...form, resume: e.target.value })} />
      {error && <div className="error">{error}</div>}
      <button onClick={submitHandler}>Submit Application</button>
    </div>
  );
}
