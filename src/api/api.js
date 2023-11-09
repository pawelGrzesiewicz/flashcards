export async function getData(endpoint, signal) {
  const response = await fetch(`/api/v1/${endpoint}`, {
    signal,
  });
  return response.json();
}

export async function getDeckAndFlashcards(deckId, signal) {
  const deckResponse = await getData(`decks/${deckId}`, signal);
  const flashcardsResponse = await getData(
    `flashcards?setId=${deckResponse.id}`,
    signal,
  );

  return [deckResponse, flashcardsResponse];
}