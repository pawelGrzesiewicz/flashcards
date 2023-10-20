export async function getDecks(signal) {
  const response = await fetch("/api/v1/decks", {
    signal,
  });
  return response.json();
}
