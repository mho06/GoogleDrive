const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/auth', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    // Here, you should implement your real authentication logic
    // For example, checking email and password against a database
    if (email === "test@example.com" && password === "test123") {
        req.session.loggedin = true;
        req.session.email = email;
        res.redirect('/homepage'); // Redirect to homepage after successful login
    } else {
        res.send('Invalid login credentials!');
    }
});

router.get('/homepage', (req, res) => {
    if (req.session.loggedin) {
        res.render('homepage', {
            email: req.session.email
        });
    } else {
        res.redirect('/'); // Redirect to login if not logged in
    }
});

module.exports = router;
