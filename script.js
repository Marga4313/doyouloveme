let yes = document.getElementById("yes");
let no = document.getElementById("no");

let count = 0;
let px = "px";
let X = Math.floor(Math.random() * 300);
let Y = Math.floor(Math.random() * 250);
no.addEventListener("click", () => {
  no.style.position = "absolute";
  count++;
  if (count === 10) alert("ede don't 🥺");
  if (count === 15) alert("yah oh 🥹");
  if (count === 20) alert("may gusto ka tlaga sakin tae mo 😎");
  if (count === 25) alert("bakit baga hindi nalng mag yes papansin 😒");
  if (count === 30) alert("dmoko matitiis tae mo 🙄");
  if (count === 35)
    alert("sumbong kita kalamo dimona pala ako love hohohohoho 😭");
  if (count === 35) alert("dina kita love bahala ka 😤");
  if (count === 50) alert("bat nandito kapa 😡");

  if (X <= 210) no.style.left = X + px;
  else no.style.left - X - 90 + px;
  if (Y <= 220) no.style.top = Y + px;
  else no.style.left - Y - 30 + px;

  X = Math.floor(Math.random() * 300);
  Y = Math.floor(Math.random() * 250);
});

yes.addEventListener("click", () => {
  if (count <= 19) alert("oh Thank you! and 'I Love You too' ❤️😘");
  else alert("sabi kona love mo tlaga ako pugi pugi ko eh 🥰");
  count = 0;
});
