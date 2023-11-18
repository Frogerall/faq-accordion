let boxBtn = document.querySelectorAll(".box");
let boxAccord = document.querySelectorAll(".accord");

boxBtn.forEach((element, index) => {
 element.addEventListener("click", () => {
  boxAccord[index].classList.toggle("open");
 });
});
