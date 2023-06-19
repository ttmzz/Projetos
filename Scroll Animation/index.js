const boxes = document.querySelectorAll(".boxs");

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;

  boxes.forEach(boxs => {
    const boxsTop = boxs.getBoundingClientRect().top;

    if(boxsTop < triggerBottom) {
      boxs.classList.add("show");
    } else {
      boxs.classList.remove("show");
    }
  });
}
