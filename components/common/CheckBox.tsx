import { Checkbox } from "@mui/material";

const uncheckedIcon = (
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#8A8A8A"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <rect x="3" y="3" width="18" height="18" rx="3" stroke="#8A8A8A" fill="none" />
</svg>
  );

export default function CustomCheckbox(props: any) {
  const {label, additionalClassStyle = "", state, updateState} = props
  console.log("==>1", state);

  const handleCheckBox = () => {
    console.log("==>", state);
    updateState(!state);
  }

  return (
    <div className={`flex items-center ${additionalClassStyle}`} onClick={handleCheckBox}>
      <Checkbox
            color="primary"
            onChange={ handleCheckBox}
            checked={state}
            className=""
            style={{
            color: "#2F80ED",
            marginLeft: "-10px",
            }}
            icon={uncheckedIcon}
        />

      <div
        onClick={handleCheckBox}
        className="cursor-pointer text-sm text-gray-700 font-poppins"
      >
        {label}
      </div>
    </div>
  );
}
