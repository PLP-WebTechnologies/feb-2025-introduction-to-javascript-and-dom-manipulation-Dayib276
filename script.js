// Change the text content of the paragraph
function changeText() {
    const desc = document.getElementById("description");
    desc.textContent = "The text has been updated using JavaScript!";
  }
  
  // Change the style of the page title
  function changeStyle() {
    const title = document.getElementById("page-title");
    title.classList.toggle("highlight");
  }
  
  // Add or remove a dynamic box
  function toggleBox() {
    const container = document.getElementById("container");
    const box = document.getElementById("dynamic-box");
  
    if (box) {
      container.removeChild(box);
    } else {
      const newBox = document.createElement("div");
      newBox.id = "dynamic-box";
      newBox.textContent = "I was added dynamically!";
      container.appendChild(newBox);
    }
  }
  