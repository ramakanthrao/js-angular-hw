/**
 * Returns playid card id.
 * 
 * Playing cards inittial deck inclides the cards in the following order:
 * 
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 * 
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 * 
 * @param {string} value
 * @return {number}
 * 
 *   @example
 *   'A♣' => 0
 *   '2♣' => 1 
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
    let symbol = {
        '♣': 0,
        '♦': 1,
        '♥': 2,
        '♠': 3,
        'A': 1,
        'J': 11,
        'Q': 12,
        'K': 13
    }
    if (value.length === 2) {
        if (!isNaN(value.charAt(0))) {
            return (value.charAt(0) - 1) + (13 * symbol[value.charAt(1)])
        }
        else {
            return (symbol[value.charAt(0)] - 1 + (13 * symbol[value.charAt(1)]))
        }
    }
    else {
        return (9 + (13 * symbol[value.charAt(2)]))
    }
    throw new Error('Not implemented');
}
module.exports = {
    getCardId: getCardId
};