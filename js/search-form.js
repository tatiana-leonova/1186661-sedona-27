var searchLink = document.querySelector(".search-hotel-form-title");
var searchForm = document.querySelector(".search-hotel-form");

function changeState () {
  searchForm.classList.toggle('form-hidden');
}

searchLink.onclick = function (evt) {
  changeState();
  evt.preventDefault();
};

searchForm.addEventListener("submit", function (evt) {
  var isFormValid = checkFieldValid(document.getElementById("checkin-date"))
    && checkFieldValid(document.getElementById("checkout-date"))
    && checkFieldValid(document.getElementById("adults"));

  if (!isFormValid) {
    evt.preventDefault()
  }
});

function checkFieldValid(element) {
  if (element.value) {
    return true
  }
  fieldNotValid();
  return false
}

function fieldNotValid() {
  searchForm.classList.remove('form-error');
  searchForm.offsetWidth = searchForm.offsetWidth;
  searchForm.classList.add('form-error');
}

changeState();
