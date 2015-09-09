describe('pigLatin', function() {
  it("enter a string and recieve a string", function() {
    expect(pigLatin("pig")).to.be.a("string");
  });

  it("adds -ay to words that start with a vowel", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });


});
