/**
 * A function to set the value of all the elements
 * present inside the elemArr with the value: `value`
 */

export const setValueOfSimilarElements = (elemArr, value) => {
  elemArr.forEach((elem) => {
    elem.innerText = value;
  });
};