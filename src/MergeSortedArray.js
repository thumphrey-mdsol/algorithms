const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

const mergedArrays = (array1, array2) => {
  let newArr = []
  let i1 = 0
  let i2 = 0
  while(newArr.length<(array1.length+array2.length)){
    if(array1.length>i1&&array2.length===i2){
      newArr.push(array1[i1])
      i1++
    } else if (array2.length>i2&&array1.length===i1){
      newArr.push(array2[i2])
      i2++
    } else {
      if (array1[i1] > array2[i2]){
        newArr.push(array2[i2])
        i2++
      }else{
        newArr.push(array1[i1])
        i1++
      }
    }
  }
  return newArr
}

console.log(mergedArrays(myArray, alicesArray))