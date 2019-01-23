const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const dotenv = require('dotenv').config();

const app = express();
// const OAuth2 = google.auth.OAuth2;

// Views setup
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Body Parser setup
app.use(bodyParser.urlencoded({ extended: false } ));
app.use(bodyParser.json());

// OAuth2 setup
// const oauth2Client = new OAuth2(
//     process.env.CLIENT_ID,
//     process.env.CLIENT_SECRET,
//     "https://developers.google.com/oauthplayground/"
// );

// oauth2Client.setCredentials({
//     refresh_token: process.env.REFRESH_TOKEN
// });

// let accessToken = '';

// async function getTokens() {
//     const tokens = await oauth2Client.refreshAccessToken();
//     let accessToken = tokens.credentials.access_token;
// }

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
        // host: 'smtp.gmail.com',
        // port: '465',
        service: "gmail",
        // secure: true,
        auth: {
            // type: "OAuth2",
            // user: "stevenremen.app@gmail.com",
            // clientId: '110101864479-jk4f17o8ov47gp1b3cf1s4nfcmp6o64v.apps.googleusercontent.com',
            // clientSecret: 'D-hvDPt4dJLEqcPsu8tg6qZH',
            // refreshToken: '1/qsQAbOKOGjjHYjLxzA-d0Sn601ooDI0KryW9bNzqqaI',
            // accessToken: accessToken
            user: 'stevenremen.app@gmail.com',
            pass: process.env.GMAIL_APP_SPECIFIC_PASSWORD
        },
        // tls: {
        //     ciphers: 'SSLv3',
        //     rejectUnauthorized: false
        // }
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