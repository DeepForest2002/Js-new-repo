//Genreate a random color
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(randomColor());

// Write a function to change the color randomely
let setIntervalfunction;

const start_button = document.querySelector("#Start");
const stop_button = document.querySelector("#stop");

start_button.addEventListener("click", function () {
  function check_bg_color() {
    document.body.style.backgroundColor = randomColor();
  }

  if (!setIntervalfunction) {
    setIntervalfunction = setInterval(check_bg_color, 2000);
  }
});

stop_button.addEventListener("click", function () {
  clearInterval(setIntervalfunction);
  document.body.style.backgroundColor = "white";
  console.log("Stopped the process Successfully");
  setIntervalfunction = null;
});
