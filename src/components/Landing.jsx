import { useNavigate } from "react-router-dom";
import inicio from "../images/inicio.png";

const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/preguntas");
  };

  return (
    <div>
      <div>
        <img
          src={inicio}
          alt="inicio"
          onClick={handleClick}
          className="noZoom"
        ></img>
      </div>
    </div>
  );
};

export default Landing;
