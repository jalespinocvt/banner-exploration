// Function: Add new item from input field
function addItem() {
  const input = document.getElementById("newItem").value;
  if (input.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input;
    document.getElementById("exploreList").appendChild(li);
    document.getElementById("newItem").value = "";
  }
}

// Function: Change font family of list items
function changeFont() {
  document.getElementById("exploreList").style.fontFamily = "Courier New, monospace";
}

// Function: Make list items bold
function makeBold() {
  document.getElementById("exploreList").style.fontWeight = "bold";
}
