function SumOnTopTwo(array) {
  //validate input
  if (!Array.isArray(array)) return 'Not an array!'; //not an array
  if (array.length < 2) return 'Array must have at least 2 elements!'; //array only has 1 element

  let topOne, topTwo; //define two element: topOne is greater than topTwo

  //check first two elements of array, greater is topOne, the other is topTwo
  if (array[0] >= array[1]) {
    topOne = array[0];
    topTwo = array[1];
  }
  if (array[1] >= array[0]) {
    topOne = array[1];
    topTwo = array[0];
  }

  //loop from third element of array
  for (let i = 2; i < array.length; i++) {
    if (array[i] >= topOne) {
      //if array[i] >= topOne then topOne becomes topTwo, array[i] becomes topOne
      topTwo = topOne;
      topOne = array[i];
    } else if (array[i] >= topTwo) {
      //else if array[i] >= topTwo then array[i] becomes topTwo, topOne remains value
      topTwo = array[i];
    }
  }

  return topOne + topTwo;
}
