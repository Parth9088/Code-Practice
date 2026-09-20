// Count the frequency of each element in an array.

function elementsFreq(arr1) {
  let arr2 = [];
  let freq = "";

  for (let i = 0; i < arr1.length; i++) {
    let count = 0;

    if (!arr2.includes(arr1[i])) {

      for (let j = 0; j < arr1.length; j++) {
        if (arr1[i] == arr1[j]) {
          count += 1;
        }
      }

      arr2.push(arr1[i]);
      freq += `${arr1[i]} : ${count} , `;
    }
  }

  console.log(`[ ${freq}]`);
}

elementsFreq([10, 20, 30, 40, 20, 40, 10, 20]);
