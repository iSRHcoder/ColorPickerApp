/* eslint-disable react/prop-types */
const Input = ({ changeHandler, enterKeyHandler, value }) => {
  return (
    <>
      <input
        value={value}
        onChange={(e) => {
          changeHandler(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            enterKeyHandler();
          }
        }}
      />
    </>
  );
};

export default Input;
