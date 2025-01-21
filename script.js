//your code here
let dragElement = null;

// Store the dragged element
function dragStart(e) {
  dragElement = e.target;
}

// Allow drop by preventing default behavior
function dragOver(e) {
  e.preventDefault();
}

// Swap content (images) on drop
function drop(e) {
  e.preventDefault();
  const target = e.target;
  target.appendChild(dragElement);
  dragElement = "";
  dragElement.appendChild(target);
}
