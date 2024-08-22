import { useState } from "react";
import { useNavigate } from "react-router-dom";
import inicioVideo from "../images/inicioVideo.mp4"; // Asegúrate de que el archivo esté en la carpeta 'images'

const Landing = () => {
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/preguntas");
  };

  const handleVideoLoadedData = () => {
    setLoading(false); // Ocultar el fondo de carga cuando el video se haya cargado
  };

  return (
    <div className="relative w-full h-screen">
      {/* Fondo azul de carga */}
      {loading && (
        <div className="absolute inset-0 bg-[#15438F] z-10 flex items-center justify-center">
          {/* Puedes agregar un spinner o mensaje de "Cargando..." aquí si lo deseas */}
        </div>
      )}

      {/* Video */}
      <video
        src={inicioVideo}
        onClick={handleClick}
        className="w-full h-full object-cover noZoom z-0"
        autoPlay
        loop
        muted
        onLoadedData={handleVideoLoadedData}
      />
    </div>
  );
};

export default Landing;
