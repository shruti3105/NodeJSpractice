const IS_HEAD = 0;
const IS_TAIL = 1;

let heads = 0;
let tails = 0;
while (heads != 11 && tails != 11) {
  var coin = Math.floor(Math.random() * 10) % 2;

  if (coin == IS_HEAD) heads++;
  else tails++;
}
if (heads == 11) console.log("Head wins! (count: " + heads + " turns)");
else console.log("Tail wins! (count: " + tails + " turns)");
