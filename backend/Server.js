require("dotenv").config();

const express = require("express");
const cors = require('cors');
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Backend is runing");
});

app.post("/callback", (req, res) => {

    const { name, age, gender, phone, department, doctor, reason } = req.body;
    console.log("Authkey:", process.env.MSG91_AUTHKEY);

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Gender:", gender);
    console.log("Phone:", phone);
    console.log("Department:", department);
    console.log("Doctor:", doctor);
    console.log("Reason:", reason);

    res.json({
        success: true,
        message: "Callback request received"
    });
});
app.listen(5000, () => {
    console.log("server is runing in port 5000");

})
