require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sendEmail } = require("./middleware/sendEmail");
const app = express();

const port = process.env.PORT || 5050;

// allows to send information from frontend to backend
app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.get("/", (req, res) => {
    res.send('connected to backend successfully')
});

// CONTACT
app.post("/send_email", (req, res) => {
    sendEmail(req.body)
        .then((response) => res.send(response.message))
        .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () =>
    console.log(`server is listening on port ${port}`)
);