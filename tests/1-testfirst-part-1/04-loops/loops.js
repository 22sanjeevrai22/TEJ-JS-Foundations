/* eslint-disable no-unused-vars */
function repeat(word, num) {
  let word1 = "";
  for (let i = 0; i < num; i++) {
    word1 += word;
  }
  return word1;
}

function sum(arr) {
  let sumArr = 0;
  for (let i = 0; i < arr.length; i++) {
    sumArr += arr[i];
  }
  return sumArr;
}

function join(arr, conjunction) {
  let concatArr = "";
  //   for (let i = 0; i < arr.length; i++) {
  //     concatArr += arr[i];
  //     if (conjunction !== undefined) {
  //       if (i !== arr.length - 1) {
  //         concatArr += conjunction;
  //       }
  //     }
  //   }

  arr.forEach((word, index) => {
    concatArr += word;
    if (conjunction !== undefined && index !== arr.length - 1) {
      concatArr += conjunction;
    }
  });

  return concatArr;
}

function gridGenerator(num) {
  let grid = "";
  if (num <= 0) {
    return grid;
  }
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if ((i + j) % 2 === 0) {
        grid += "#";
      } else {
        grid += " ";
      }
    }
    grid += "\n";
  }
  return grid;
}

const paramify = (obj) => {
  let result = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(`${key}=${obj[key]}`);
    }
  }
  return result.sort().join("&");
};

//using object.keys
const paramifyObjectKeys = function (obj) {
  let result = [];
  let keys = Object.keys(obj);
  let sortedKeys = keys.sort();
  if (keys.length === 0) return "";
  for (let i = 0; i < sortedKeys.length; i++) {
    const value = obj[sortedKeys[i]];
    result = result + sortedKeys[i] + "=" + value;
    if (i < sortedKeys.length - 1) {
      result += "&";
    }
  }

  return result;
};

//bubble sort
// Standard bubble sort: starts from the beginning and pushes larger values toward the end in each pass
const sort1 = (arr) => {
  const lastIndex = arr.length - 1;
  for (let i = 0; i <= lastIndex; i++) {
    // Compare adjacent elements from left to right
    for (let j = 0; j <= lastIndex - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap to push larger elements rightward
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

// Custom bubble sort: starts from the end and pushes smaller values toward the beginning (unconventional approach)
const sort2 = function (arr) {
  let lastIndex = arr.length - 1;
  for (let i = 0; i <= lastIndex; i++) {
    // Moves from right to left in each pass
    for (let j = lastIndex - i; j <= lastIndex; j++) {
      if (arr[j] < arr[j - 1]) {
        // Swap to push smaller elements leftward
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
};

// Alternative bubble sort: similar to sort1 but uses reverse outer loop (still pushes larger values to the end)
const sort = (arr) => {
  const lastIndex = arr.length - 1;
  for (let i = lastIndex; i >= 0; i--) {
    // Compare adjacent elements from left to right
    for (let j = 0; j <= lastIndex - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap to push larger elements rightward
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
