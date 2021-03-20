const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
  };

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

/**
 * get presentación
 */
app.get("/", (req, res) => {
    res.json({ message: "‎Bienvenido a la aplicación" });
});

/**
 * get texto invertido
 */
app.use("/iecho", require("./routes/texts"));

app.listen(3000, () => {
    console.log("Server on port", 3000);
})

module.exports = app;