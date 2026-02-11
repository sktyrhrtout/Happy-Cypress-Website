const express = require('express');
const path = require('path');
const app = express();
const PORT = 3002; // Avoiding 3000 (Receipts) and 3001 (Trello)

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// AI Chatbot Backend Logic
const FAQ = [
    { keywords: ['price', 'cost', 'quote', 'estimate', 'how much'], response: "You can get an instant estimate using our calculator on the website! Most jobs range from $250 to $600 depending on the size of your home." },
    { keywords: ['service', 'clean', 'window', 'do you'], response: "We offer professional window cleaning, track deep cleaning, screen washing, and hard water removal for homes in Monterey and Salinas." },
    { keywords: ['where', 'area', 'location', 'monterey', 'salinas'], response: "We proudly serve all of Monterey County, including Salinas, Monterey, Carmel, Marina, and Pacific Grove." },
    { keywords: ['who', 'chad', 'owner'], response: "Happy Cypress is owned and operated by Chad Gile. He personally ensures every job meets our 5-star standards." },
    { keywords: ['schedule', 'book', 'appointment', 'when'], response: "Once you submit a quote request, Chad will reach out to you within 24 hours to schedule a convenient time." },
    { keywords: ['hi', 'hello', 'hey'], response: "Hello! I'm the Happy Cypress assistant. How can I help you with your window cleaning today?" }
];

app.post('/api/chat', (req, res) => {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });

    const lowerMsg = message.toLowerCase();
    let reply = "I'm not sure about that. Would you like me to have Chad call you to discuss it? Just leave your number!";

    for (const item of FAQ) {
        if (item.keywords.some(k => lowerMsg.includes(k))) {
            reply = item.response;
            break;
        }
    }

    res.json({ reply });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Happy Cypress 2.0 running at http://0.0.0.0:${PORT}`);
});
