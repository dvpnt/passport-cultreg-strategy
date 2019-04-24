# passport-cultreg-strategy

[![Build Status](https://api.travis-ci.org/dvpnt/passport-cultreg-strategy.svg)](https://travis-ci.org/dvpnt/passport-cultreg-strategy)
[![Coverage Status](https://coveralls.io/repos/github/dvpnt/passport-cultreg-strategy/badge.svg?branch=master)](https://coveralls.io/github/dvpnt/passport-cultreg-strategy?branch=master)
[![NPM Version](https://img.shields.io/npm/v/passport-cultreg-strategy.svg)](https://www.npmjs.com/package/passport-cultreg-strategy)

[Passport](http://passportjs.org/) strategy for authenticating with [Cultreg](https://cultreg.ru)
using the OAuth 2.0 API.

## Install
    $ npm i passport-cultreg-strategy

## Usage

#### Configure Strategy

```js
var passport = require('passport'),
    CultregStrategy = require('passport-cultreg-strategy').Strategy;

passport.use(new CultregStrategy({
    clientID: '<app id>',
    clientSecret: '<secret key>',
    callbackURL: 'http://localhost:3000/auth/cultreg/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({cultregId: profile.id}, function (err, user) {
      return cb(err, user);
    });
  }
));
```

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'cultreg'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

```js
app.get('/auth/cultreg',
  passport.authenticate('cultreg'));

app.get('/auth/cultreg/callback',
  passport.authenticate('cultreg', {failureRedirect: '/login'}),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
```

## License

[The MIT License](https://raw.githubusercontent.com/dvpnt/passport-cultreg-strategy/master/LICENSE)
