const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Simula l'API di login
app.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    if (email === "tarsier79mc@gmail.com" && password === "password123") {
        res.status(200).json({ message: "Login successful", token: "123456" });
    } else {
        res.status(401).json({ message: "Utente non trovato" });
    }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
