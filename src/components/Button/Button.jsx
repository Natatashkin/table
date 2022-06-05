const Button = ({ title, onClick }) => {
  return (
    <button type="button" className="button" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
