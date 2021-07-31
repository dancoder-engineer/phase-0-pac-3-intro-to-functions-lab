function shout(aWord) { return aWord.toUpperCase(); }
//1) receives one argument and returns it in all caps

function whisper(aWord) { return aWord.toLowerCase(); }
//2) receives one argument and returns it in all lowercase

function logShout(aWord) { console.log(aWord.toUpperCase()); }
//3) takes a string argument and logs it in all caps using console.log()

function logWhisper(aWord) { console.log(aWord.toLowerCase()); }
//4) takes a string argument and logs it in all lowercase using console.log()

function sayHiToGrandma(aWord) { 
    if (aWord === aWord.toLowerCase()) { return  "I can't hear you!"; }
    else if (aWord === aWord.toUpperCase()) { return `YES INDEED!`; }
    else if (aWord === `I love you, Grandma.`) { return "I love you, too." }


}
//5) returns "I can't hear you!" if `string` is lowercase
//6) returns "YES INDEED!" if `string` is uppercase
//7) returns "I love you, too." if `string` is "I love you, Grandma."`