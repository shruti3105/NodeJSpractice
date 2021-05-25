const WINS = 0;
const LOSES = 1;

let initial = 100;
let bid = 1;
let bidswon = 0;
let bets = 0;
while (initial > 0 && initial < 200) {
  let gamble = Math.floor(Math.random() * 10) % 2;
  if (gamble == WINS) {
    bidswon++;
    initial += bid;
  }
  if (gamble == LOSES) {
    initial -= bid;
  }
  bets++;
}
console.log("Total Bets Made : " + bets);
if (initial == 0) {
  console.log("Gambler Lost!");
}
if (initial == 200) {
  console.log("Gambler Won!");
  console.log("Number of Bids Won : " + bidswon);
}
