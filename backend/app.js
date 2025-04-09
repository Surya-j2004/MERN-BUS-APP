var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
const cors = require('cors');

var app = express();

// ✅ Correct CORS setup before any routes/middleware
const allowedOrigins = [
    "http://localhost:3000", // local frontend
    "https://mern-bus-74t2p8fwu-jonnagadla-suryas-projects.vercel.app" // deployed Vercel frontend
];

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

app.options('*', cors()); // ✅ handle preflight requests


// ✅ Login and Register
require('./auth/auth');
const login = require('./routes/login');
const loggedInPage = require('./routes/loggedInUser');
const bookingRoute = require('./routes/routeSelection');
var registerRouter = require('./routes/register');


// ✅ MongoDB Config
const DB_URL = require('./config/keys').MongoURI;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        throw err;
    });


// ✅ Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// ✅ Routes
app.use('/', login);
app.use('/booking', bookingRoute);
app.use('/register', registerRouter);
app.use('/user', passport.authenticate('jwt', { session: false }), loggedInPage);

module.exports = app;
