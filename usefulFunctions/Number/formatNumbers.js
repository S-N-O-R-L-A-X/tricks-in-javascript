/**
 * toFixed(pos) 保留指定位数小数，四舍五入。
 */
 let num1 = 10.005;
 console.log(num1.toFixed(2)); // "10.01" 
 let num2 = 10;
 console.log(num2.toFixed(2)); // "10.00"



 /**
  * toExponential(pos) 保留指定位数小数，四舍五入。返回以科学记数法（也称为指数记数法）表示的数值字符串
  */

  let num3 = 9.99;
  console.log(num3.toExponential(1)); // "1.0e+1"
  console.log(num3.toExponential(2)); // "9.99e+0"

 /**
  * toPrecision(pos) toPrecision()方法会根据数值和精度来决定调用toFixed()或toExponential()
  */
  let num = 99;
  console.log(num.toPrecision(1)); // "1e+2"
  console.log(num.toPrecision(2)); // "99"
  console.log(num.toPrecision(3)); // "99.0" 