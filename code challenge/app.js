let number = [0, 1, 2, 12];
let tempArr = [];
number.forEach((a) => {
  temp = a.toString().split("");
  tempArr = [...tempArr, ...temp];
});
console.log(tempArr);
