import React, { useState, useEffect } from "react";

import BarContainter from "components/BarContainer";

import { generateBarsWithRandomHeights } from "helper/generator";
import { isArraySorted } from "helper/utils";

import { bubbleSort } from "algorithm";

const SORTING_SPEED_MS = 0;

const SortingVisualizer = () => {
  const [arraySize, setArraySize] = useState(10);
  const [array, setArray] = useState(generateBarsWithRandomHeights(arraySize));
  const [sortingInProgress, setSortingInProgress] = useState(false);

  useEffect(() => {
    resetArray();
  }, [arraySize]);

  const updateWithDelay = (array) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setArray([...array]);
        resolve();
      }, SORTING_SPEED_MS / array.length);
    });
  };

  const sort = async (e) => {
    e.preventDefault();
    const isSorted = isArraySorted(array);
    if (!isSorted && !sortingInProgress) {
      setSortingInProgress(true);

      await bubbleSort(array, updateWithDelay);

      setSortingInProgress(false);
    }
  };

  const resetArray = () => {
    if (!sortingInProgress) {
      setArray(generateBarsWithRandomHeights(arraySize));
    }
  };

  return (
    <div>
      <BarContainter array={array} />
      <input
        type="range"
        min={10}
        max={200}
        value={arraySize}
        onChange={({ target }) => {
          let size = target.value;

          if (size > 200 || size < 10) {
            size = 50;
          }

          setArraySize(size);
        }}
      />
      <span>Size of array :: {arraySize}</span>
      <button onClick={sort} disabled={sortingInProgress}>
        Sort
      </button>
      <button onClick={resetArray} disabled={sortingInProgress}>
        Reset
      </button>
    </div>
  );
};

export default SortingVisualizer;
