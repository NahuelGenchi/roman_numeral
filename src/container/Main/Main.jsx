import {useRef, useState} from "react";
import "./Main.scss";

const Main = function() {
  const [num, setNum] = useState('');
  const [message, setMessage] = useState('');
  const inputRef = useRef(null);
  const min = 1;
  const max = 4999;

  const handleNumChange = function(event) {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setNum(value);
  }
  function romanize(num) {
    let lookup = {
      M:1000,
      CM:900,
      D:500,
      CD:400,
      C:100,
      XC:90,
      L:50,
      XL:40,
      X:10,
      IX:9,
      V:5,
      IV:4,
      I:1
    };
    let roman = "";
    let i;
    for (i in lookup) {
      while (num >= lookup[i]) {
        roman += i;
        num -= lookup[i];
      };
    };
    return roman;
  }

  function handleClick() {
    let myInput = inputRef.current.value;
    setMessage(romanize(myInput));
    setNum("");
  };

  return (
    <main className="main">
      <div className="input-container">
        <input ref={inputRef} type="number" value={num} onChange={handleNumChange} placeholder="Type a number.."/>
        <button onClick={handleClick}><ion-icon name="repeat"></ion-icon></button>
      </div>
      <div className="output-container">
        <span>
          {message === "" ? "Roman numeral..." : message}
        </span>
      </div>
    </main>
  );
};

export default Main;