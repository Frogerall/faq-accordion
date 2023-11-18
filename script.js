let boxBtn = document.querySelectorAll(".box");
let boxAccord = document.querySelectorAll(".accord");
let boxArrow = document.querySelectorAll(".arrow");

boxBtn.forEach((element, index) => {
 element.addEventListener("click", () => {
  boxAccord[index].classList.toggle("open");
  boxArrow[index].classList.toggle("rotate");
 });
});
