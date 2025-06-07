const buttons = document.querySelectorAll(".button");
const body = document.querySelector(".container");
console.log(buttons);

//as button is an nodelist we can apply foreach for buttons
buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    console.log(e.target.id);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
