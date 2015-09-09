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

  it("move constants at the begining of a word to the end and adds -ay", function() {
    expect(pigLatin("chai")).to.equal("aichay");
  });


});
