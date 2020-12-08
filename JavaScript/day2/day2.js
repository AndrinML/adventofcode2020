var demo = ["1-3 a: abdde",
    "1-3 b: cdefg",
    "2-12 c: ccccccccc"
]

var fs = require('fs');
var filename = "day2Input.txt";


fs.readFile(filename, 'utf8', (err, fileData) => {
    if (err) throw err;
    //getCountOfRightPW(demo);
    getCountOfRightPW(fileData.split("\n"));
});

var getCountOfRightPW = input => {
var validPw = 0;
input.forEach(data => {
    let appearance = 0;
    let splitArray = data.split(' ');
   var numbers = splitArray[0].split('-');
    var character = splitArray[1][0];
   var pw = splitArray[2];
   var number1 = parseInt(numbers[0]);
   var number2 = parseInt(numbers[1]);
   //var amountOfOccurrence =  pw.split(character).length-1;


   var char1 = pw.charAt(number1-1);
   var char2 = pw.charAt(number2-1);

   if(char1 === character){
    appearance++;
   }
   if(char2 === character){
    appearance++;
   }

if (appearance === 1){
    validPw++;
}

});
console.log(validPw);

//remove all chars from pw except the character checking
// check if the number is between number1 and number2



}