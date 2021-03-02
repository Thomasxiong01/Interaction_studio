
let spans = document.querySelectorAll(".green");

spans.forEach((item) => {
 
  item.flag = true;
  item.addEventListener("click", function () {
    if (item.flag) {
      this.style.color = "#000";
      this.style.backgroundColor = "#000";
      item.flag = false;
    } else {
      this.style.color = "rgb(31, 234, 80)";
      this.style.backgroundColor = "transparent";
      item.flag = true;
    }
  });
});
