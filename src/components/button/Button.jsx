import "./button.css";

const Button = ({ label, onClick }) => { 
  return (
    <button className="cta-button" type="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
