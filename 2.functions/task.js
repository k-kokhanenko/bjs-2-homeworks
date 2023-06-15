function getArrayParams(...arr) {
  let min = 0, 
      max = 0, 
      sum = 0, 
      avg = 0;
  
  if (arr.length > 0) {
    min = arr[0];
    max = arr[0];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      
      if (arr[i] < min) {
        min = arr[i];
      }
      
      sum += arr[i];
    }

    avg = +(sum / arr.length).toFixed(2);
  }

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];  
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length > 0) {
    let min = arr[0], 
        max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      
      if (arr[i] < min) {
        min = arr[i];
      }
    }

    return max - min;
  }
  return 0;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length > 0) {
    let sumEvenElement = 0, 
        sumOddElement = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }

    return sumEvenElement - sumOddElement;
  }

  return 0;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length > 0) {
      let sumEvenElement = 0, 
          countEvenElement = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
          sumEvenElement += arr[i];
          countEvenElement++;
        } 
      }
  
      return sumEvenElement / countEvenElement;
    }
  
    return 0;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    let result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
