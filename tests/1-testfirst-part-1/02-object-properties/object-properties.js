/* eslint-disable no-unused-vars */

const setPropsOnObj = (obj) => {
  obj["x"] = 7;
  obj["y"] = 8;
  function onePlus(num) {
    return num + 1;
  }
  obj["onePlus"] = onePlus;
};

const setPropsOnArr = (arrObj) => {
  arrObj["hello"] = function () {
    return "Hello!";
  };
  arrObj["full"] = "stack";
  arrObj[0] = 5;

  arrObj["twoTimes"] = function (num) {
    return num * 2;
  };
};

const setPropsOnFunc = (funcObj) => {
  funcObj["year"] = "20??";
  funcObj["divideByTwo"] = function (num) {
    return num / 2;
  };
};

const shallowCopy = (arr1, arr2) => {
  //   return [...arr1, ...arr2];
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    return arr1.concat(arr2);
  }
  return { ...arr1, ...arr2 };
};
