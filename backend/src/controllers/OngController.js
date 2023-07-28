const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async index(request, response) {
    // criado conexão e select p listar e retornar as ongs
    const ongs = await connection("ongs").select("*");
    return response.json(ongs);
  },

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString("HEX"); // criando id de forma randomica

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return response.json({ id });
  },
};
