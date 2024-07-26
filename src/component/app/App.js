// import { useState } from "react";
import { useState } from "react";
import Button from "../button/Button";
import "../../assets/css/index.css";

function App() {
  let [str, setStr] = useState("");

  let [disval, setDisval] = useState("");



  const displayShow = (e) => {
    setStr((str += e.target.id));
    setDisval((disval = str));
    // console.log(str);
  };
  const clearDisplay = (e) => {
    setStr((str = ""));
    setDisval(str);
  };
  const backDisplay = (e) => {
    setStr(( str=str.substring(0, str.length - 1)));
    setDisval(disval = str);
  };

  const calcDisplay = (e) => {
    try {
      if (str.length === 0) {
        setStr((str = ""));
        setDisval(str);
      } else {
        setStr((str = eval(str).toString()));
        
        setDisval(str);
        console.log(str);
        // str = eval(str).toFixed(2);
        // str = str.replace(/.00/g, "");
      }
    } catch (errors) {
      setDisval("Error");
      setStr((str = ""));
    }
  };

  return (
    <>
      <div className="container">
        <span id="limbo">
          Limbo <span>96</span>{" "}
        </span>

        <input type="text" id="display"  readOnly  value={disval} />

        <div className="row row1">
          <Button text={"AC"} myclass={"operator"} handler={clearDisplay} />
          <Button text={"←"} myclass={"operator"} handler={backDisplay} />
          <Button text={"/"} myclass={"operator"} handler={displayShow} />
          <Button text={"*"} myclass={"operator"} handler={displayShow} />
        </div>
        <div className="row row2">
          <Button text={7} handler={displayShow} />
          <Button text={8} handler={displayShow} />
          <Button text={9} handler={displayShow} />
          <Button text={"-"} myclass={"operator"} handler={displayShow} />
        </div>
        <div className="row row3">
          <Button text={4} handler={displayShow} />
          <Button text={5} handler={displayShow} />
          <Button text={6} handler={displayShow} />
          <Button text={"+"} myclass={"operator"} handler={displayShow} />
        </div>
        <div className="row row4">
          <Button text={1} handler={displayShow} />
          <Button text={2} handler={displayShow} />
          <Button text={3} handler={displayShow} />
          <Button text={"."} myclass={"operator"} handler={displayShow} />
        </div>
        <div className="row row5">
          <Button text={0} handler={displayShow} />
          <Button text={"00"} handler={displayShow} />
          <Button text={"="} myclass={"equl operator"} handler={calcDisplay} />
        </div>
      </div>
    </>
  );
}
export default App;
