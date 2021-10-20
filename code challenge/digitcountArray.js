let number = [0, 1, 2, 12, 1112, 33333335];
let tempArr = [];

function individual(arr) {
  arr.forEach((a) => {
    temp = a.toString().split("");
    tempArr = [...tempArr, ...temp];
  });
}

function countApperances(arr) {
  let obj = {};

  arr.forEach((a, index) => {
    let count = 1;
    for (let i = index + 1; i <= arr.length - 1; i++) {
      if (a == arr[i]) {
        count++;
      }
    }
    if (!obj[a]) {
      obj[a] = count;
    }
  });
  return obj;
}

individual(number);
finalObj = countApperances(tempArr);
aaa = Object.values(finalObj).filter((a) => a);
repeat = Math.max(...aaa);
console.log(repeat);
result = Object.keys(finalObj).find((a) => finalObj[a] == repeat);
console.log(`the most repeated number is: ${result}`);
