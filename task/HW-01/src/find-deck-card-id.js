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
    var n = value.charAt(0);
    var sy = value.charAt(1);
    if(n=='1'){
         sy = value.charAt(2);
    }
    
    var num1;
    switch(n) {
    case 'A': num1 = 0; break;
    case '2': num1 = 1; break;
    case '3': num1 = 2; break;
    case '4': num1 = 3; break;
    case '5': num1 = 4; break;
    case '6': num1 = 5; break;
    case '7': num1 = 6; break;
    case '8': num1 = 7; break;
    case '9': num1 = 8; break;
    case '1': num1 = 9; break;
    case 'J': num1 = 10; break;
    case 'Q': num1 = 11; break;
    case 'K': num1 = 12; break;
    }
    switch(sy){
        case '♣': num2 = 0; break;
        case '♦': num2 = 13; break;
        case '♥': num2 = 26; break;
        case '♠': num2 = 39; break;
    }
    
    return num1+num2;
}


module.exports = {
    getCardId: getCardId
};