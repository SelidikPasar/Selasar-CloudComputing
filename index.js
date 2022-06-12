const express = require('express');
const userRoutes = require('./routes/userRoute');
const newsRoutes = require('./routes/newsRoute');
const priceRoutes = require('./routes/priceRoute');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use("/",userRoutes);
app.use("/articles",newsRoutes);
app.use("/price",priceRoutes);


// Handling Errors
app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));