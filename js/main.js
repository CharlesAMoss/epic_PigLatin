"use strict";

var pigLatin = function (input) {

    var firstLetter = input.slice(0, 1);
    var firstTwoLetters = input.slice(0, 2);
    var firstThreeLetters = input.slice(0, 3);
    var vowels = ["a", "e", "i", "o", "u"];
    var digraphs = ["bl", "br", "ch", "ck", "cl", "cr", "dr", "fl", "fr", "gh", "gl", "gr", "ng", "ph", "pl", "pr", "qu", "sc", "sh", "sk", "sl", "sm", "sn", "sp", "st", "sw", "th", "tr", "tw", "wh", "wr"];
    var trigraphs = ["nth", "sch", "scr", "shr", "spl", "spr", "squ", "str", "thr"];

    if (vowels.indexOf(firstLetter) > -1) {

        input = input + "ay";

    } else if (trigraphs.indexOf(firstThreeLetters) > -1) {

        input = input.slice(3) + firstThreeLetters + "ay";

    } else if (digraphs.indexOf(firstTwoLetters) > -1) {

        input = input.slice(2) + firstTwoLetters + "ay";

    } else {

        input = input.slice(1) + firstLetter + "ay";
    }

    return input;
};

var sentanceMill = function (input) {

    var splitString = input.split(" ");
    var output = "";
    for (var string of splitString) {
        pigLatin(string);
        output = output + " " + string;
    }

    return output;

};
