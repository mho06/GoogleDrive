const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Aa@123456',
    database: 'userDB'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL Server.');
});

app.get('/', (req, res) => {
    res.redirect('/signup');
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'signup.html'));
});

app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'signin.html'));
});

app.post('/signup', (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    const sql = `INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)`;
    db.query(sql, [firstName, lastName, email, hashedPassword], (err, result) => {
        if (err) {
            return res.status(500).send('Database error: ' + err.message);
        }
        res.send('User registered successfully!');
    });
});

app.post('/signin/email', (req, res) => {
    const { email } = req.body;
    const sql = `SELECT 1 FROM users WHERE email = ?`;
    db.query(sql, [email], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error: ' + err.message, error: true });
        }
        if (results.length > 0) {
            res.json({ message: 'Email exists', error: false });
        } else {
            res.json({ message: 'Email not found', error: true });
        }
    });
});
app.post('/signin/password', (req, res) => {
    const { email, password } = req.body;
    const sql = `SELECT password FROM users WHERE email = ?`;
    db.query(sql, [email], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error: ' + err.message, error: true });
        }
        if (results.length > 0) {
            const hashedPassword = results[0].password;
            bcrypt.compare(password, hashedPassword, (err, isMatch) => {
                if (err) {
                    return res.status(500).json({ message: 'Error checking password.', error: true });
                }
                if (isMatch) {
                    res.json({ message: 'Logged in successfully', error: false });
                } else {
                    res.json({ message: 'Password is incorrect', error: true });
                }
            });
        } else {
            res.json({ message: 'Email not found', error: true });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
