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

    try {
        const massage = `
New CareFlow Appointment

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
            }
        );

        console.log("Telegram Response:", response.data);

        res.status(200).json({
            success: true,
            message: "Telegram message sent successfully"
        });

    } catch (error) {

        console.log(
            "Telegram Error:",
            error.response?.data || error.message
        );

        res.status(500).json({
            success: false,
            message: "Telegram message failed"
        });
    }
});
app.post('/contact', async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    try {
        const telegramMessage = `
New CareFlow Message

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}
        `;

        const response = await axios.post(
            `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                chat_id: process.env.TELEGRAM_CHAT_ID,
                text: telegramMessage,
            }
        );

        res.status(200).json({
            success: true,
            message: "Message sent successfully"
        });

    } catch (error) {
        console.log(
            "Telegram Error:",
            error.response?.data || error.message
        );

        res.status(500).json({
            success: false,
            message: "Message not sent"
        });
    }
});
app.listen(5000, () => {
    console.log("server is runing in port 5000");

})
