import React, { useState, useEffect } from "react";

import BarContainter from "components/BarContainer";

import { generateBarsWithRandomHeights } from "helper/generator";
import { isArraySorted } from "helper/utils";

import * as algorithms from "algorithm";

let count = 1;

const algorithmOptions = Object.keys(algorithms);

const SortingVisualizer = () => {
  const [arraySize, setArraySize] = useState(10);
  const [array, setArray] = useState(generateBarsWithRandomHeights(arraySize));
  const [sortingInProgress, setSortingInProgress] = useState(false);
  const [sortingSpeedInMS, setSortingSpeedInMS] = useState(0);

  const [selectedAlgorithm, setSelectedAlgorithm] = useState(
    algorithmOptions[1]
  );

  useEffect(() => {
    resetArray();
  }, [arraySize]);

  const updateWithDelay = (array) => {
    const speed = sortingSpeedInMS / array.length;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setArray([...array]);
        resolve();
      }, speed);
    });
  };

  const sort = async (e) => {
    e.preventDefault();
    const isSorted = isArraySorted(array);
    if (!isSorted && !sortingInProgress) {
      setSortingInProgress(true);

      await algorithms[selectedAlgorithm](array, updateWithDelay);

      setSortingInProgress(false);
    }
  };

  const resetArray = () => {
    if (!sortingInProgress) {
      setArray(generateBarsWithRandomHeights(arraySize));
    }
  };

  return (
    <div style={containerStyle}>
      <BarContainter array={array} />
      <AlgorithmSelector
        algorithmOptions={algorithmOptions}
        selectedAlgorithm={selectedAlgorithm}
        setSelectedAlgorithm={setSelectedAlgorithm}
      />

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

const AlgorithmSelector = ({
  algorithmOptions,
  selectedAlgorithm,
  setSelectedAlgorithm,
}) => {
  const options = algorithmOptions.map((i) => (
    <option key={i} value={i}>
      {i}
    </option>
  ));
  return (
    <select
      value={selectedAlgorithm}
      onChange={({ target }) => {
        setSelectedAlgorithm(target.value);
      }}
    >
      {options}
    </select>
  );
};

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
        min={0}
        max={10000}
        step={10}
        value={sortingSpeedInMS}
        onChange={({ target }) => {
          let size = target.value;

          if (size > 10000 || size < 10) {
            size = 50;
          }

          setSortingSpeedInMS(size);
        }}
      />
      <span>Sorting speed :: {sortingSpeedInMS} ms</span>
    </>
  );
};

const containerStyle = {
  height: "100vh",
  backgroundColor: "lightGrey",
  zIndex: -100,
};
