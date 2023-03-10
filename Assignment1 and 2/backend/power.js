const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
    console.log(req.body);
    const Ans = Math.pow(req.body.message, req.body.n1);
    res.json({ Ans });
});

// app.get("/message", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

app.listen(5000, () => {
    console.log(`Server is running on port 5000.`);
});



