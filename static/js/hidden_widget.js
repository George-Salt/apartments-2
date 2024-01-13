let hiddenAdditional = document.querySelector(".additional .widget__hidden");
let hiddenAdditionalButton = document.querySelector(".additional .more");
let additionalHiddenClosed = true;


function switchHiddenAdditional() {
  if (!additionalHiddenClosed) {
    hiddenAdditional.style.display = "none";
    additionalHiddenClosed = true;
    hiddenAdditionalButton.textContent = "Показать больше";
  } else {
    hiddenAdditional.style.display = "flex";
    additionalHiddenClosed = false;
    hiddenAdditionalButton.textContent = "Скрыть";
  };
};