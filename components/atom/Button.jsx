const Button = ({ onClick, children, className }) => {
  const btnStyle = `${className} bold text-lg border-2  border-white  rounded-lg`;

  return (
    <button className={btnStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
