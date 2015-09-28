'use strict';

var utils = require('../lib');
var assert = require('assert');

describe('utils', function() {
	it('has libs', function() {
		assert.ok(utils._);
		assert.ok(utils.Promise);
	});

	it('methods', function() {
		assert.equal('function', typeof utils.isLower);
		assert.equal('function', typeof utils.atonic);
	});
});
