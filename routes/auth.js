const express = require('express');
const router  = express.Router();
const User = require('../models/User.model');
const passport = require('passport');

const bcrypt = require('bcrypt');
const bcryptSalt = 10;

router.get('/sign-up', (_, res) => res.render('sign-up', {signupActive: true}))

router.post('/sign-up', (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.render('sign-up', { errorMessage: 'enter username & password'});
    return;
  }

  User.findOne({ username })
    .then((user) => {

      if (user !== null) {
        res.render('sign-up', { message: 'user already exists' });
        return;
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      const newUser = new User({
        username,
        password: hashPass
      });

      newUser
        .save()
        .then(user => {
          console.log(`new user created: ${user}`);
          res.redirect('/')
        })
        .catch(err => console.error(`error while saving user: ${err}`))

    }).catch(err => next(err));

});

router.get('/log-in', (_, res) => res.render('login', {loginActive: true}));

router.post('/log-in', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/log-in'
}));

router.get('/log-out', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
