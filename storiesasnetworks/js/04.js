
let messages = document.querySelectorAll(".message");
let boxs = document.querySelectorAll(".box");

boxs.forEach((item, i) => {
  item.addEventListener("click", function () {
    messages[i].style.display = "block";
  });
});