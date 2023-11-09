// eslint-disable-next-line react/prop-types
const Button = ({ clickHandler }) => {
  return (
    <>
      <button
        onClick={() => {
          clickHandler();
        }}
      >
        Add Color
      </button>
    </>
  );
};

export default Button;
