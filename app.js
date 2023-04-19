const form = document.querySelector("form");

form.onsubmit = function (e) {
  e.preventDefault();

  let cal = document.getElementById("calendar");
  const label = document.querySelector("label");
  const errorMsg = document.querySelector(".error-msg");
  let dayInput = cal.value.slice(-2);
  let monthInput = cal.value.slice(5, 7);
  let yearInput = cal.value.slice(0, 4);

  const dayResult = document.querySelector(".day-result span");
  const monthResult = document.querySelector(".month-result span");
  const yearResult = document.querySelector(".year-result span");

  let date = new Date();
  let day = date.getDate();
  let month = 1 + date.getMonth();
  let year = date.getFullYear();
  let allMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  function displayError() {
    cal.classList.add("error-input");
    label.classList.add("error-label");
    errorMsg.classList.add("show-error");
  }
  function removeError() {
    cal.classList.remove("error-input");
    label.classList.remove("error-label");
    errorMsg.classList.remove("show-error");
  }
  
  function clearResults() {
    dayResult.innerText = "--";
    monthResult.innerText = "--";
    yearResult.innerText = "--";
  }


  if (cal.value === "") {
    displayError();
    errorMsg.innerText = "Please enter a date";
    clearResults();
  } else if (
    (dayInput > day && monthInput >= month && yearInput >= year) ||
    (dayInput <= day && monthInput > month && yearInput >= year)
  ) {
    displayError();
    errorMsg.innerText = "Must be in the past";
    clearResults();
  } else {
    removeError();
    validDate();
  }

  function validDate() {
    if (dayInput > day) {
      day = day + allMonth[month - 1];
      month = month - 1;
    }

    if (monthInput > month) {
      month = month + 12;
      year = year - 1;
    }

    let dayOutput = day - dayInput;
    let monthOutput = month - monthInput;
    let yearOutput = year - yearInput;

    dayResult.innerText = dayOutput;
    monthResult.innerText = monthOutput;
    yearResult.innerText = yearOutput;
  }
};
