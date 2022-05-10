import { useState, useEffect } from "react";
import Template from "./Template";

const Calculator = () => {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState("");
  const [already, setAlready] = useState(false);
  const [feed, setFeed] = useState(0);

  const handleClick = (e) => {
    if (num === 0) {
      setNum(e.target.value);
    } else {
      setNum(num + e.target.value);
    }
  };

  const handleDelete = () => {
    setNum(0);
    setOldNum(0);
    setFeed(0);
    setAlready(false);
    setOperator("");
  };

  const changeOp = () => {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  };

  let a = 0;

  const plus = () => {
    setOperator("+");
    if (!already) {
      setOldNum(num);
      a = num;
      setAlready(true);
    } else {
      if (operator !== "+") {
        a = eval(parseFloat(num) + operator + parseFloat(oldNum));
        setOldNum(a);
      } else {
        a = parseFloat(num) + parseFloat(oldNum);
        setOldNum(a);
      }
    }
    setFeed(a + "+");
    setNum(0);
  };

  const less = () => {
    setOperator("-");
    if (!already) {
      setOldNum(num);
      a = num;
      setAlready(true);
    } else {
      if (operator !== "-") {
        a = eval(parseFloat(num) + operator + parseFloat(oldNum));
        setOldNum(a);
      } else {
        a = parseFloat(num) - parseFloat(oldNum);
        setOldNum(a);
      }
    }
    setFeed(a + "-");
    setNum(0);
  };

  const division = () => {
    setOperator("/");
    if (!already) {
      setOldNum(num);
      a = num;
      setAlready(true);
    } else {
      if (operator !== "/") {
        a = eval(parseFloat(num) + operator + parseFloat(oldNum));
        setOldNum(a);
      } else {
        a = parseFloat(oldNum) / parseFloat(num);
        setOldNum(a);
      }
    }
    setFeed(a + "/");
    setNum(0);
  };

  const times = () => {
    setOperator("*");
    if (!already) {
      setOldNum(num);
      a = num;
      setAlready(true);
    } else {
      if (operator !== "*") {
        a = eval(parseFloat(oldNum) + operator + parseFloat(num));
        setOldNum(a);
      } else {
        a = parseFloat(num) * parseFloat(oldNum);
        setOldNum(a);
      }
    }
    setFeed(a + "*");
    setNum(0);
  };

  const porcentage = () => {
    setNum(num / 100);
  };

  const result = () => {
    if (operator === "+") {
      setFeed(feed + num + "=");
      setNum(Number(num) + Number(oldNum));
      setOperator("+");
    } else if (operator === "-") {
      setFeed(feed + num + "=");
      setNum(Number(oldNum) - Number(num));
      setOperator("-");
    } else if (operator === "/") {
      setFeed(feed + num + "=");
      setNum(Number(oldNum) / Number(num));
      setOperator("/");
    } else if (operator === "*") {
      setFeed(feed + num + "=");
      setNum(Number(oldNum) * Number(num));
      setOperator("*");
    }
    setAlready(false);
  };

  return (
    <Template
      num={num}
      handleClick={handleClick}
      handleDelete={handleDelete}
      changeOp={changeOp}
      plus={plus}
      feed={feed}
      sub={less}
      result={result}
      division={division}
      times={times}
      porcentage={porcentage}
    />
  );
};

export default Calculator;
