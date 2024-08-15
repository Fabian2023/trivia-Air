import { useNavigate } from "react-router-dom";
import inicio from "../images/inicio.png";

const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/preguntas");
  };

  return (
    <div>
      <div className="w-full h-screen">
        <img
          src={inicio}
          alt="inicio"
          onClick={handleClick}
          className="w-full h-full object-cover noZoom"
        />
      </div>
    </div>
  );
};

export default Landing;
