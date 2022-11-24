function shuffle(arr) {
  const N = arr.length;
  for (let i = 0; i < N; i++) {
    const pickAt = Math.floor(Math.random() * N - i) + i;
    swap(arr, pickAt, i);
  }
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

const compare = () => {
  if (pookers[0].value > pookers[1].value) {
    document.getElementById("demo2").innerHTML = "You Win!";
    document.getElementById("demo2").style.color = "red";
    document.getElementById("demo0").style.color = "red";
    document.getElementById("demo1").style.color = "black";
  } else {
    document.getElementById("demo2").innerHTML = "You Lose!";
    document.getElementById("demo2").style.color = "blue";
    document.getElementById("demo1").style.color = "red";
    document.getElementById("demo0").style.color = "black";
  }
};
const SUIT = ["♠", "♥", "♦", "♣"];
const RANK = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

const pookers = [];
for (let i = 0; i < SUIT.length; i++) {
  for (let j = 0; j < RANK.length; j++) {
    const result = {
      name: SUIT[i] + RANK[j],
      value: j + (4 - i) * 0.1 + 1,
    };
    pookers.push(result);
  }
}

document.getElementById("btn1").addEventListener("click", start);

function start() {
  shuffle(pookers);
  pookers
    .slice(0, 2)
    .forEach(
      (v, i) => (document.getElementById(`demo${i}`).innerHTML = v.name)
    );
  compare();
  const hislist = document.getElementById("history");
  hislist.innerHTML += `<div> 
                        <h2> User: ${pookers[0].name}
                             Computer:${pookers[1].name}
                        </h2>
                        </div>`;
}
