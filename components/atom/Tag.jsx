const Tag = ({ children, className, ...props }) => {
  return (
    <div className={`py-1 px-2 text-xs max-h-[30px] rounded-xl ${className}`}>
      {children}
    </div>
  );
};

export default Tag;
