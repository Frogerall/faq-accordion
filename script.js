let boxBtn = document.querySelectorAll(".box");
let boxAccord = document.querySelectorAll(".accord");
let boxArrow = document.querySelectorAll(".arrow");

boxBtn.forEach((button, index) => {
 button.addEventListener("click", () => {
  boxAccord[index].classList.toggle("open");
  boxArrow[index].classList.toggle("rotate");
  button.classList.toggle("fontbold");
 });
});
