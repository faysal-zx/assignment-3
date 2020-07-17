// feetToMile
function feetToMile(mile) {
    var feet = mile / 5280 ;
    return feet;
}
var value = feetToMile(399);
console.log(value);

// woodCalculator
function woodCalculator(bed, table, chair, shelf){
    var forBed = bed * 10;
    var forTable = table * 8;
    var forChair = chair * 5;
    var forShelf = shelf * 15;
    var totalWood = forBed + forTable + forChair + forShelf;
    return totalWood;
}
var result = woodCalculator(3, 4, 8, 2);
console.log(result);

// brickCalculator
function brickCalculator(first10Floor, second20Floor){
    var first = first10Floor * 8000;
    var second = second20Floor * 10000;
    var totalbricks = first + second;
    return totalbricks;
}
var result = brickCalculator(10, 20);
console.log(result);

// tinyFriend
function tinyFriend(names) {
    var words = names.split(' ');
    var shortest = words.reduce((shortestWord, currentWord) => {
      return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, words[0]);
    return shortest;
  }
  console.log(tinyFriend("Tony, Stark, Lio, Josieph"));