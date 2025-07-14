const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.textContent;
    if (val === "clear") {
      display.value = "";
    } else if (val === "del") {
      display.value = display.value.slice(0, -1);
    } else if (val === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += val;
    }
  });
});
