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

app.post("/callback", async (req, res) => {

    const { name, age, gender, phone, department, doctor, reason } = req.body;

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Gender:", gender);
    console.log("Phone:", phone);
    console.log("Department:", department);
    console.log("Doctor:", doctor);
    console.log("Reason:", reason);

    try {
        const massage = ` New CareFlow Appointment

    Name: ${name}
    Age: ${age}
    Gender: ${gender}
    Phone: ${phone}
    Department: ${department}
    Doctor: ${doctor}
    Reason: ${reason}
    `;

        const response = await axios.post(
            `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                chat_id: process.env.TELEGRAM_CHAT_ID,
                text: massage,
            },
        );

    } catch (error) {
        console.log("Telegram Error:", error.response?.data || error.message);

    }
    res.json({
        success: true,
        message: "Callback request received"
    });
});
app.listen(5000, () => {
    console.log("server is runing in port 5000");

})
