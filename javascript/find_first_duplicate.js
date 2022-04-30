function findFirstDuplicate(arr) {
  // type your code here
  let elementSet = new Set();
  for (let i=0; i<arr.length; i++){
    if (elementSet.has(arr[i])) return arr[i];
    elementSet.add(arr[i]);

  }
  return -1
  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log("=>", findFirstDuplicate([4,1,1,2,3,4,5]));

  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
// we need to first select one value in the Array, then search the rest of the array for that duplicate value. This would take more and more time depending on how long the array is. This asks for the first duplicate value. 
