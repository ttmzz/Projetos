const labels = document.querySelectorAll(".form-control label");

labels.forEach(label => {
  label.innerHTML = label.innerText.split("")
  .map((letter, idc) => `<span style="transition-delay:${idc * 50}ms">${letter}</span>`)
  .join("");
});
