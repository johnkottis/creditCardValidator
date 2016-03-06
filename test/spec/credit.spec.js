describe('isValid', function () {
    it('checks if function is defined', function () {
        expect(CreditCard.Validators.isValid).not.toBeUndefined();
    });
});

describe('cardType', function () {
    it('checks if function is defined', function () {
        expect(CreditCard.Validators.cardType).not.toBeUndefined();
    });
});