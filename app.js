const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

const app = express();

// Views setup
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Body Parser setup
app.use(bodyParser.urlencoded({ extended: false } ));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/projects', (req, res) => {
    res.render('projects');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('*', (req, res) => {
    res.render('404');
});

app.post('/contactsent', (req, res) => {
    // console.log(req.body);
    const output = `
        <p>You have a new contact request!</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'stevenremen.app@gmail.com',
            pass: process.env.GMAIL_APP_SPECIFIC_PASSWORD
        },
    });

    const mailOptions = {
        from: '"Portfolio Contact" <stevenremen.app@gmail.com>',
        to: 'remenapp@gmail.com',
        subject: `Portfolio Contact Request from ${req.body.name}`,
        html: output
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            // res.render('contacterror', {errorMessage: error});
            res.render('contacterror');
            return;
        }
        res.render('contactsent');
    });
});

app.listen(3000, () => {
    console.log('running running');
});