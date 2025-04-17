/* eslint-disable no-unused-vars */
const createCalculator = function () {
  let total = 0;

  function value() {
    return total;
  }

  function add(num) {
    total = total + num;
  }

  function subtract(num) {
    total -= num;
  }

  function clear() {
    total = 0;
  }
  return {
    value,
    add,
    subtract,
    clear,
  };
};

const addSquareMethod = (arrCalcInstance) => {
  for (let i = 0; i < arrCalcInstance.length; i++) {
    //Could be done using forEach too
    arrCalcInstance[i].square = function () {
      return this.value() ** 2;
    };
  }

  return arrCalcInstance;
};

const objPrototype = {
  value() {
    return this.total;
  },

  add(num) {
    this.total += num;
  },

  subtract(num) {
    this.total -= num;
  },

  clear() {
    this.total = -10;
  },
};

const createHumanCalculator = () => {
  const calculator1 = Object.create(objPrototype);
  calculator1.total = -10;
  return calculator1;
};
