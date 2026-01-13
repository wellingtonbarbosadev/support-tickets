export function update({ request, response, database }) {
  const { id } = request.params;
  if (!request.body) {
    return response.writeHead(403).end();
  }
  const { equipment, description } = request.body;

  database.update("tickets", id , {
    equipment,
    description
  })

  return response.end(equipment);
}
