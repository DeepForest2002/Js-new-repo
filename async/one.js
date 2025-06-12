const sayName = function () {
  console.log("Sayan Pramanik");
};

setTimeout(sayName, 2000);

const changeText = function () {
  document.querySelector("#Heading").innerHTML = "Best Js Series";
};

const chaneg_me = setTimeout(changeText, 2000);

//Stop the set time out
// clearTimeout(chaneg_me);

const button = document.querySelector("#stop");
button.addEventListener("click", function (e) {
  clearTimeout(chaneg_me);
  console.log("Stopped");
});
