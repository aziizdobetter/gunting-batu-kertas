let opsi = [`gunting`, `batu`, `kertas`];
let score = JSON.parse(localStorage.getItem(`score`)) || {
  win: 0,
  lose: 0,
  tie: 0,
};
let resultTextElement = document.querySelector(".text-result");
let iconOptionElement = document.querySelector(".container-icon-option");
let optionPlayer = document.querySelector(".option-player");
let scoreTextElement = document.querySelector(".text-score");
scoreTextElement.innerText = `Win : ${score.win}, Lose : ${score.lose}, Tie : ${score.tie}`;

document
  .querySelector(".option-gunting")
  .addEventListener("click", function () {
    play(`gunting`);
  });

document.querySelector(".option-batu").addEventListener("click", function () {
  play(`batu`);
});

document.querySelector(".option-kertas").addEventListener("click", function () {
  play(`kertas`);
});

document.querySelector(".button-reset").addEventListener("click", function () {
  score.win = 0;
  score.lose = 0;
  score.tie = 0;
  localStorage.removeItem(`score`);
  updateScoreElement();
});

function updateScoreElement() {
  scoreTextElement.innerText = `Win : ${score.win}, Lose : ${score.lose}, Tie : ${score.tie}`;
}

"use scrict";

function play(opsiPlayer) {
  let opsiKomputer = opsi[Math.round(Math.random() * 2)];
  let iconOption = /*html*/ `<img class="option-player" src="icons/${opsiPlayer}.png" alt="">
  <p>VS</p>
  <img class="option-computer" src="icons/${opsiKomputer}.png" alt="">`;
  iconOptionElement.classList.remove("js-container-icon-option");
  setTimeout(() => {
    iconOptionElement.classList.add("js-container-icon-option");
  }, 200);
  if (opsiPlayer === "gunting") {
    if (opsiKomputer === `gunting`) {
      score.tie++;
      resultTextElement.innerText = `TIE`;
      iconOptionElement.innerHTML = iconOption;
      updateScoreElement();
    } else if (opsiKomputer === `batu`) {
      score.lose++;
      resultTextElement.innerText = `LOSE`;
      iconOptionElement.innerHTML = iconOption;
      updateScoreElement();
    } else {
      score.win++;
      resultTextElement.innerText = `WIN`;
      iconOptionElement.innerHTML = iconOption;
      updateScoreElement();
    }
  } else if (opsiPlayer === "batu") {
    if (opsiKomputer === `gunting`) {
      score.win++;
      resultTextElement.innerText = `WIN`;
      iconOptionElement.innerHTML = iconOption;
      updateScoreElement();
    } else if (opsiKomputer === `batu`) {
      score.tie++;
      resultTextElement.innerText = `TIE`;
      iconOptionElement.innerHTML = iconOption;
      updateScoreElement();
    } else {
      score.lose++;
      resultTextElement.innerText = `LOSE`;
      iconOptionElement.innerHTML = iconOption;
      updateScoreElement();
    }
  } else if (opsiPlayer === "kertas") {
    if (opsiKomputer === `gunting`) {
      score.lose++;
      resultTextElement.innerText = `LOSE`;
      iconOptionElement.innerHTML = iconOption;
      updateScoreElement();
    } else if (opsiKomputer === `batu`) {
      score.win++;
      resultTextElement.innerText = `WIN`;
      iconOptionElement.innerHTML = iconOption;
      updateScoreElement();
    } else {
      score.tie++;
      resultTextElement.innerText = `TIE`;
      iconOptionElement.innerHTML = iconOption;
      updateScoreElement();
    }
  }
  localStorage.setItem(`score`, JSON.stringify(score));
}
