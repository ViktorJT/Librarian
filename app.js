require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session      = require('express-session');
const MongoStore   = require('connect-mongo')(session);
const bcrypt       = require('bcrypt');
const passport     = require('passport');
const LocalStrategy= require('passport-local').Strategy;
const User         = require('./models/User.model');

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

require('./configs/db.config');

// Auth stuff
app.use(
  session({
    secret: 'our-passport-local-strategy-app',
    store: new MongoStore( { mongooseConnection: mongoose.connection }),
    resave: true,
    saveUninitialized: true
  })
)
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id)
    .then(user => cb(null, user))
    .catch(err => cb(err));
});

passport.use(new LocalStrategy(
  {
    usernameField: 'username',
    passwordField: 'password'
  },
  (username, password, done) => {
    User.findOne({ username })
      .then(user => {
        if (!user) {
          return done(null, false, { message: 'incorrect username' });
        }

        if (!bcrypt.compareSync(password, user.password)) {
          return done(null, false, { message: 'incorrect password' });
        }

        done(null, user);

      })
      .catch(err => done(err));
  }
));

// this should allow me to find a login variable in the locals to hide/show 
app.use(function (req, res, next) {
  res.locals.login = req.isAuthenticated();
  console.log(`authenticated?: ${res.locals.login}`);
  next();
});

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.png')));

// default value for title local
app.locals.title = 'Library';

const auth = require('./routes/auth');
const search = require('./routes/search');
const books = require('./routes/books');
app.use('/', auth);
app.use('/', search);
app.use('/', books);

module.exports = app;
