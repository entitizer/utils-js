'use strict';

var _ = require('lodash');
var Promise = require('bluebird');
var utils = require('./utils');

var libs = {
	_: _,
	Promise: Promise
};

module.exports = _.assign({}, utils, libs);
