console.log(`There are ${characters.length} characters in the array.`);

// For each of these questions, write a function that returns the answer.

console.log(characters);
// How many characters names start with "A"?
const firstCharA = characters.filter(el => (el.name[0].toLowerCase() === "a"));
console.log(firstCharA);
console.log(firstCharA.length); // 168
// How many characters names start with "Z"?
const firstCharZ = characters.filter(el => (el.name[0].toLowerCase() === "z"));
console.log(firstCharZ);
console.log(firstCharZ.length); // 8
// How many characters are dead?
const deceased = characters.filter(el => (el.died !== ""));
console.log(deceased);
console.log(deceased.length); // 553
// Who has the most titles?
const names = characters.map(el => el.name)
var titleslength = characters.map(el => el.titles.length)
const titlesGalor = titleslength.reduce( function (prev, current, index) {
    return (prev > current) ? index : current
})
console.log(names[titlesGalor]);
// How many are Valyrian?
const valyrian = characters.filter(el => el.culture === "Valyrian");
console.log(valyrian.length); // 57
// What actor plays "Hot Pie" (and don't use IMDB)?
const charPlayed = characters.map(el => el.playedBy)
let playedIndex;
const charPlayedIndex = names.filter(function(data, index){
    // console.log(data)
    if (data == 'Hot Pie'){
        playedIndex = index;
    return index
    }
});
console.log(charPlayedIndex)
console.log(charPlayed[playedIndex]) //Ben Hawkey
// How many characters are *not* in the tv show?
const charOn = characters.map(el => el.tvSeries)
const charOff = charOn.filter(function(data){
    if (data == ""){
    return data
}
})
console.log(charOff.length)
// Produce a list characters with the last name "Targaryen"
var lastTarg = names.filter(data => {
    if (data.includes('Targaryen')){
    return data
}
})
console.log(lastTarg)
console.log(lastTarg.length) //49
// Create a histogram of the houses (it's the "allegiances" key)
 


// After you are finished, submit a Pull Request for code review.