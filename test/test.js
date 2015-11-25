'use strict';

var utils = require('../lib');
var assert = require('assert');

describe('utils', function() {
	it('methods', function() {
		assert.equal('function', typeof utils.isLower);
		assert.equal('function', typeof utils.isNull);
	});
});
