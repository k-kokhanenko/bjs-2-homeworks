"use strict"

function solveEquation(a, b, c) {
  let arr = [];

  let discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant === 0) {
    arr[0] = -b / (2 * a);
  } else if (discriminant > 0) {
    arr[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
    arr[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100;

  let s = amount - contribution;
  let p = (1 / 12) *  percent;

  let paymentByMonth = s * (p + (p / (Math.pow((1 + p), countMonths) - 1)));
  let result = paymentByMonth * countMonths;
  
  return +result.toFixed(2);
}