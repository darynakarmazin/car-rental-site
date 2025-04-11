const buttons = document.querySelectorAll(".second-step__list .check-button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const parentLi = button.closest(".second-step__list li");
    parentLi.classList.toggle("active");
  });
});

const proceedButtons = document.querySelectorAll(".proceed-btn");
proceedButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentStep = document.querySelector(".step-content.active");
    const currentStepId = currentStep.id;
    const currentStepNumber = parseInt(currentStepId.split("-")[1]);
    const nextStepNumber = currentStepNumber + 1;
    const nextStep = document.getElementById(`step-${nextStepNumber}`);
    if (nextStep) {
      currentStep.classList.remove("active");
      nextStep.classList.add("active");
    }
  });
});
document.getElementById("step-1").classList.add("active");
