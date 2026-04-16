const CardWrapper = ({ children }) => {
  return (
    <div className="wrapper">
      {/* passing/rendering children as props */}
      {children}
      this is a Wrapper component
    </div>
  );
};

export default CardWrapper;
