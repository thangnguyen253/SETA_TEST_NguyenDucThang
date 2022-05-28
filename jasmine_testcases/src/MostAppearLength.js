function MostAppearLength(array) {
  //validate input
  if (!Array.isArray(array)) return 'Not an array!'; //not an array
  if (array.length < 1) return 'Array must have at least 1 element!'; //array has no element

  //initialize new array with each element is the length of array[i]
  let tempArray = [];
  for (let i = 0; i < array.length; i++) {
    tempArray.push(array[i].length);
  }

  //then sort that new array from bigger to smaller
  tempArray.sort((a, b) => a - b);

  //find the length that appear most
  let lengthWithMaxTimes = findCountMaxTimes(tempArray);

  let result = [];

  //compare with the original array, if element match with max then return
  for (let i = 0; i < array.length; i++) {
    if (array[i].length == lengthWithMaxTimes) result.push(array[i]);
  }

  return result;
}

function findCountMaxTimes(array) {
  //the input array is the new Array with element match with length of the original array's elements

  //initialize max times that original array[0]'s length appears: suppose maxTimes = 1
  //countTimes is times that each element appears
  //lengthWithMaxTimes is original array[0]'s length appears
  let maxTimes = 1;
  let countTimes = 1;
  let lengthWithMaxTimes = array[0];

  //loop array
  for (let i = 0; i < array.length - 1; i++) {
    //if two consecutive element is equal, that means it appears twice, then update countTimes
    if (array[i] == array[i + 1]) {
      countTimes++;
      //if countTimes greater than maxTimes, update maxTimes = countTimes, then update lengthWithMaxTimes
      if (countTimes > maxTimes) {
        maxTimes = countTimes;
        lengthWithMaxTimes = array[i];
      }
    }
    //else if that two consecutive element is not equal, that means they only appears once
    else {
      countTimes = 1;
    }
  }

  return lengthWithMaxTimes;
}
