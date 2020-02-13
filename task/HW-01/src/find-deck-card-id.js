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
 * @example
 *   'A♣' => 0
 *   '2♣' => 1 
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
    var tree = 1,
        diamond = 2,
        hearts = 3,
        spades = 4,
        A = 1,
        J = 11,
        Q = 12,
        K = 13;

    var rowValue, columVal, cardSymbol, cardValue;
    if (value.length == 2) {
        cardSymbol = value.charAt(1);
        cardValue = value.charAt(0);
    } else if (value.length == 3) {
        cardSymbol = value.charAt(2);
        cardValue = value.charAt(0) + value.charAt(1);
    }
    if (cardSymbol != undefined && cardValue != undefined) {
        if (cardSymbol == '♣')
            rowValue = 1;
        else if (cardSymbol == '♦')
            rowValue = 2;
        else if (cardSymbol == '♥')
            rowValue = 3;
        else if (cardSymbol == '♠')
            rowValue = 4;
        if (cardValue == 'A')
            columVal = 1;
        else if (cardValue == 'J')
            columVal = 11;
        else if (cardValue == 'Q')
            columVal = 12;
        else if (cardValue == 'K')
            columVal = 13;
        else {
            columVal = parseInt(cardValue);
        }
        return (((rowValue - 1) * 13) + columVal - 1);
    }
}


module.exports = {
    getCardId: getCardId
};