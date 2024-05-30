const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("totalCounter");
const remainingCounter = document.getElementById("remainingCounter");

textareaEl.addEventListener("keyup", () => {
//    console.log("key is pressed")
    updateCounter();

})

function updateCounter() {
    totalCounterEl.innerText = textareaEl.value.length;
    remainingCounter.innerText =
      textareaEl.getAttribute("maxlength") - textareaEl.value.length;

}