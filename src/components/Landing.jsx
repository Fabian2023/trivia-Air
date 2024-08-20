import { useNavigate } from "react-router-dom";
import inicioVideo from "../images/inicioVideo.mp4"; // Asegúrate de que el archivo esté en la carpeta 'images'

const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/preguntas");
  };

  return (
    <div>
      <div className="w-full h-screen">
        <video
          src={inicioVideo}
          onClick={handleClick}
          className="w-full h-full object-cover noZoom"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default Landing;
