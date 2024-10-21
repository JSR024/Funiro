const Flex = ({ className, children }) => {
  return <div className={`flex flex-wrap ${className}`}>{children}</div>;
};

export default Flex;
