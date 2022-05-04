import { useState } from "react";
import Template from "./Template";

const Calculator = () => {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();
  const [feed, setFeed] = useState(" . ");

  const handleClick = (e) => {
    if (num === 0) {
      setNum(e.target.value);
    } else {
      setNum(num + e.target.value);
    }
  };

  const handleDelete = () => {
    setNum(0);
    setFeed(" . ");
  };

  const porcentage = () => {
    setNum(num / 100);
  };

  const changeOp = () => {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  };

  const plus = () => {
    setOperator("+");
    setOldNum(num);
    setNum(0);
  };
  const sub = () => {
    setOperator("-");
    setOldNum(num);
    setNum(0);
  };
  const division = () => {
    setOperator("/");
    setOldNum(num);
    setNum(0);
  };
  const times = () => {
    setOperator("*");
    setOldNum(num);
    setNum(0);
  };

  const feedNum = (res) => {
    setFeed(oldNum + " " + operator + " " + num + " = " + res);
  };

  const result = () => {
    let answer = 0;
    if (operator === "+") {
      answer = Number(oldNum) + Number(num);
      setNum(answer);
    } else if (operator === "-") {
      answer = Number(oldNum) - Number(num);
      setNum(answer);
    } else if (operator === "/") {
      answer = Number(oldNum) / Number(num);
      setNum(answer);
    } else if (operator === "*") {
      answer = Number(oldNum) * Number(num);
      setNum(answer);
    }
    feedNum(answer);
    setOldNum(0);
  };

  return (
    <Template
      plus={plus}
      handleClick={handleClick}
      handleDelete={handleDelete}
      changeOp={changeOp}
      division={division}
      times={times}
      num={num}
      sub={sub}
      porcentage={porcentage}
      result={result}
      feed={feed}
    />
  );
};

export default Calculator;
