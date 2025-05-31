const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const todoRoutes = require('./routes/todoRoutes');
require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const PORT = process.env.PORT || 3000;

const mongoUrl = process.env.MONGODB_URI;
mongoose.connect(mongoUrl, {
    dbName: "todoList" // Optional: specify your DB name
}).then(() => {
    console.log("Connected to MongoDB Atlas");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

// Register your routes here
app.use('/', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});