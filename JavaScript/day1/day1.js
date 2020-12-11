var demo = [1721,
    979,
    366,
    299,
    675,
    1456,
]

var fs = require('fs');
var filename = "day1Input.txt";


fs.readFile(filename, 'utf8', (err, fileData) => {
    if (err) throw err;
    //doPart2(demo);
    doPart2(fileData.split("\n").map(x => parseInt(x)));
});


const doPart1 = (data) => {
console.log(data);
  for (let i = 0; i < data.length; i++){
      for(let j = i+1; j< data.length; j++){
            if(data[i] + data[j] === 2020){
                console.log(data[i] * data[j]);
          }
      }
  }
};

const doPart2 = (data) => {
      for (let i = 0; i < data.length; i++){
          for(let j = i+1; j< data.length; j++){
              for(let t = j+1; t< data.length; t++){
                if(data[i] + data[j] + data[t] === 2020){
                    console.log(data[i] * data[j] * data[t]);
              }
              
              }
          }
      }
    };