const buttons = document.querySelectorAll(".second-step__list .check-button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const parentLi = button.closest(".second-step__list li");
    parentLi.classList.toggle("active");
  });
});
