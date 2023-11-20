const Card = ({ children, className, ...props }) => {
  return (
    <>
      <div
        className={` min-w-[100%] space-x-2 space-y-4 rounded-xl  ${className}`}
      >
        {children}
      </div>
    </>
  );
};
export default Card;
