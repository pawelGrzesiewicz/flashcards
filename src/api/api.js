export async function getData(endpoint, signal) {
  const response = await fetch(`/api/v1/${endpoint}`, {
    signal,
  });
  return response.json();
}
