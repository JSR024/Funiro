const Container = ({ children, className }) => {
  return (
    <div className={`max-w-container m-auto px-3 2xl:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
