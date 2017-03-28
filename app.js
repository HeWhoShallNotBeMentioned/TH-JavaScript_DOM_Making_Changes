const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const input = document.querySelector("input.description");
const p = document.querySelector("p.description");
const button = document.querySelector("button.description");

toggleList.addEventListener("click", () => {
  if (listDiv.style.display == "none") {
    listDiv.style.display = "block";
    toggleList.textContent = "Hide List";
  } else {
    listDiv.style.display = "none";
    toggleList.textContent = "Show List";
  }

});

button.addEventListener("click", () => {
  p.textContent = input.value + ':';
});

p.title = "List Description";
