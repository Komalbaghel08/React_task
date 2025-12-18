export function canApply() {
  const last = localStorage.getItem("lastApply");
  if (last && Date.now() - last < 20000) return false;
  localStorage.setItem("lastApply", Date.now());
  return true;
}
