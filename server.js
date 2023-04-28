const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const port = process.env.PORT;

// connect DB
mongoose.set('strictQuery', false);
mongoose
    .connect(
        `mongodb+srv://${process.env.PROJECT}:${process.env.PASSWORD}@cluster0.33icpgj.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`,
    )
    .then(() => {
        console.log('Connect successfully !!!');
    })
    .catch(() => {
        console.log('Connect failed');
    });

// setup router
app.use('/api', require('./server/routes'));
app.use('/uploads', express.static('./uploads'));
app.use(function (req, res, next) {
    next(createError(404));
});

// app.use(function (err, req, res, next) {
//     res.locals.message = err.message;
//     res.locals.error = req.app.get("env") === "development" ? err : {};
//     res.status(err.status || 500);
//     res.end("Err App");
// });

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
