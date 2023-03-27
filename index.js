require("dotenv").config();
const express = require("express");
const body_parser = require("body-parser");

const app = express().use(body_parser.json());

const receive = require("./WhatsAppPostWebhook");

app.post("/webhook", async (req, res) => {
  try {
    await receive(req.body);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(404);
  }
});

app.get("/webhook", (req, res) => {
  try {
    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];

    if (
      mode &&
      token &&
      mode === "subscribe" &&
      process.env.VERIFY_TOKEN === token
    ) {
      console.log("webhook verified");
      return res.status(200).send(challenge);
    } else {
      return res.sendStatus(403);
    }
  } catch (err) {
    console.log("error", err);
    return res.sendStatus(500);
  }
});

app.get("/", (req, res) => {
  res.json({
    success: true,
    info: "WhatsApp API | 2023",
    status: "healthy",
    error: null,
  });
});

// Sets server port and logs message on success
app.listen(process.env.PORT || 3000, () => console.log("webhook is listening"));
