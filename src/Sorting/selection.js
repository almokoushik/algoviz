var beep = new Audio("beep3.mp3");
var mouseclick = new Audio("Mouseclick.mp3");
var done = new Audio("wrong.mp3");

const SelectionSortButton = document.querySelector(".SelectionSort");
SelectionSortButton.addEventListener("click", async function () {
  // headingchange1.textContent = "Selection Sort";
  selectText.innerHTML = `Selection Sort..`;
  mouseclick.play();
  const description = document.querySelector("#description");
  description.style.display = "flex";
  const section = document.querySelector("#fullbody");
  section.style.height = "184vh";
  await descriptionText_selection();

  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();

  await SelectionSort();
  // enableSortingBtn();
  // enableSizeSlider();
  enableNewArrayBtn();
});

async function descriptionText_selection() {
  const section = document.querySelector("#fullbody");
  section.style.height = `184vh`;

  const description = document.querySelector("#description");
  description.style.display = "flex";

  const code = document.querySelector("#code_java");
  // console.log(code.innerHTML)
  code.innerText = `// C++ program for implementation of Selection Sort
void selectionsort(vector<int> &v)
{
    for (int i = 0; i < v.size() - 1; i++)
    {
        int min = i;
        int didswap = 0;
        for (int j = i + 1; j < v.size(); j++)
        {
            if (v[min] > v[j])
                min = j;
        }
        if (v[i] > v[min])
        {
            swap(v[i], v[min]);
            didswap = 1;
        }
        if (didswap == 0)
            break;
    }
}

int main()
{
    vector<int> v = {13, 46, 24, 52, 20, 9};

    // selectionsort(v);
    // bubblesort(v);
    insertionsort(v);

    for (auto i : v)
    {
        cout << i << " ";
    }

    return 0;
}   
`;
  const time = document.querySelector("#time");
  time.innerHTML = `<b>Time Complexity:</b> The time complexity of Selection Sort is O(N2) as there are two nested loops:

  ⭐One loop to select an element of Array one by one = O(N)
  ⭐Another loop to compare that element with every other Array element = O(N)

  Therefore overall complexity = O(N) * O(N) = O(N*N) = O(N2)
`;

  const space = document.querySelector("#space");
  space.innerHTML = `<b>Auxiliary Space:</b> O(1) as the only extra memory used is for temporary variables while swapping two values in Array. 
The selection sort never makes more than O(N) swaps and can be useful when memory write is a costly operation. `;
}

async function SelectionSort() {
  const element = document.querySelectorAll(".bar");
  for (let i = 0; i < element.length; i++) {
    let smallest_element_index = i;
    element[i].style.background = "rgb(250, 5, 54)";
    for (let j = i + 1; j < element.length; j++) {
      element[j].style.background = "rgb(245, 212, 24)";
      await waitforme(delay);

      if (
        parseInt(element[j].style.height) <
        parseInt(element[smallest_element_index].style.height)
      ) {
        if (smallest_element_index !== i) {
          element[smallest_element_index].style.background = "cyan"; //
        }
        smallest_element_index = j;
      } else {
        element[j].style.background = "cyan"; //
      }
    }
    beep.play();
    await waitforme(delay);
    swapping(element[smallest_element_index], element[i]);
    element[smallest_element_index].style.background = "cyan";
    element[i].style.background = "rgb(0,255,0)";
  }
  selectText.innerHTML = `Sorting Complete!`;
  done.play();
}
