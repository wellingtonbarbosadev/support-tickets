export function deleteTicket({ request, response, database }) {
  const { id } = request.params;

  const deleted = database.deleteTicket("tickets", id)

  if (deleted) 
    return response.end("Deleted successful")
  else 
    return response.writeHeader(403).end("Wrong ID")
}
