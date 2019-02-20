/**
*   Credit Card Validator
*/

var CreditCard = CreditCard || {};

CreditCard.Validators = (function () {
    /**
     *   Credit card validator
     *
     *   @param  {String} cardNumber             - credit cards number, accept only digits, dashes or spaces
     *
     */
     let isValidCard = (cardNumber) => {
        if (/[^0-9-\s]+/.test(cardNumber)) {
            return false;
        }
        let nCheck = 0, 
        nDigit = 0, 
        bEven = false;
        cardNumber = cardNumber.replace(/\D/g, '');

        for (let n = cardNumber.length - 1; n >= 0; n--) {
            let cDigit = cardNumber.charAt(n);
            nDigit = parseInt(cDigit, 10);

            if (bEven) {
                if ((nDigit *= 2) > 9) nDigit -= 9;
            }
            nCheck += nDigit;
            bEven = !bEven;
        }

        return (nCheck % 10) === 0;
    },

    /**
     *   Finds credit card's type
     *
     *   @param  {String} cardNumber             - credit cards number, accept only digits, dashes or spaces
     *
     */
     cardType = (cardNumber) => {
        let regExs = ['^4', '^(34|37)', '^5[1-5]', '^6011'];

        if (cardNumber.match(regExs[0]) !== null) {
            return 'Visa';
        } else if (cardNumber.match(regExs[1]) !== null) {
            return 'American Express';
        } else if (cardNumber.match(regExs[2]) !== null) {
            return 'MasterCard';
        } else if (cardNumber.match(regExs[3]) !== null) {
            return 'Discover';
        } else {
            return 'unknown credit card';
        }
    };

    return {
        isValidCard: isValidCard,
        cardType: cardType
    };

})();
