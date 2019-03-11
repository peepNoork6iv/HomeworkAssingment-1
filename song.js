//declaring a object favorite song //////////////////////////////////
let favoriteSong = {
    title : "Highway to Hell",
    band : "AC/DC",
    genre : "Hard rock",
    length : 3.27,
    year : 1979,
    lyrics : {
        firstVerse : [
            "Living easy, living free",
            "Season ticket on a one way ride",
            "Asking nothing, leave me be",
            "Taking everythin' in my stride",
            "Don't need reason",
            "Don't need rhyme",
            "Ain't nothing I’d rather do",
            "Goin' down",
            "Party time",
            "My friends are gonna be there too, yeah"
        ],
        chorus : [
            "I’m on the highway to hell",
            "On the highway to hell",
            "Highway to hell",
            "I’m on the highway to hell"
        ],
        secondVerse : [
            "No stop signs",
            "Speed limit",
            "Nobody's gonna slow me down",
            "Like a wheel",
            "Gonna spin it",
            "Nobody's gonna mess me around",
            "Hey Satan",
            "Payin' my dues",
            "Playing in a rocking band",
            "Hey mama",
            "Look at me",
            "I’m on the way to the promised land",
            "Woo!"
        ],
        puente : [
            "Don't stop me",
            "Heh, heh!"
        ],
        lastChorus : [
            "I’m on the highway to hell",
            "On the highway to hell",
            "Highway to hell",
            "I’m on the highway to hell",
            "(Highway to hell) I’m on the highway to hell",
            "(Highway to hell) highway to hell",
            "(Highway to hell) highway to hell",
            "(Highway to hell)"
        ],
        outro : [
            "And I’m going down",
            "All the way",
            "I’m on the highway to hell"
        ]
    },
    authors : ["Bon Scott", " Angus Young", " Malcolm Young"],
    goodSong : true,
};


//declaring variables by picking them out of object favorite song ///

let title = favoriteSong.title;
let band = favoriteSong.band;
let genre = favoriteSong.genre;
let length = favoriteSong.length;
let year = favoriteSong.year;
let firstVerse = favoriteSong.lyrics.firstVerse;
let secondVerse = favoriteSong.lyrics.secondVerse;
let chorus = favoriteSong.lyrics.chorus;
let lastChorus = favoriteSong.lyrics.lastChorus;
let puente = favoriteSong.lyrics.puente;
let outro = favoriteSong.lyrics.outro;
let authors = favoriteSong.authors;
let goodSong = favoriteSong.goodSong;

//at last lets console log favoriteSong object

console.log("//////////////////////////////////");
console.log(favoriteSong);
console.log("//////////////////////////////////");

//console.log-ing all the variables //////////////////////////////////

console.log(title);
console.log(band);
console.log("Genre: " + genre);
console.log("Length: " + length);
console.log("Year: " + year);
console.log("Song authors: " + authors);
console.log("Good song: " + goodSong);
console.log(firstVerse);
console.log(chorus);
console.log(secondVerse);
console.log(chorus);
console.log(puente);
console.log(lastChorus);
console.log(outro);

