// Js is a sequential language
const Owl = document.querySelector("#owl");
// Owl.addEventListener(
//   "click",
//   function (e) {
//     //Here e is the event object
//     console.log(e.target.id);
//     e.stopPropagation();
//   },
//   false
// );

//What is false and true in events

//It is called bubbling up (Down to up) and if we consider them as true it will delete or stop the bubbling up

// document.getElementById("images").addEventListener(
//   "click",
//   function () {
//     console.log("Clicked inside images");
//   },
//   false
// );

document.getElementById("google").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    // e.stopPropagation();
    console.log("Clicked inside the google");
  },
  false
);

const images = document.querySelectorAll("#images");

// images.addEventListener(
//   "click",
//   function (e) {
//     console.log(e.target.parentNode);
//   },
//   false
// );

images.forEach(function (image) {
  image.addEventListener(
    "click",
    function (e) {
      console.log(e.target.id);
    },
    false
  );
});
