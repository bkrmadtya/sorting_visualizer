import React, { useState, useEffect } from "react";

import BarContainter from "components/BarContainer";

import { generateBarsWithRandomHeights } from "helper/generator";
import { isArraySorted } from "helper/utils";

import { bubbleSort } from "algorithm";

const SortingVisualizer = () => {
  const [arraySize, setArraySize] = useState(10);
  const [array, setArray] = useState(generateBarsWithRandomHeights(arraySize));
  const [sortingInProgress, setSortingInProgress] = useState(false);
  const [sortingSpeedInMS, setSortingSpeedInMS] = useState(10);

  useEffect(() => {
    resetArray();
  }, [arraySize]);

  const updateWithDelay = (array) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setArray([...array]);
        resolve();
      }, sortingSpeedInMS / array.length);
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

      <ArraySizeSlider arraySize={arraySize} setArraySize={setArraySize} />

      <SortingSpeedSlider
        sortingSpeedInMS={sortingSpeedInMS}
        setSortingSpeedInMS={setSortingSpeedInMS}
      />

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

const ArraySizeSlider = ({ setArraySize, arraySize }) => {
  return (
    <>
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
    </>
  );
};

const SortingSpeedSlider = ({ setSortingSpeedInMS, sortingSpeedInMS }) => {
  return (
    <>
      <input
        type="range"
        min={10}
        max={100}
        step={10}
        value={sortingSpeedInMS}
        onChange={({ target }) => {
          let size = target.value;

          if (size > 100 || size < 10) {
            size = 50;
          }

          setSortingSpeedInMS(size);
        }}
      />
      <span>Sorting speed :: {sortingSpeedInMS}</span>
    </>
  );
};
