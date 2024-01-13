let locationTitle = document.querySelector(".location .widget__title");
let locationBody = document.querySelector(".location .widget__body");
let locationClosed = false;

let dueTitle = document.querySelector(".due .widget__title");
let dueBody = document.querySelector(".due .widget__body");
let dueClosed = false;

let planTitle = document.querySelector(".plan .widget__title");
let planBody = document.querySelector(".plan .widget__body");
let planClosed = false;

let additionalTitle = document.querySelector(".additional .widget__title");
let additionalBody = document.querySelector(".additional .widget__body");
let additionalClosed = false;


function switchLocation() {
  if (!locationClosed) {
    locationBody.style.display = "none";
    locationTitle.classList.add("closed");
    locationClosed = true;
  } else {
    locationBody.style.display = "block";
    locationTitle.classList.remove("closed");
    locationClosed = false;
  }
};

function switchDue() {
  if (!dueClosed) {
    dueBody.style.display = "none";
    dueTitle.classList.add("closed");
    dueClosed = true;
  } else {
    dueBody.style.display = "block";
    dueTitle.classList.remove("closed");
    dueClosed = false;
  }
};

function switchPlan() {
  if (!planClosed) {
    planBody.style.display = "none";
    planTitle.classList.add("closed");
    planClosed = true;
  } else {
    planBody.style.display = "block";
    planTitle.classList.remove("closed");
    planClosed = false;
  }
};

function switchAdditional() {
  if (!additionalClosed) {
    additionalBody.style.display = "none";
    additionalTitle.classList.add("closed");
    additionalClosed = true;
  } else {
    additionalBody.style.display = "block";
    additionalTitle.classList.remove("closed");
    additionalClosed = false;
  }
};