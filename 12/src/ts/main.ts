let result = document.getElementById("result") as HTMLHeadingElement;

let positions: number[] = [];

for (let i = 1; i < 400; i++) {
  let prod = i * i;

  if (prod.toString().endsWith(i.toString())) {
    positions.push(i);
  }
}

result.innerHTML = JSON.stringify(positions);
