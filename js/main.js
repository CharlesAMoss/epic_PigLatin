var pigLatin = function(input) {

    var vowels = ["a", "e", "i","o","u"];
    if (input.indexOf(vowels)){
        input = input + "ay";
    };

    return input;
};
