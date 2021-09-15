import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [column, setColumn] = useState([]);
  const [number, setNumber] = useState(0);

  const fibbNumber = () => {
    let fn = 1;
    let columns = [];
    let arrNumber = [];
    let currentNumber = 0;
    let currentrow = 1;
    let ud = true;

    for (let x = 0; x < number; x++) {
      fn += currentNumber;
      arrNumber.push(fn);
      currentNumber += fn;
      arrNumber.push(currentNumber);
      if (currentrow % 2 == 0) {
        if (ud) {
          columns.push([currentNumber]);
          ud = false;
        } else {
          columns.push([currentNumber]);
          ud = true;
        }
        currentrow += 1;
      }
      if (arrNumber.length == number && currentrow % 2 == 1) {
        columns.push(arrNumber);
        currentrow += 1;
        arrNumber = [];
      }
    }
    setColumn(columns);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="number"
          onChange={(e) => setNumber(e.target.value)}
          placeholder="input here"
          style={{ margin: "10px 0" }}
        />
        <button onClick={fibbNumber}>Click</button>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {column.map((val, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                {val.map((item, idx) => {
                  return (
                    <div key={idx} style={{ margin: 10, width: 60 }}>
                      {item}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
