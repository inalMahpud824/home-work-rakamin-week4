//fungsi untuk membuat array random
function createRandomValue(jumlah) {
  const nilaiRandom = [];
  for (let i = 0; i < jumlah; i++) {
    const nilai = Math.ceil(Math.random() * 50);
    nilaiRandom.push(nilai);
  }
  return nilaiRandom;
}
//fungsi untuk membuat array berdasarkan indeks genap
function findValueByEvenIndex(array) {
    let evenNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(array[i]);
        } else {
            continue;
        }
    }
    return evenNumbers;
}

//fungsi untuk membuat array berdasarkan indeks ganjil
function findValueByOddIndex(array) {
  let oddNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(array[i]);
    } else {
      continue;
    }
  }
  return oddNumbers;
}
//fungsi mencari nilai total dari array
function createTotalArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

//fungsi untuk mencari nilai terkecil dari array
function createMinimumArray(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

//fungsi untuk mencari nilai terbesar dari array
function createMaximumArray(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

//fungsi mencari nilai rata-rata dari array
function createAverage(total, array) {
    let rataRata = total / array.length
    return rataRata
}
//fungsi membandingkan nilai minimum
function compareWithMinimum(indexGanjil, indexGenap){
    if(indexGanjil === indexGenap){
        return "untuk nilai minimum array index genap sama dengan array index ganjil"
    }
    else if(indexGenap < indexGanjil) {
        return "untuk nilai minimum array index genap lebih kecil dari array index ganjil"
    }else{
        return "untuk nilai minimum array index ganjil lebih kecil dari array index genap"
    }
}
//fungsi membandingkan nilai maximum
function compareWithMaximum(indexGanjil, indexGenap){
    if(indexGanjil === indexGenap){
        return "untuk nilai maximum array index genap sama dengan array index ganjil"
    }
    else if(indexGenap < indexGanjil) {
        return "untuk nilai maximum array index genap lebih kecil dari array index ganjil"
    }else{
        return "untuk nilai maximum array index ganjil lebih kecil dari array index genap"
    }
}
//fungsi membandingkan nilai rata-rata
function compareWithAverage(indexGanjil, indexGenap){
    if(indexGanjil === indexGenap){
        return "untuk nilai Rata-rata array index genap sama dengan array index ganjil"
    }
    else if(indexGenap < indexGanjil) {
        return "untuk nilai Rata-rata array index genap lebih kecil dari array index ganjil"
    }else{
        return "untuk nilai Rata-rata array index ganjil lebih kecil dari array index genap"
    }
}
//fungsi membandingkan nilai total
function compareWithTotal(indexGanjil, indexGenap){
    if(indexGanjil === indexGenap){
       return "untuk nilai total array index genap sama dengan array index ganjil"
    }
    else if(indexGenap < indexGanjil) {
       return "untuk nilai total array index genap lebih kecil dari array index ganjil"
    }else{
       return "untuk nilai total array index ganjil lebih kecil dari array index genap"
    }
}

//array random
const array = createRandomValue(100);
//array ganjil
const oddIndexArray = findValueByOddIndex(array);
const minimumOddIndexArray = createMinimumArray(oddIndexArray);
const maximumOddIndexArray = createMaximumArray(oddIndexArray);
const totalOddIndexArray = createTotalArray(oddIndexArray);
const averageOddIndexArray = createAverage(totalOddIndexArray, oddIndexArray)
//array genap
const evenIndexArray = findValueByEvenIndex(array);
const minimumEvenIndexArray = createMinimumArray(evenIndexArray);
const maximumEvenIndexArray = createMaximumArray(evenIndexArray);
const totalEvenIndexArray = createTotalArray(evenIndexArray);
const averageEvenIndexArray = createAverage(totalEvenIndexArray, evenIndexArray)

//perbandingan
const compareMinimum = compareWithMinimum(minimumOddIndexArray, minimumEvenIndexArray)
const compareMaximum = compareWithMaximum(maximumOddIndexArray, maximumEvenIndexArray)
const compareAverage = compareWithAverage(averageOddIndexArray, averageEvenIndexArray)
const compareTotal = compareWithTotal(totalOddIndexArray, totalEvenIndexArray)

console.log("array random: ", array);

console.log("array index genap: ",evenIndexArray);
console.log("Bilangan minimum dari array index genap: ",minimumEvenIndexArray);
console.log("Bilangan maximum dari array index genap: ", maximumEvenIndexArray);
console.log("total dari array index genap: ",totalEvenIndexArray);
console.log("nilai rata-rata dari array index genap: ",averageEvenIndexArray);

console.log("array index ganjil", oddIndexArray);
console.log("Bilangan minimum dari array index ganjil: ",minimumOddIndexArray);
console.log("Bilangan maximum dari array index ganjil: ", maximumOddIndexArray);
console.log("total dari array index ganjil: ",totalOddIndexArray);
console.log("nilai rata-rata dari array index ganjil: ",averageOddIndexArray);

console.log(compareMinimum)
console.log(compareMaximum)
console.log(compareAverage)
console.log(compareTotal)