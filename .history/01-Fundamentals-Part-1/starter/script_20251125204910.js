// let js = 'amazing'
// console.log('elaine');
// console.log(91);
// console.log(4-3+66-44)
//  let penis = "Jms"
// console.log(penis)
// console.log(penis)
// console.log(penis)
// console.log(penis)
// console.log(penis)
//
// let firstBBno$="GAAY......"
// console.log(firstBBno$)
//
// let newoooo = "tempo!";
// console.log(newoooo);
//===========================time 20:46===============

// let B = true;
// console.log(B);
// console.log(typeof true);
// console.log(typeof B);
// console.log(typeof 23333333);
// console.log('A');
// console.log("A");
//  B = 'word'
// console.log(typeof B);
//
// let year;
// console.log(year);
//
// year = 1999;
// console.log(year);
//
// console.log(typeof null)


// let age1 = 23;
// age1= 24;
// console.log(age1);
//
// const age2 = 33;//const完全可以用！
// console.log(age2);
//
// unclaimed = 69;//可以运行，但是永远不要这么做。
// console.log(unclaimed)
//
// const firtName= 'bb';
// const lasrName = 'cc';
// console.log(firtName+' '+ lasrName);
//
// //======================赋值=======================
// let x = 10 +5 ;//15
// x+= 10;//25
// x*=4;//100
// x++;//101
// x--;//100
// x--;//99
//
// console.log(x);

//===================比较=================
// let now = 2025;
// const
//
// console.log(lasrName);
//
// console.log(firtName > lasrName);

//no14----------------------
// const now = 3999
// const ageJOJO = now-2344;
// const ageSOSO = now-2444;
// console.log(ageJOJO, ageSOSO,2**7,ageSOSO/2);

/*=============================================
//code 001
const  massMark = 60;
const  massJonn = 50;
const  heightMark = 60;
const  heightJonn = 50;

BMImark = massMark/heightMark**2;
BMIJonn = massJonn/heightJonn**2;

console.log(BMIJonn,'vs',BMImark);

if(BMImark > BMIJonn){
    console.log(`Mark's BMI (${BMImark}) is higher!!!`)
}else{
    console.log(`Jonn's BMI (${BMIJonn}) is higher!!!`)
}
console.log(BMImark)
//...
=============================================*/

/*
//class 017
// define part
const firstName = "shyboy";
const year = 2025;
const birthyear = 2004;
const job = "coder";

//template string
const selfIntroduction = `Hello,I'm ${firstName} ,a ${year-birthyear} year old ${job}!!!`
console.log(selfIntroduction);
                      
console.log(`Just a regular string`);

console.log('String with \n\multiple \n\
lines');
console.log(`String
multiple
lines`);
*/

/*
//class 018 template strings 

const age = 12;

if (age >= 18) {
    console.log('Elaine can start deriving license');
}else{
    const yearsleft = 18 - age;
    console.log(`Eliane is too young.Wait another ${yearsleft} years`);
}

*/

//structure 
// if(){}else{}

/*
// 020 different types
const inputYear = '1991';
console.log(Number(inputYear),inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);
// seldom use bcs of javscript type coercion类型强制 
console.log(Number('Elaine'));
console.log(typeof NaN);
console.log(typeof NaN);
console.log(String(23),23);
*/
 
/*
//024 code cha 3===================================
const hasDriverLicense = true;//条件A
const hasGoodVsion =  true;//条件B
const isTired = false;//条件C

const ifA = (hasDriverLicense && hasGoodVsion);//两者都满足
const ifB = (hasDriverLicense || hasGoodVsion);//有一个满足就行
const ifC = (hasDriverLicense&&hasGoodVsion&& !isTired );//非常严格的条件C

console.log(typeof ifA,ifA);
console.log(typeof ifC,ifC);
console.log(hasDriverLicense&&hasGoodVsion&& !isTired);

const shouldDrive = ifC;

if(shouldDrive === true){
    console.log('Eliane is able to drive!');
}else{
    console.log('Maybe Someone else should drive...');
}
*/



//================================code cha 4 dolphin
const scoreD1 = (97+112+101)/3;
const scoreK1 = (88+91+110)/3;

console.log(scoreD1,scoreK1);
// if(scoreD1 > scoreK1 && scoreD1 >=100){
//     console.log(`dolphin win the trophy with ${scoreD1} points`)
// }else {console.log(`Koalas win with ${scoreK1} points`)}


// if(scoreD1 > scoreK1){
//     console.log('dolphin ');
// }else if(scoreD1 < scoreK1){
//     console.log('Koalas');        
// }else if(scoreD1 === scoreK1){
//     console.log('Draw');
// }else{
//     console.log('Something went wrong and I dont know what that is!!!!!');
//}

/*
if(scoreD1 > scoreK1 && scoreD1 >=100){
    console.log('dolphin ');
}else if(scoreD1 < scoreK1 && scoreK1 >=100){
    console.log('Koalas');        
}else if(scoreD1 === scoreK1 && scoreD1 >=100 && scoreK1 >=100){
    console.log('Draw');
}else if(typeof scoreD1 === 'number' && typeof scoreK1 === 'number' && (scoreD1 <100 && scoreK1 <100)){
    console.log('no team wins the trophy');
}else{
    console.log('Something went wrong and I dont know what that is!!!!!');
}
*/


const day = 'monday';

switch(day){
    case'monday':
        console.log('plan course structure');
    break;
    case'tuesday':
        console.log('do sth in')
    break;
    case'wednesday':

    break;
    case'thursday':

    break;
    case'friday':

    break;
    case'saturday':

    break;
    case'sunday':

    break;
}