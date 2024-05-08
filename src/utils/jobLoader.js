export default async function jobLoader({ params }) {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
}