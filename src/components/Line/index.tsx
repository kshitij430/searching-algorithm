import styles from "./index.module.css";

const Line = (props: {
  barHeight: number;
  currentNumber: number;
  left?: number;
  right?: number;
}) => {
  const { barHeight } = props;
  const onClick = (number: number) => {
    alert(number);
  };

  let backgroundColor = "";
  if (props.left != undefined && props.right != undefined) {
    if (barHeight === props.currentNumber) {
      backgroundColor = "black";
    } else if (barHeight >= props.left && barHeight <= props.right) {
      backgroundColor = "purple";
    } else {
      backgroundColor = "red";
    }
  } else {
    if (barHeight == props.currentNumber) backgroundColor = "green";
    else backgroundColor = "purple";
  }

  return (
    <div
      onClick={onClick.bind(this, props.barHeight)}
      className={styles["line"]}
      style={{
        cursor: "pointer",
        height: barHeight / 20 + "px",
        fontSize: 50,
        backgroundColor: backgroundColor,
      }}
    ></div>
  );
};

export default Line;
