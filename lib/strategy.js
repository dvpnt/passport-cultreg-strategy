'use strict';

var BaseStrategy = require('passport-dvpnt-oauth2-strategy').Strategy;
var util = require('util');


function Strategy(options, verify) {
	options.authorizationURL = options.authorizationURL ||
		'https://cultreg.ru/auth/oauth2/authorize';
	options.tokenURL = options.tokenURL ||
		'https://cultreg.ru/auth/oauth2/token';

	BaseStrategy.call(this, options, verify);

	this.name = 'cultreg';
	this._profileURL = options.profileURL || 'https://cultreg.ru/api/1.0/me';
}

util.inherits(Strategy, BaseStrategy);

Strategy.prototype.parseProfile = function(json) {
	var user = json.user;
	var profile = {};

	profile.id = user._id;
	profile.displayName = user.fullName;
	profile.name = {
		familyName: user.lastName,
		givenName: user.firstName
	};

	profile.gender = user.gender;
	profile.profileUrl = 'https://cultreg.ru/cabinet';

	profile.emails = [{value: user.email}];

	profile.photos = [];

	return profile;
};

module.exports = Strategy;
