const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector("input.description");
const descriptionP = document.querySelector("p.description");
const descriptionButton = document.querySelector("button.description");
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

toggleList.addEventListener("click", () => {
  if (listDiv.style.display == "none") {
    listDiv.style.display = "block";
    toggleList.textContent = "Hide List";
  } else {
    listDiv.style.display = "none";
    toggleList.textContent = "Show List";
  }
});

descriptionButton.addEventListener("click", () => {
  descriptionP.textContent = descriptionInput.value + ':';
  descriptionInput.value = "";
});

descriptionP.title = "List Description";

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = "";
});
