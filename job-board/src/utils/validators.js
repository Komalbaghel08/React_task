export function validateForm(data) {
  if (!data.name || !data.email || !data.resume) return "All fields are required.";
  if (!data.email.includes("@")) return "Enter a valid email.";
  if (!data.resume.startsWith("http")) return "Resume must be a valid URL.";
  return null;
}
