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

describe('sentenceMill', function() {
    it("enter a string and recieve a string", function() {
        expect(sentenceMill("hello world")).to.be.a("string");
    });

    it("uses pigLatin() to translate a word", function() {
        expect(sentenceMill("hello")).to.equal("ellohay");
    });

    it("uses pigLatin() to translate 2 words", function() {
        expect(sentenceMill("hello world")).to.equal("ellohay orldway");
    });

    it("uses pigLatin() and compsensates for punctuaton", function() {
        expect(sentenceMill("squid, is cool!")).to.equal("idsquay, isay oolcay!");
    });


});
