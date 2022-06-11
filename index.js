const express = require('express');
const userRoutes = require('./routes/userRoute');
const newsRoutes = require('./routes/newsRoute');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(userRoutes);
app.use("/articles",newsRoutes);
// Handling Errors
app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));