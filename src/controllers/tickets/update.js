export function update({ request, response, database }) {
  const { id } = request.params;
  console.log(request.body);
  if (!request.body) {
    return response.writeHead(403).end();
  }
  const { equipment, description, status } = request.body;

  return response.end(equipment);
}
