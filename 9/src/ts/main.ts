let numberOfBonbons = [
  5, 3, 8, 7, 9, 16, 75, 5, 80, 26, 58, 84, 93, 69, 162, 20, 23, 43, 89, 5, 94,
  60, 56, 116, 67, 90, 157, 88, 99, 187, 31, 46, 77, 46, 53, 99, 68, 46, 114,
  39, 50, 89, 71, 99, 170, 92, 30, 122, 83, 41, 124, 86, 34, 120, 56, 64, 120,
  27, 73, 100, 11, 76, 87, 60, 40, 100, 27, 98, 125, 67, 6, 73, 75, 11, 86, 36,
  30, 66, 95, 55, 150, 26, 56, 82, 92, 79, 171, 99, 64, 163, 20, 95, 115, 20,
  89, 109, 43, 14, 57, 70, 40, 110, 87, 27, 114, 74, 11, 85, 30, 19, 49, 46, 89,
  135, 32, 72, 104, 12, 56, 68, 92, 85, 177, 34, 43, 64, 84, 61, 145, 7, 48, 55,
  39, 88, 127, 14, 9, 23, 90, 95, 185, 7, 74, 81, 58, 50, 108, 89, 63, 152, 27,
  73, 100, 72, 87, 159, 41, 58, 99, 17, 13, 30, 17, 62, 79, 68, 73, 141, 6, 42,
  48, 71, 16, 80, 81, 62, 143, 90, 87, 177, 64, 57, 121, 30, 93, 123, 13, 29,
  42, 42, 44, 86, 76, 34, 110, 7, 6, 13, 43, 39, 82, 82, 59, 141, 6, 61, 67, 65,
  96, 161, 69, 89, 158, 30, 76, 106,
];

let result = document.getElementById("result") as HTMLHeadingElement;

let sum = 0;
for (let i = 0; i < numberOfBonbons.length; i += 3) {
  let actualAmountOfBonbons = numberOfBonbons[i] + numberOfBonbons[i + 1];
  if (actualAmountOfBonbons === numberOfBonbons[i + 2]) {
  } else {
    sum += actualAmountOfBonbons - numberOfBonbons[i + 2];

    result.innerHTML +=
      "<p>" +
      (i + 2) +
      " saknas det " +
      (actualAmountOfBonbons - numberOfBonbons[i + 2]) +
      " praliner</p>";
  }
}

result.innerHTML += "<p>Totalt saknas det: " + sum + " praliner</p>";
