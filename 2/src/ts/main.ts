let lengthOfThrow = 0;
let sumOfThrows = 0;
let totalSum = 0;

while (sumOfThrows < 100) {
  totalSum += sumOfThrows;
  sumOfThrows += lengthOfThrow;
  lengthOfThrow++;
}

(document.getElementById("result") as HTMLHeadingElement).innerHTML =
  totalSum.toString();
