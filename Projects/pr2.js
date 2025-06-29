form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // It prevents loading screen
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector(".result");

  if (height < 0 || isNaN(height)) {
    result.innerHTML = "Please enter a valid heigth";
  } else if (weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please enter a valid weight";
  } else {
    const bmi = weight / (height / 100) ** 2;
    result.innerHTML = `<span>${bmi}</span>`;
  }
});
