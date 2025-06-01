import { useEffect, useMemo, useState } from "react";
import General from "../../utils/General";
import Line from "../Line";
import styles from "./index.module.css";

const App = () => {
  /* MEMO */
  const { numbers, numberToFind } = useMemo(() => {
    const generatedNumbers = General.generateNumber(100);

    return {
      numbers: generatedNumbers,
      numberToFind:
        generatedNumbers[Math.floor(generatedNumbers.length / 2) + 20],
    };
  }, []);

  /* STATE */
  const [currentNumberIndex, setCurrentNumberIndex] = useState<number>(0);

  /* LINEAR SEARCH  */
  // const linearSearch = async () => {
  //   const currentNumber = numbers[currentNumberIndex];
  //   if (currentNumber !== numberToFind) {
  //     await General.sleep(100);
  //     setCurrentNumberIndex((prevIndex) => prevIndex + 1);
  //   } else {
  //     console.log("FOUND THE NUMBER");
  //   }
  // };

  // useEffect(() => {
  //   console.log("HELLO");
  //   linearSearch();
  // }, [currentNumberIndex]);

  /* BINARY SEARCH */
  const [leftIndex, setLeftIndex] = useState<number>(0);
  const [rightIndex, setRightIndex] = useState<number>(numbers.length - 1);

  const binarySearch = async () => {
    let left = 0;
    let right = numbers.length - 1;

    while (left <= right) {
      await General.sleep(2000);
      const mid = Math.floor((left + right) / 2);
      setCurrentNumberIndex(mid);

      if (numbers[mid] === numberToFind) {
        break;
      } else if (numbers[mid] > numberToFind) {
        right = mid - 1;
        setRightIndex(mid - 1);
      } else {
        left = mid + 1;
        setLeftIndex(mid + 1);
      }
    }
  };

  /* EFFECTS */
  useEffect(() => {
    binarySearch();
  }, []);

  return (
    <div>
      <h1>Number To Find: {numberToFind}</h1>
      <div className={styles["container"]}>
        <div className={styles["line-container"]}>
          {numbers.map((barHeight, index) => {
            return (
              <Line
                currentNumber={numbers[currentNumberIndex]}
                key={index}
                barHeight={barHeight}
                left={numbers[leftIndex]}
                right={numbers[rightIndex]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
