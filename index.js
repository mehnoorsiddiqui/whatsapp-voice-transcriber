require("dotenv").config();
const express = require("express");
const body_parser = require("body-parser");

const app = express().use(body_parser.json());

const receive = require("./WhatsAppPostWebhook");

const token = process.env.WEBHOOK_VERIFY_TOKEN

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
    if (
      req.query['hub.mode'] == 'subscribe' &&
      req.query['hub.verify_token'] == token
    ) {
      res.send(req.query['hub.challenge']);
    } else {
      res.sendStatus(400);
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
