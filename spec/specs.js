describe('pigLatin', function() {
    it("enter a string and recieve a string", function() {
        expect(pigLatin("pig")).to.be.a("string");
    });

    it("adds -ay to words that start with a vowel", function() {
        expect(pigLatin("apple")).to.equal("appleay");
    });

    it("move constant at the begining of a word to the end and adds -ay", function() {
        expect(pigLatin("dog")).to.equal("ogday");
    });

    it("move two constants at the begining of a word to the end and adds -ay", function() {
        expect(pigLatin("chai")).to.equal("aichay");
    });

    it("move three constants at the begining of a word to the end and adds -ay", function() {
        expect(pigLatin("scream")).to.equal("eamscray");
    });

});

describe('sentanceMill', function() {
    it("enter a string and recieve a string", function() {
        expect(sentanceMill("hello world")).to.be.a("string");
    });

    it("uses pigLatin() to translate a word", function() {
        expect(sentanceMill("hello")).to.equal("ellohay");
    })
});
