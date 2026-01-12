export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: (request, response) => {
      response.end("Teste de rota")
    }
  }
]