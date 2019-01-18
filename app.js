const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const dotenv = require('dotenv').config();

const app = express();
const OAuth2 = google.auth.OAuth2;

// Views setup
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Body Parser setup
app.use(bodyParser.urlencoded({ extended: false } ));
app.use(bodyParser.json());

// OAuth2 setup
const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground/"
);

oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
});

let accessToken = '';

async function getTokens() {
    const tokens = await oauth2Client.refreshAccessToken();
    let accessToken = tokens.credentials.access_token;
}

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/projects', (req, res) => {
    res.render('projects');
});

app.get('/contact', (req, res) => {
    res.render('contact');
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
            type: "OAuth2",
            user: "stevenremen.app@gmail.com",
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: accessToken
        },
        // tls: {
        //     rejectUnauthorized: false
        // }
    });

    const mailOptions = {
        from: '"Portfolio Contact" <stevenremen.app@gmail.com>',
        to: 'remenapp@gmail.com',
        subject: 'Portfolio Contact Request',
        html: output
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.render('contacterror');
        }
        res.render('contactsent');
    });
});

app.listen(3000, () => {
    console.log('running running');
});