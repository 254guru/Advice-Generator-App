const h4IdEl = document.querySelector(".h4_id");
const quoteEl = document.querySelector(".quote");
const popUp = document.querySelector(".popup");

window.onload = getData();
popUp.addEventListener("click", getData);

function getData() {
    fetch("https://api.adviceslip.com/advice", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        displayData(data);
      });
  }

  function displayData(dataSet) {
    h4IdEl.textContent = dataSet.slip.id;
    quoteEl.textContent = dataSet.slip.advice;
  }