/** @format */

"use strict";

// const ckx = (birthYear) => (age = 2037 - birthYear);

// console.log();

// Coding Challenge #1 // 编程挑战一

/* 

Given an array of forecasted maximum temperatures, 给定一个包含预测最高气温的数组，

the thermometer displays a string with those temperatures. 温度计将显示一个包含这些温度的字符串。

Example: [17, 21, 23] will print "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..." 示例：[17, 21, 23] 将打印 "... 17°C 在 1 天内 ... 21°C 在 2 天内 ... 23°C 在 3 天内 ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. 创建一个名为 'printForecast' 的函数，该函数接受一个数组 'arr'，并将类似上面的字符串输出到控制台。

Use the problem-solving framework: Understand the problem and break it up into sub-problems! 使用问题解决框架：理解问题并将其分解成子问题！

TEST DATA 1: [17, 21, 23] 测试数据 1: [17, 21, 23]

TEST DATA 2: [12, 5, -5, 0, 4] 测试数据 2: [12, 5, -5, 0, 4]

*/
// 输入:array
// 0 用一个变量接收array
// 1 提取数组里的每一个项 → 将每一项数字转换成字符串

// 2  用一个变量代替天数 → 天数每轮循环 + 1
//         循环长度为数组长度 - 1
//         最后变量为最大值 → 数字从小到大依次等于 1 2 3 4.。。。i ？？？？？？
// 3 最终输出 → 每轮

// 输出：console.log

const data1 = [51, 91, 23, -21, 0, 35];
const data2 = [17, 21, 23];

const weatherForecast = function (inputArray) {
	let allString = " ";

	for (let i = 1, j = 0; i <= inputArray.length; j++, i++) {
		const eachArray = inputArray[j];
		const each = `${eachArray}°C in ${i} days ... `;
		allString = allString + each;
	}

	console.log(allString);
};

weatherForecast(data1);
weatherForecast(data2);
