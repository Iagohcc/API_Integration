const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Iagohcc:devihcc14789@clusterihcc-daflk.mongodb.net/TesteApi?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((data) => {
    console.log("Conexao efetuada com o banco", data.connection.readyState);
  })
  .catch((err) => console.log("Erro ao conectar no banco", err));

module.exports = mongoose;
