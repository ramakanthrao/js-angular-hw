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
    var suitValue = value.charAt(0);
    var suit = value.charAt(1);
    var firstValue;
    var secondValue;
    if(suitValue == '1'){
        suit = value.charAt(2);
    }
    switch(suitValue) {
    case 'A':
        firstValue = 0;
        break;
    case '2':
        firstValue =  1;
        break;
    case '3':
        firstValue =  2;
        break;
    case '4':
        firstValue =  3;
        break;
    case '5':
        firstValue =  4;
        break;
    case '6':
        firstValue =  5;
        break;
    case '7':
        firstValue =  6;
        break;
    case '8':
        firstValue =  7;
        break;
    case '9':
        firstValue =  8;
        break;
    case '1':
        firstValue =  9;
        break;
    case 'J':
        firstValue =  10;
        break;
    case 'Q':
        firstValue =  11;
        break;
    case 'K':
        firstValue =  12;
        break;
         
    } 

    switch(suit) {
        case '♣':
            secondValue = 0;
            break;
        case '♦':
            secondValue =  13;
            break;
        case '♥':
            secondValue =  26;
            break;
        case '♠':
            secondValue =  39;
            break;
                     
        } 
        return (firstValue + secondValue);
}


module.exports = {
    getCardId: getCardId
};