var beep = new Audio("beep3.mp3");
var mouseclick = new Audio("Mouseclick.mp3");
var done = new Audio("wrong.mp3");

const QuickSortbutton = document.querySelector(".QuickSort");
QuickSortbutton.addEventListener("click", async function () {
  selectText.innerHTML = `Quick Sort..`;
  mouseclick.play();
  const description = document.querySelector("#description");
  description.style.display = "flex";
  const section = document.querySelector("#fullbody");
  section.style.height = "184vh";
  await descriptionText_quick();
  let element = document.querySelectorAll(".bar");
  let low = 0;
  let high = element.length - 1;
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  await quickSort(element, low, high);
  selectText.innerHTML = `Sorting Complete!`;
  done.play();
  // enableSortingBtn();
  // enableSizeSlider();
  enableNewArrayBtn();
});

async function descriptionText_quick() {
  const section = document.querySelector("#fullbody");
  section.style.height = `184vh`;

  const description = document.querySelector("#description");
  description.style.display = "flex";

  const code = document.querySelector("#code_java");
  // console.log(code.innerHTML)
  code.innerHTML = `// C++ implementation of QuickSort
    #include <bits/stdc++.h>
    using namespace std;

    int merge(vector<int> &nums, int start, int end)
    {
        int piv = nums[start];
        int i = start;
        int j = end;

        while (i < j)
        {
            while (nums[i] <= piv && i <= end - 1)
            {
                i++;
            }

            while (nums[j] > piv && j >= start + 1)
            {
                j--;
            }
            if (i < j)
                swap(nums[i], nums[j]);
        }

        swap(nums[start], nums[j]);

        return j;
    }

    void mergeSort(vector<int> &nums, int start, int end)
    {
        if (start < end)
        {
            int mid = merge(nums, start, end);
            mergeSort(nums, start, mid - 1);
            mergeSort(nums, mid + 1, end);
        }
    }
    int main()

    {

        vector<int> nums = {4, 6, 2, 5, 7, 9, 1, 3};

        mergeSort(nums, 0, nums.size() - 1);

        for (auto i : nums)
            cout << i << " ";
        return 0;
    }


`;
  const time = document.querySelector("#time");
  time.innerHTML = `Worst Case: The worst case occurs when the partition process always picks the greatest or smallest element as the pivot.
    If we consider the above partition strategy where the last element is always picked as a pivot, the worst case would occur when the array is already sorted in increasing or decreasing order. 
    Following is recurrence for the worst case.  

    Best Case:
    The best case occurs when the partition process always picks the middle element as the pivot. 
    The following is recurrence for the best case.

    Average Case: 
    To do average case analysis, we need to consider all possible permutation of array and calculate time taken by every permutation which doesn’t look easy. 
    We can get an idea of average case by considering the case when partition puts O(n/9) elements in one set and O(9n/10) elements in other set. 
    Following is recurrence for this case.
    `;

  const space = document.querySelector("#space");
  space.innerHTML = `Space cmplexity : O(N)

as we are not creating any container other then given array therefore Space complexity will be in order of N
     `;
}

async function partition(element, low, high) {
  beep.play();
  let i = low - 1;
  element[high].style.background = "red";
  for (let j = low; j <= high - 1; j++) {
    beep.play();
    element[j].style.background = "yellow";
    await waitforme(delay);

    if (
      parseInt(element[j].style.height) < parseInt(element[high].style.height)
    ) {
      beep.play();
      i++;
      swapping(element[i], element[j]);

      element[i].style.background = "orange";
      if (i != j) element[j].style.background = "orange";

      await waitforme(delay);
    } else {
      beep.play();
      element[j].style.background = "pink";
    }
  }
  i++;

  await waitforme(delay);
  swapping(element[i], element[high]);

  element[high].style.background = "pink";
  element[i].style.background = "green";
  element[i].style.color = "white";

  await waitforme(delay);

  for (let k = 0; k < element.length; k++) {
    beep.play();
    if (element[k].style.background != "green")
      element[k].style.background = "cyan";
  }

  return i;
}

async function quickSort(element, low, high) {
  if (low < high) {
    beep.play();
    let pivot_index = await partition(element, low, high);
    await quickSort(element, low, pivot_index - 1);
    await quickSort(element, pivot_index + 1, high);
  } else {
    if (
      low >= 0 &&
      high >= 0 &&
      low < element.length &&
      high < element.length
    ) {
      beep.play();
      element[high].style.background = "green";
      element[low].style.background = "green";
      element[high].style.color = "white";
      element[low].style.color = "white";
    }
  }
}
