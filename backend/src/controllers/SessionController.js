const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const { id } = request.body;

    const ong = await connection("ongs").where("id", id).select("name").first(); // retorna apenas um registro

    if (!ong) {
      return response
        .status(400)
        .json({ error: "Não existe uma ong com esse ID" });
    }
    return response.json(ong);
  },
};
