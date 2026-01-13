export function patch({ request, response, database }) {
  const { id } = request.params

  const patched = database.update("tickets", id, { status: "closed" })

  if (patched) 
    return response.end("Ticket closed successfully")
  else 
    return response.writeHeader(403).end("Wrong ID")
}