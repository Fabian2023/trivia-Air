import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import inicioVideo from "../images/inicioVideo.mp4"; // Asegúrate de que el archivo esté en la carpeta 'images'

const Landing = () => {
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [clickDisabled, setClickDisabled] = useState(false); // Estado para deshabilitar el clic
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener el conteo de recargas desde sessionStorage
    let reloadCount = parseInt(sessionStorage.getItem("reloadCount"), 10);

    if (isNaN(reloadCount)) {
      reloadCount = 0; // Inicializar si no existe el valor
    }

    // Si el conteo es menor a 2, proceder con la recarga
    if (reloadCount < 4) {
      // Incrementar el conteo de recargas
      sessionStorage.setItem("reloadCount", (reloadCount + 1).toString());

      // Recargar la página solo si hay un parámetro de consulta 'reload'
      const queryParams = new URLSearchParams(location.search);
      const shouldReload = queryParams.get("reload");

      if (shouldReload === "true") {
        window.history.replaceState({}, "", "/"); // Eliminar el parámetro 'reload' de la URL
        window.location.reload(); // Recargar la página
      }
    } else {
      // Resetear el conteo después de 2 recargas
      sessionStorage.removeItem("reloadCount");
    }
  }, [location]);

  const handleClick = () => {
    if (clickDisabled) return; // No hacer nada si el clic está deshabilitado

    setClickDisabled(true); // Deshabilitar el clic
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
        className={`w-full h-full object-cover noZoom z-0 ${clickDisabled ? "pointer-events-none" : ""}`}
        autoPlay
        loop
        muted
        onLoadedData={handleVideoLoadedData}
      />
    </div>
  );
};

export default Landing;
