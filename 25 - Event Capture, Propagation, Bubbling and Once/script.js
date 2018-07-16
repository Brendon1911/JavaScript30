const divs = document.querySelectorAll("div");
const button = document.querySelectorAll("button");

function logText(e) {
  console.log(this.classList.value);
  // e.stopPropagation(); // stop bubbling!
}

divs.forEach(div => div.addEventListener("click", logText, {
  capture: false,
  once: true
}));

button.addEventListener("click", () => {
  console.log("click!!!");
}, {
  once: true
});