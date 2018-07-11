const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked;

function handleCheck(e) {
  // Check if the shift key was down
  // And check if it is being checked
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // Do the thing
    // Loop over every checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("Starting to check them in between");
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));