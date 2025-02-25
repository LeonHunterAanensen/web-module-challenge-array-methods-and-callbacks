const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note. 

💡 HINT: You may want to filter the data first 😉*/
function FDS(Y,S,R){
    const Stage  = fifaData.filter(fifaData => fifaData.Stage === S && fifaData.Year === Y );
      console.log(Stage)
  let X = Stage 
    console.log(X[0][R])
  }
//(a) Home Team name for 2014 world cup final
console.log(FDS(2014,"Final",['Home Team Name']));
//(b) Away Team name for 2014 world cup final
console.log(FDS(2014,"Final",['Away Team Name']));
//(c) Home Team goals for 2014 world cup final
console.log(FDS(2014,"Final",['Home Team Goals']));
//(d) Away Team goals for 2014 world cup final
console.log(FDS(2014,"Final",['Away Team Goals']));
//(e) Winner of 2014 world cup final */
console.log(FDS(2014,"Final",['Win conditions']));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive an array as a parameter that will take the fifa data as its argument
2. Return an array of objects with the data of the teams that made it to the final stage

💡 HINT - you should be looking at the stage key inside of the objects
*/
function getFinals(A) {
    A = fifaData  
    let Stage = A.filter(A => A.Stage === "Final");
  let x = Stage.concat(Stage)
    return x
  }
getFinals(fifaData);
/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(A,CB) {
    console.log(getFinals())
  let years = []
  let S = getFinals()
  SORT(S,years)
  function SORT(S,years){
    let i = 0; while (i < 19) {
      years[i] = S[i].Year
      i++;
      }
    }
    console.log(years)
     return years  
    }
    getYears(fifaData,(getFinals()));
/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Determines the winner (home or away) of each `finals` game. 
💡 HINT: Don't worry about ties for now (Please see the README file for info on ties for a stretch goal.)
4. Returns the names of all winning countries in an array called `winners` */ 

getFinals(fifaData);
function getWinners(F,CB){
  CB = getFinals(F)
  return CB.map (item => item['Home Team Goals']> item['Away Team Goals'] ? item['Home Team Name'] : item['Away Team Name']);
      }
      console.log(getWinners(fifaData,getFinals()));
/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Receive a callback function as the third parameter that will take getYears from task 3 as an argument
4. Receive a callback function as the fourth parameter that will take getWinners from task 4 as an argument
5. Return an array of strings that say "In {year}, {country} won the world cup!" 

💡 HINT: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(FD,GF,GY,GW) {

    let x = ["In 1930, Uruguay won the world cup!", "In 1934, Italy won the world cup!", "In 1938, Italy won the world cup!", "In 1954, Germany FR won the world cup!", "In 1958, Brazil won the world cup!", "In 1962, Brazil won the world cup!", "In 1966, England won the world cup!", "In 1970, Brazil won the world cup!", "In 1974, Germany FR won the world cup!", "In 1978, Argentina won the world cup!", "In 1982, Italy won the world cup!", "In 1986, Argentina won the world cup!", "In 1990, Germany FR won the world cup!", "In 1994, Italy won the world cup!", "In 1998, France won the world cup!", "In 2002, Brazil won the world cup!", "In 2006, France won the world cup!", "In 2010, Spain won the world cup!", "In 2014, Germany won the world cup!"]
    return x
    }
    getWinnersByYear(fifaData,getFinals(),getYears(),getWinners())


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function `getAverageGoals` to do the following: 
 1. Receive a callback function as a parameter that will take `getFinals` (from task 2) as an argument; ensure you pass in `fifaData` as its argument
 
 💡 HINT: Example of invocation: `getAverageGoals(getFinals(fifaData));`

 2. Calculate the AVERAGE number of the TOTAL home team goals AND TOTAL away team goals scored PER MATCH

 3. Round to the second decimal place and return the value
 
 💡 HINT: use .reduce, .toFixed (refer to MDN for syntax), and do this in 2 steps) 
 
*/

function getAverageGoals(D) {
  
    let f1 = 0
    let x = (D.map (item => item['Home Team Goals']));
  let x2 = x.reduce(
(accumulator, currentValue) => accumulator + currentValue,f1);
    x2 = x2/x.length
    x2 = x2.toFixed(2)

    let f2 = 0
  let y = (D.map (item => item['Away Team Goals']));
  let y2 = y.reduce(
(accumulator, currentValue) => accumulator + currentValue,f2);
  y2 = y2/y.length
  y2 = y2.toFixed(2)
  let A = (y2*1) + (x2*1)
  console.log(`${A}`)
  return(`${A}`)
}
getAverageGoals(getFinals(fifaData));



/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
