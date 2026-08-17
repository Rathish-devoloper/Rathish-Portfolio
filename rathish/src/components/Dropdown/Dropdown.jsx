function Dropdown(props) {
  return (
    <select>
      <option>{props.option[0]}</option>
      <option>{props.option[1]}</option>
      <option>{props.option[2]}</option>
    </select>
  );
}
export default Dropdown;
