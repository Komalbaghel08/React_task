export default function Applications() {
  const apps = JSON.parse(localStorage.getItem("applications")) || [];

  return (
    <div className="container">
      <div className="header">Your Applications</div>
      {apps.map((app, i) => (
        <div key={i} className="card">
          <h3>{app.jobTitle}</h3>
          <p>{app.name}</p>
          <a href={app.resume} target="_blank">View Resume</a>
        </div>
      ))}
    </div>
  );
}
