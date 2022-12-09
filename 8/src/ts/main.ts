let listOfAreas = [
  6, 15, 16, 14, 7, 15, 1, 6, 4, 3, 9, 4, 1, 5, 6, 3, 12, 12, 11, 13, 3, 6, 11,
  6, 7, 2, 12, 1, 4, 7, 10, 13, 9, 1, 18, 6, 11, 17, 6, 4, 11, 14, 11, 5, 17, 3,
  7, 2, 5, 4, 17, 9, 15, 1, 8, 9, 1, 10, 1, 17, 3, 9, 5, 9, 3, 8, 9, 16, 16, 9,
  10, 1, 4, 17, 16, 14, 17, 5, 5, 15, 16, 4, 14, 8, 9, 14, 3, 15, 14, 6, 11, 6,
  10, 6, 8, 11, 12, 7, 1, 10, 8, 11, 1, 7, 2, 14, 3, 9, 15, 17, 16, 7, 10, 4, 6,
  2, 7, 12, 17, 1, 3, 10, 3, 1, 2, 15, 10, 6, 13, 13, 12, 13, 9, 15, 15, 15, 6,
  11, 7, 12, 8, 14, 2, 14, 7, 5, 7, 7, 11, 11, 8, 3, 14, 5, 11, 5, 13, 10, 7, 7,
  3, 6, 14, 8, 17, 9, 9, 10, 1, 6, 9, 14, 13, 12, 15, 10, 2, 4, 14, 7, 2, 15, 4,
  1, 12, 13, 7, 16, 11, 12, 15, 12, 10, 9, 14, 11, 15, 6, 14, 5, 7, 14, 14, 11,
  2, 4, 1, 14, 4, 11, 5, 17, 4, 11, 5, 13, 7, 18, 15, 15, 5, 1, 4, 5, 15, 14,
  11, 4, 11, 11, 2, 7, 3, 2, 11, 11, 3, 4, 14, 9, 1, 6, 8, 7, 7, 2, 4, 15, 16,
  11, 15, 15, 12, 17, 13, 13, 5, 5, 9, 14, 3, 3, 1, 2, 3, 17, 9, 13, 4, 2, 6, 2,
  10, 7, 13, 2, 10, 10, 5, 10, 4, 9, 8, 3, 6, 12, 15, 7, 15, 13, 13, 2, 16, 6,
  1, 10, 3, 10, 18, 14,
];

let amountOfJulmust = 0;

for (let i = 0; i < listOfAreas.length; i += 3) {
  if (
    listOfAreas[i] !== 7 &&
    listOfAreas[i + 1] !== 7 &&
    listOfAreas[i + 2] !== 7
  ) {
    amountOfJulmust += listOfAreas[i] * listOfAreas[i + 1] * listOfAreas[i + 2];
  }
}

let result = document.getElementById("result") as HTMLHeadingElement;

result.innerHTML = amountOfJulmust + " l";
