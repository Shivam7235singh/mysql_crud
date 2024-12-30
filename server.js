const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const db = require('./config/db');

dotenv.config();

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/v1/student', require('./routes/studentRoutes'));

// Test Route
app.get('/test', (req, res) => {
    res.status(200).send('<h1>Welcome to the Student API</h1>');
});

// Server and Database Connection
const PORT = process.env.PORT || 8080;

(async () => {
    try {
        await db.query('SELECT 1'); // Test database connection
        console.log('Database connected successfully'.bgGreen.white);

        app.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`.bgMagenta.white);
        });
    } catch (error) {
        console.error('Database connection failed:', error.message.bgRed.white);
    }
})();
