let btn = document.querySelector("#btn");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let show = document.querySelector(".show");
let body = document.body;
let flag = true;
box2.style.height = box1.offsetHeight+'px';
btn.addEventListener("click", function () {
  if (flag) {
    body.style.backgroundColor = "#000";
    box1.style.visibility = "hidden";
    show.style.display = "block";
    flag = false;
  } else {
    body.style.backgroundColor = "rgb(213,216,221)";
    box1.style.visibility = "visible";
    show.style.display = "none";
    flag = true;
  }
});
