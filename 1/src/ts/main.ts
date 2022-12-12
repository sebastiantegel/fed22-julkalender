import stiga from "./../assets/Stiga.jpg";

let sum = 0;

for (let i = 67; i < 96; i++) {
  sum += i;
}

for (let i = 48; i < 64; i++) {
  sum -= i;
}

(document.getElementById("result") as HTMLHeadingElement).innerHTML =
  sum.toString();

let img = document.createElement("img");
img.src = stiga;
img.alt = "Test";

document.body.appendChild(img);
