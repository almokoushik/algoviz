var beep = new Audio("beep3.mp3");
var mouseclick = new Audio("Mouseclick.mp3");
var done = new Audio("wrong.mp3");

const BubbleSortButton = document.querySelector(".BubbleSort");
BubbleSortButton.addEventListener("click", async function () {
  // headingchange1.textContent = "Bubble Sort";
  mouseclick.play();
  selectText.innerHTML = `Bubble Sort..`;
  const description = document.querySelector("#description");
  description.style.display = "flex";
  const section = document.querySelector("#fullbody");
  section.style.height = "184vh";
  console.log("Bubble sort");
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await BubbleSort();
  // enableSortingBtn();
  // enableSizeSlider();
  enableNewArrayBtn();
});

async function BubbleSort() {
  const elements = document.querySelectorAll(".bar");
  for (let i = 0; i < elements.length - 1; i++) {
    // loop for all elements
    for (let j = 0; j < elements.length - i - 1; j++) {
      // loop for all the elements except sorted elements
      elements[j].style.background = "rgb(250, 5, 54)";
      elements[j + 1].style.background = "rgb(250, 5, 54)";

      // Display the values of the bars
      elements[j].textContent = parseInt(elements[j].style.height); // Set the value as text content
      elements[j + 1].textContent = parseInt(elements[j + 1].style.height);

      if (
        parseInt(elements[j].style.height) >
        parseInt(elements[j + 1].style.height)
      ) {
        // Swapping
        await waitforme(delay);
        swapping(elements[j], elements[j + 1]); // Perform the swap
        beep.play();

        // Update the displayed values after swapping
        elements[j].textContent = parseInt(elements[j].style.height); // Update text content
        elements[j + 1].textContent = parseInt(elements[j + 1].style.height);
      }

      // Reset the background colors after comparing/swapping
      elements[j].style.background = "rgb(245, 212, 24)";
      elements[j + 1].style.background = "rgb(245, 212, 24)";
    }
    // Mark the sorted element
    elements[elements.length - 1 - i].style.background = "rgb(0,255,0)";
    elements[elements.length - 1 - i].textContent = parseInt(
      elements[elements.length - 1 - i].style.height
    );
  }
  // Mark the first element as sorted
  elements[0].style.background = "rgb(0,255,0)";
  elements[0].textContent = parseInt(elements[0].style.height);

  done.play();
  selectText.innerHTML = `Sorting Complete!`;
}
