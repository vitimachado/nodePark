export const db = {
  users: [
    {
      cpf: "12345678901",
      name: "Vitor",
      apiToken: "ui123gkhj12g4j42g1kg431kg421kjg42hjkjkjhk21hjk424hjkhj412v4ernmvmn412b",
      password: "123456"
    },
    {
      cpf: "10987654321",
      name: "Rotiv",
      apiToken: "jedfswhjhkwjhj2ki34rjkl4j4309ur4u03ufjr9e0hjfed]iwjnhfidi304u8r3490423",
      password: "654321"
    }
  ],
  extracts: [
      {
        cpf: "12345678901",
        extracts: [{
            "valor": "29.90",
            "garagem": "Paulista",
            "codGaragem": "111",
            "dataEntrada": "2020-03-25T12:00:00Z",
            "dataSaida": "2020-03-25T13:00:00Z",
            "endereco": "AV PAULISTA 900"
          },
          {
            "valor": "19.40",
            "garagem": "Faria Lima",
            "codGaragem": "078",
            "dataEntrada": "2020-03-23T12:00:00Z",
            "dataSaida": "2020-03-23T12:31:00Z",
            "endereco": "AV BRIGADEIRO FARIA LIMA 2200"
          },
          {
            "valor": "32.00",
            "garagem": "Pinheiros",
            "codGaragem": "233",
            "dataEntrada": "2020-03-26T10:04:00Z",
            "dataSaida": "2020-03-26T11:06:00Z",
            "endereco": "R JOAO MOURA 431"
        }]
      },      
      {
        cpf: "10987654321",
        extracts: [{
            "valor": "22.10",
            "garagem": "Ibirapuera",
            "codGaragem": "321",
            "dataEntrada": "2020-03-25T12:00:00Z",
            "dataSaida": "2020-03-26T10:04:00Z",
            "endereco": "AV IBIRAPUERA 911"
          }]
      }
  ]
}