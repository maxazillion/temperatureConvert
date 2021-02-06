const inputs = document.querySelectorAll("input");
console.log(inputs);

inputs[0].addEventListener("keyup", () => {
  // multiply by 1.8 and add 32
  inputs[1].value = 0;
  inputs[1].value = inputs[0].value * 1.8 + 32;
});

inputs[1].addEventListener("keyup", () => {
  // subtract 32 and multiply by . 5556 (or 5/9).
  inputs[0].value = 0;
  inputs[0].value = (inputs[1].value - 32) * (5 / 9);
});
