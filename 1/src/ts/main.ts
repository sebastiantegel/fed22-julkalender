let sum = 0;

for (let i = 67; i < 96; i++) {
  sum += i;
}

for (let i = 48; i < 64; i++) {
  sum -= i;
}

(document.getElementById("result") as HTMLHeadingElement).innerHTML =
  sum.toString();
