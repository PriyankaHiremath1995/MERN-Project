const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDb = require("./config/db.js")
const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();
connectDb();

// to accept json data
app.use(express.json());

app.get("/", (req,res) => {
res.send("API is running..")
})

app.get("/api/notes", (req,res) => {
res.json(notes)
})

app.use("/api/users", userRoutes);
app.use("/api/message", messageRoutes);

app.use(notFound)
app.use(errorHandler)

//Creating server at PORT
const PORT = process.env.PORT || 8000
app.listen(PORT, console.log(`Server started on port ${PORT}`))