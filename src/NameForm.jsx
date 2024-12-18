import React from "react";

const RadioGroup = (props) => {
  const [checked, setChecked] = React.useState([2,3]);

  const onChangeRadio = (e) => {
    var arr = [...checked];
    if (!arr.includes(Number(e.target.value))) {
      arr.push(Number(e.target.value));
    } else {
      arr = arr.filter((item) => item !== Number(e.target.value));
    }
    setChecked(arr);
  };
  return (
    <div>
      {props.radios.map((radio, index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={radio.value}
            name={props.name}
            checked={checked.includes(Number(radio.value))}
            onChange={onChangeRadio}
          />
          {radio.text}
        </label>
      ))}
      {checked.map((val, index) => {
        return <p key={index}>{val}</p>
      })}
    </div>
  );
};

export default RadioGroup;
