var beep = new Audio("beep3.mp3");
var mouseclick = new Audio("Mouseclick.mp3");
var done = new Audio("wrong.mp3");

const InsertionSortButton = document.querySelector(".InsertionSort");
InsertionSortButton.addEventListener("click", async function () {
  // headingchange1.textContent = "Insertion Sort";
  selectText.innerHTML = `Insertion Sort..`;
  mouseclick.play();
  const description = document.querySelector("#description");
  description.style.display = "flex";
  const section = document.querySelector("#fullbody");
  section.style.height = "184vh";
  await descriptionText_insertion();

  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await InsertionSort();
  // enableSortingBtn();
  // enableSizeSlider();
  enableNewArrayBtn();
});

async function descriptionText_insertion() {
  const section = document.querySelector("#fullbody");
  section.style.height = `184vh`;

  const description = document.querySelector("#description");
  description.style.display = "flex";

  const code = document.querySelector("#code_java");
  // console.log(code.innerHTML)
  code.innerHTML = `// C++ program for implementation of Insertion Sort
        #include <iostream>
        using namespace std;
        int main()
        {
            int n = 5;
            int arr[n];
            for (int i = 0; i < n; i++)
            {
                cin >> arr[i];
            }

            for (int i = 1; i < n; i++)
            {
                int current = arr[i];
                int j = i - 1;
                while (arr[j] > current && j >= 0)
                {
                    arr[j + 1] = arr[j];
                    j--;
                }
                arr[j + 1] = current;
            }

            for (int i = 0; i < n; i++)
            {
                cout << arr[i] << " ";
            }
            cout << endl;

            return 0;
        }



`;
  const time = document.querySelector("#time");
  time.innerHTML = `The worst-case (and average-case) complexity of the insertion sort algorithm is O(n²). Meaning that, in the worst case, the time taken to sort a list is proportional to the square of the number of elements in the list. 
    The best-case time complexity of insertion sort algorithm is O(n) time complexity.

    Time Complexity: O(N^2)
`;

  const space = document.querySelector("#space");
  space.innerHTML = `The space complexity of insertion sort is <b>O (1)</b>.
    It is because, in insertion sort, an extra variable is required for swapping.

    Auxiliary Space: O(1)
        `;
}

async function InsertionSort() {
  const element = document.querySelectorAll(".bar");
  element[0].style.background = "cyan";
  for (let i = 1; i < element.length; i++) {
    let j = i - 1;
    let p = element[i].style.height;
    element[i].style.background = "rgb(250, 5, 54)";
    await waitforme(delay);

    while (j >= 0 && parseInt(element[j].style.height) > parseInt(p)) {
      element[j].style.background = "rgb(9, 102, 2)";
      element[j + 1].style.height = element[j].style.height;
      j--;
      beep.play();
      await waitforme(delay);

      for (let k = i; k >= 0; k--) {
        element[k].style.background = "rgb(3, 252, 11)";
      }
    }
    element[j + 1].style.height = p;
    element[i].style.background = "rgb(3, 252, 11)";
  }
  selectText.innerHTML = `Sorting Complete!`;
  done.play();
}
