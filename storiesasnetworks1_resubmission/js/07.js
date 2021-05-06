
let btn = document.querySelector(".fs-200");
let box1 = document.querySelector(".box1");
let circle = document.querySelector(".circle");

let flag = true;
btn.addEventListener("click", function () {
  if (flag) {
    box1.style.display = "none";
    // circle.style.display = "block";
	circle.style.opacity = 1;
    flag = false;
  } else {
    box1.style.display = "block";
    // circle.style.display = "none";
	circle.style.opacity = 0;
    flag = true;
  }
});
