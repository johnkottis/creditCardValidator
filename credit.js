/**
*   CreditCard validting functions
*   Date: 06/03/2016
*   Dev: John Kottis
*/

var CreditCard = CreditCard || {};

CreditCard.Validators = (function () {



    /**
    * Check if input changed
    * 
    * @cardNumber {String} credit cards number, accept only digits, dashes or spaces
    **/
    function isValid(cardNumber) {
        if (/[^0-9-\s]+/.test(cardNumber)) {
            return false;
        }
        var nCheck = 0, 
            nDigit = 0, 
            bEven = false;
            cardNumber = cardNumber.replace(/\D/g, '');

        for (var n = cardNumber.length - 1; n >= 0; n--) {
            var cDigit = cardNumber.charAt(n);
                nDigit = parseInt(cDigit, 10);

            if (bEven) {
                if ((nDigit *= 2) > 9) nDigit -= 9;
            }

            nCheck += nDigit;
            bEven = !bEven;
        }

        return (nCheck % 10) === 0;
    }


    /**
    * Checks card type
    * 
    * @cardNumber {String} credit cards number, accept only digits, dashes or spaces
    **/
    function cardType(cardNumber) {            
        var regularExpres = new RegExp('^4');
        if (cardNumber.match(regularExpres) !== null) {
            return 'Visa';
        }

        regularExpres = new RegExp('^(34|37)');
        if (cardNumber.match(regularExpres) !== null) {
            return 'American Express';
        }

        regularExpres = new RegExp('^5[1-5]');
        if (cardNumber.match(regularExpres) !== null)
            return 'MasterCard';

        regularExpres = new RegExp('^6011');
        if (cardNumber.match(regularExpres) !== null)
            return 'Discover';

        return '';
    }


    return {
        isValid: isValid,
        cardType: cardType
    };

})();
