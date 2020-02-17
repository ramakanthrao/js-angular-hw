'use strict';
var assert = require('assert');
var task = require('../src/find-deck-card-id');
describe('HW-01: String: ', function() {
	it('getCardId should return the index of card in the initial deck', function() {
		[
			 'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
			 'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
			 'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
			 'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
		].forEach((val, index) => {
			assert.equal(
				index,
				task.getCardId(val),
				`Invalid id for card '${val}':`
			)
		});
	   
	});
});

