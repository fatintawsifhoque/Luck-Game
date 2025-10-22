(function () {
  const winnerShowElm = document.querySelector(".winner");
  const winningScoreElm = document.querySelector(".winningScore");
  const p1ScoreElm = document.querySelector(".p1");
  const p2ScoreElm = document.querySelector(".p2");
  const setScoreElm = document.querySelector("#luck-input");
  const submitBtnElm = document.querySelector("#submit");
  const resetBtnElm = document.querySelector("#resetBtn");
  const p1BtnElm = document.querySelector(".p1Btn");
  const p2BtnElm = document.querySelector(".p2Btn");

  // Modal elements
  const welcomeModal = document.getElementById("welcomeModal");
  const closeModalBtn = document.getElementById("closeModal");

  let p1Score = 0;
  let p2Score = 0;
  let setWinningVAlue = 0;

  p1BtnElm.disabled = true;
  p2BtnElm.disabled = true;

  // Show welcome modal on load
  welcomeModal.style.display = "flex";

  closeModalBtn.addEventListener("click", () => {
    welcomeModal.style.display = "none";
  });

  welcomeModal.addEventListener("click", (e) => {
    if (e.target === welcomeModal) {
      welcomeModal.style.display = "none";
    }
  });

  function beatWinningScore() {
    if (p1Score == setWinningVAlue || p2Score == setWinningVAlue) {
      p1BtnElm.disabled = true;
      p2BtnElm.disabled = true;
      if (p1Score == setWinningVAlue) {
        winnerShowElm.textContent = "🎉 Player 1 Wins!";
      }
      if (p2Score == setWinningVAlue) {
        winnerShowElm.textContent = "🎉 Player 2 Wins!";
      }
      return true;
    }
    return false;
  }

  p1BtnElm.addEventListener("click", () => {
    if (beatWinningScore()) return;
    p1Score++;
    p1ScoreElm.textContent = p1Score;
    if (!beatWinningScore()) {
      p2BtnElm.disabled = false;
      p1BtnElm.disabled = true;
    }
  });

  p2BtnElm.addEventListener("click", () => {
    if (beatWinningScore()) return;
    p2Score++;
    p2ScoreElm.textContent = p2Score;
    if (!beatWinningScore()) {
      p1BtnElm.disabled = false;
      p2BtnElm.disabled = true;
    }
  });

  function reset() {
    winnerShowElm.textContent = "";
    p1ScoreElm.textContent = "0";
    p2ScoreElm.textContent = "0";
    p1Score = 0;
    p2Score = 0;
    setWinningVAlue = 0;
    winningScoreElm.textContent = "0";
    p1BtnElm.disabled = true;
    p2BtnElm.disabled = true;
  }

  resetBtnElm.addEventListener("click", (e) => {
    e.preventDefault();
    setWinningVAlue = 0;
    reset();
  });

  function whoFirst() {
    let arr = ["p1", "p2"];
    let num = Math.floor(Math.random() * arr.length);
    if (arr[num] == "p1") {
      p1BtnElm.disabled = false;
      p2BtnElm.disabled = true;
    } else {
      p2BtnElm.disabled = false;
      p1BtnElm.disabled = true;
    }
  }

  submitBtnElm.addEventListener("click", (e) => {
    e.preventDefault();
    let inScore = setScoreElm.value.trim();
    if (inScore == "") {
      alert("Please enter a valid number");
      return;
    }
    let numValue = parseInt(inScore, 10);
    if (isNaN(numValue) || numValue <= 0) {
      alert("Please enter a positive number.");
      setScoreElm.value = "";
      return;
    }
    p1Score = 0;
    p2Score = 0;
    p1ScoreElm.textContent = "0";
    p2ScoreElm.textContent = "0";
    winnerShowElm.textContent = "";
    setWinningVAlue = numValue;
    winningScoreElm.textContent = setWinningVAlue;
    setScoreElm.value = "";
    whoFirst();
  });
})();