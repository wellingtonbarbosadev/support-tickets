export function patch({ request, response, database }) {
  const { id } = request.params;
  const { solution } = request.body || {};

  const updateData = { status: "closed" };

  if (solution) {
    updateData.solution = solution;
  }

  const patched = database.update("tickets", id, updateData);

  if (patched) return response.end("Ticket closed successfully");
  else return response.writeHeader(404).end("Wrong ID");
}
