'use strict';
/*
let hasDriverLicense = true;
let passTest = true;

function planner() {
    console.log(`I ma leave this place soon`);
}


planner();
planner();
planner();

//calling
function bookReader(book1, book2) {
    //running
    console.log(book1, book2);
    const Knowledge = `Knowledge decomposed from ${book1} and ${book2}`;
    return Knowledge;
}

const wisdom = bookReader('The Great Gatsby', 'The Secret');//we calling the function
console.log(wisdom);
console.log(bookReader('The Great Gatsby', 'The Secret'));//唯一的区别是没有把值赋给变量
*/

/*
//写法一
function myAttitude(c,d) {
    const a = `for the person called ${c},I think he/she is a ${d} person`;
    return a;
}

//写法二：可以在调用函数**前**定义它们
const hisAttitude = function (a,b) {
    return `for the person named ${a},I think he/she is a ${b} guy`;
}

console.log(hisAttitude('you','kind'));
console.log(hisAttitude('me', 'brave'));

console.log(myAttitude('you','kind'));
console.log(myAttitude('me', 'brave'));

Keep your code dry(Dont Repeat Yourself) */


/*
//035 arrow函数
function howLongisIt(a) {
    return 2077 - now;
}
//const howLongisIt = a => 2077 - now;//
//开始定义
const variable = howLongisIt(2020);
console.log(variable);

*/
/*
//036
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));





const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};




ffffFFFFFFF


const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
      console.log(`${firstName} has already retired 🥳`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetiremenat(1950, 'Mike'));






const WHatisyourbodycount = function (string11, string22, number) {
    const temp = number ** 3;
    const num_eyeball = number - 3;

    if( temp >=59) {
        console.log(`you have ${num_eyeball} eyeballs`);
        return num_eyeball,' ',temp;
    }
    else {
        console.log(`you r alien you have ${num_eyeball} eyeballs`);
        return num_eyeball;
    }
}
console.log(WHatisyourbodycount('damn', 'Alice', 4));

*/
/*
//038coding challenge
const calAverage = (a, b, c) => (a + b + c) / 3;

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win ${avgDolphins}vs${avgKoalasal}`);
  }else if(avgKoalas >= 2 * avgDolphins)
     {
  console.log(`Koalas win ${avgDolphins}vs${avgKoalas}`);
}

}

*/
/*
const calAverage = (a, b, c) => (a + b + c) / 3;

let scoD = calAverage(44, 23, 71);
let scoK = calAverage(65, 54, 49);

function checkWinner(a, b) {
  if (a>= b *2) {return `the former{${a}} win ${a}vs${b}`;}
  else if (b>=a*2) { return `the latter{${b}} win ${a}vs${b}`;}
  else { return `nobody wins ${a}vs${b}`} 
}

const easyCall = checkWinner(scoD, scoK);
console.log(easyCall);

const testCheckwinner = checkWinner(588, 111);
console.log(testCheckwinner);


 scoD = calAverage(444, 232,23);
scoK = calAverage(65, 54, 49);
 
console.log(checkWinner( scoK,scoD));


*/


//039
/*
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const yearsArray = [1990, 2775, 4333, 3836,2424];

const age0 = calcAge(yearsArray[0]);
const age1 = calcAge(yearsArray[1]);
const age2 = calcAge(yearsArray[2]);
const age3 = calcAge(yearsArray[3]);
const age4 = calcAge(yearsArray[4]);
console.log(age0, age1, age2, age3, age4)

const newAgearray = [calcAge(yearsArray[1]), calcAge(yearsArray[1]), calcAge(yearsArray[yearsArray.length - 1])];

console.log(newAgearray);


*/


//040

// const friends = ['word1', 'word2', 'word3'];
// console.log('original', friends);



// const fdbk = friends.push('word0');
// console.log('This is push',friends);
// console.log('return of This is push',fdbk);

// friends.unshift('word4');
// console.log('unshift',friends);

// friends.pop();
// console.log('This is pop',friends);
// const popped = friends.pop();
// console.log('return of this is popped ',popped);
// console.log('this is popped', friends);


// calcTip = function (a) {
//   return a >= 50 && a <= 300 ? a * 0.15 : a * 0.2;
// }

// bills = new Array(125, 555, 44);

// tip = []

// const array = {
//   key1:'A',
//   key2:'B',
//   key3:'2077',
//   key4:'C',
//   key5:['a,b,c'],
//   key6: 'true',
//   functionInArray: function (a) {
    
//     this.key7 = 2025 - array.key3;
//     return this.key7;

//   },
//   functionSummary: function(a) {
//   return(`${this.key1} is a ${this.key2} borned in ${this.key3} AC.`)
//   },
// }

// // console.log(array.functionInArray());
// // console.log(array.functionInArray());
// // console.log(array.functionInArray());
// // console.log(array.functionInArray());
// // console.log('=====', array.functionInArray());
// // console.log(array.key7);
// // console.log(array.key7);
// // console.log(array.key7);
// // console.log(array.key7);
// // console.log(array.key7);



// //044
// console.log(array.functionSummary);
// console.log(array.functionSummary());
/*

const list = {
  nameA: 'apple',
  nameB: 'banana',
  massA: '60',
  massB: '40',
  hgtA: '1.8', // 注意：这里是字符串，但JS做除法时会自动变成数字
  hgtB: '1.6',

  calcBMI: function (theTypefrominput) { // 我把参数名改叫 theTypefrominput，更容易理解
    // 1. 拼名字
    let masExp = 'mass' + theTypefrominput; // 比如 'mass' + 'A' -> 'massA'
    let hgtExp = 'hgt' + theTypefrominput;  // 比如 'hgt' + 'A' -> 'hgtA'

    // 2. 这里的逻辑你写得非常棒！完全正确！
    let m = this[masExp]; 
    let h = this[hgtExp];

    // 3. 这里的 ** 2 是平方的意思，也没问题
    // 这里的 this.bmi 会把结果存回 list 对象里
    this.bmi = m / (h ** 2); 
    
    return this.bmi;
  }
}

// --- 修正后的调用过程 ---

// 1. 还没算之前，bmi 是不存在的
console.log(`计算前：`, list.bmi); // 注意：是 bmi，不是 mbi

// 2. 算 A 的时候，一定要加引号！告诉它是字母 'A'
list.calcBMI('A'); 
console.log(`A 的计算结果：`, list.bmi); // 此时 list.bmi 变成了 A 的数值

// 3. 算 B 的时候，也要加引号！
list.calcBMI('B');
console.log(`B 的计算结果：`, list.bmi); // 此时 list.bmi 被覆盖成了 B 的数值
*/



//047

// const jonas = [
//   'Jonas',
//   ',Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael,', 'Peter', 'Steven'],
//   true];
//   //////////////////////////////////
//   const typearray = [];
//   //////////////////////////////////


//   for (let i = 0; i < jonas.length; i++){
//     console.log(jonas[i], typeof jonas[i]);
    
//     typearray.push(typeof jonas[i],i);/////////////add i
// }
//   for (let i = jonas.length - 1; i >= 0; i--){
//     console.log(jonas[i], typeof jonas[i]);
    
//     typearray.unshift(typeof jonas[i]);
//   }
//   console.log(typearray);

// const year = []
// year.push(1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032);
// const minused = [];

// for (let i = 0; i < year.length; i++){
//   2077 - year[i];
//   minused.push(2077 - year[i])
// }


// console.log(minused);



//048====

// const ary = [
//   '1',
//   'n',
//   '2dww',
//   '3elka',
//   'flask',
//   'commmmpw',




// ]

// for (let i = ary.length-1; i>= 0; i--){
//   console.log(i,ary[i]);
// }

// for (let i = 1; i <= 3; i++)
// {
//   console.log(`=========== ${i} ============`)
// /////////////////////////
//   let r = 1;
//   while (r <= 10) {
//     console.log(i,r);
//     r++;
//   }
  
// }

// //////////////////预先声明
// let i = 0;
// ///////////////////开始循环
// while(i<10){

// let Arandomnumber = Math.trunc(Math.random() * 6+1) ;
// console.log(Arandomnumber,i);
//   i++////////////////序号递增+1
  
// ///////////////////结束循环
// }


// let dice = 1;
// let count = 0;
// while (dice !== 6) {
//   console.log(`it is ${dice}`)
//   dice = Math.trunc(Math.random() * 6 + 1);
//   count++;
//   if (dice === 6) console.log(`it is 6!!!You ve tried ${count} times to succeed`);
  
// }






// for (let i = 1; i <= 3; i++)
// {
//   console.log()
//   // console.log(`=========== ${i} ============`)
//   // console.log(`=========== `,i ,` ============`)
//   for (let c = 1; c < 6; c++){
//     console.log(i,c);
//   }
  
// }










/*
//050coding challenge
//1
const arrayBill= [
  22,
  295,
  176,
  440,
  37,
  105,
  10,
  1100,
  86,
  52
]

//2
const arrayTips = [];
const arrayTotals = [];
console.log(arrayTips);
console.log(arrayTotals);
// 3
const calcTip = function (a) {
  return a >= 50 && a <= 300 ? a * 0.15 : a * 0.2;
}

for (let i = 0; i <= arrayBill.length -1; i++){
  let eachTip = calcTip(arrayBill[i])
  console.log(`第${i}个tip`,eachTip)
  let eachBill = arrayBill[i];
  // /////////////
  // const inspect = eachTip + eachBill
  // console.log(`小费和原价的和`, inspect)
  // ////////////
  arrayTotals.push(eachTip + eachBill);
  console.log(`totals数组每轮（${i}）新增·的值`, arrayTotals[i]);
  console.log(`totals数组[]`, arrayTotals);
  

}

function calcAverage(wrapperObj) {
    // 1. 拿到名字 "arrayTotals"
    const name = Object.keys(wrapperObj)[0]; 
    
    // 2. 拿到真正的数组数据 [10, 20, 30...]
    // 注意：Object.values返回的是数组的数组 [[10,20...]]，我们要取第0个
    const realArray = Object.values(wrapperObj)[0]; 

    let eachSum = 0;

    // 3. 循环要遍历真正的数组 realArray
    for (let i = 0; i < realArray.length; i++) {
        eachSum = realArray[i] + eachSum;
        console.log(`${i}轮的 ${name} 求和是 ${eachSum}`);
    }
    return eachSum;
}

// ✅ 正确调用：必须包花括号
calcAverage({ arrayTotals }); 

// ❌ 错误调用：不要再这样直接传了，会报错或乱码
// calcAverage(arrayTotals);

*/




