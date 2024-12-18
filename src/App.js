import "./App.css";
import { useState } from "react";
import CompteurF from "./CompteurF";
import NameForm from "./NameForm";
import ConsomApiFetch from "./ConsomApiFetch";

function App() {
  const [charge, setCharge] = useState(true);
  var radios = [
    { value: 1, text: "radio1" },
    { value: 2, text: "radio2" },
    { value: 3, text: "radio3", checked: true },
    { value: 4, text: "radio4" },
  ];
  const numbers = [1, 2, 3, 4, 5];
  return (
    <>
        <ConsomApiFetch />
    </>
  );
}

export default App;
