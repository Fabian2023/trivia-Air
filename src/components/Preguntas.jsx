import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate para la navegación
import pregunta1 from "../images/PREGUNTA 1-1.png";
import respuesta1 from "../images/PREGUNTA 1-2.png";
import pregunta2 from "../images/PREGUNTA 2-2.png";
import respuesta2 from "../images/PREGUNTA 2-1.png";
import pregunta3 from "../images/PREGUNTA 3-2.png";
import respuesta3 from "../images/PREGUNTA 3-1.png";
import pregunta4 from "../images/PREGUNTA 4-1.png"; // Importar imagen de la pregunta 4
import respuestaNo4 from "../images/PREGUNTA 4-2.png"; // Importar imagen de la respuesta "No"
import respuestaSi4 from "../images/PREGUNTA 4-3.png"; // Importar imagen de la respuesta "Sí"
import pregunta5 from "../images/PREGUNTA 5-1.png"; // Importar imagen de la pregunta 5
import respuesta5 from "../images/PREGUNTA 5-2.png"; // Importar imagen de la respuesta 5
import cierre from "../images/PANTALLA DE CIERRE.png"; // Importar imagen de cierre

const Preguntas = () => {
  const [currentQuestion, setCurrentQuestion] = useState("pregunta1");
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);
  const [respuestaFinal, setRespuestaFinal] = useState(null); // Nuevo estado para las respuestas
  const [showCierre, setShowCierre] = useState(false); // Nuevo estado para manejar la imagen de cierre
  const navigate = useNavigate(); // Inicializar useNavigate

  const handleClickPregunta = () => {
    if (currentQuestion === "pregunta1") {
      setMostrarRespuesta(true);
      setCurrentQuestion("respuesta1");
    } else if (currentQuestion === "pregunta2") {
      setMostrarRespuesta(true);
      setCurrentQuestion("respuesta2");
    } else if (currentQuestion === "pregunta3") {
      setMostrarRespuesta(true);
      setCurrentQuestion("respuesta3");
    } else if (currentQuestion === "pregunta4") {
      setMostrarRespuesta(true);
      setCurrentQuestion("pregunta4"); // No cambies a respuesta4 aquí
    } else if (currentQuestion === "respuesta4") {
      // No hay acción adicional al hacer clic en respuesta4
    }
  };

  const handleClickRespuesta = (respuesta) => {
    setMostrarRespuesta(true);
    setRespuestaFinal(respuesta); // Cambiar la respuesta basada en el clic
    setCurrentQuestion("respuesta4"); // Cambia a respuesta4
  };

  const handleClickPregunta5 = () => {
    setMostrarRespuesta(true);
    setCurrentQuestion("respuesta5");
  };

  useEffect(() => {
    let timer;

    if (currentQuestion === "respuesta1") {
      timer = setTimeout(() => {
        setMostrarRespuesta(false);
        setCurrentQuestion("pregunta2");
      }, 8000); // 8 segundos
    } else if (currentQuestion === "respuesta2") {
      timer = setTimeout(() => {
        setMostrarRespuesta(false);
        setCurrentQuestion("pregunta3");
      }, 11000); // 12 segundos
    } else if (currentQuestion === "respuesta3") {
      timer = setTimeout(() => {
        setMostrarRespuesta(false);
        setCurrentQuestion("pregunta4"); // Avanzar a la pregunta 4
      }, 9000); // 10 segundos
    } else if (currentQuestion === "respuesta4") {
      timer = setTimeout(() => {
        setMostrarRespuesta(false);
        // Aquí puedes finalizar el flujo o mostrar la pregunta 5
        setCurrentQuestion("pregunta5"); // Cambia a la pregunta 5 después de respuesta4
      }, 9000); // 10 segundos
    } else if (currentQuestion === "respuesta5") {
      // Mostrar respuesta5 durante 5 segundos
      timer = setTimeout(() => {
        setMostrarRespuesta(false);
        setShowCierre(true); // Cambiar a mostrar la imagen de cierre
      }, 5000); // 5 segundos
    }

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, [currentQuestion]);

  // Nuevo useEffect para manejar la redirección después de mostrar la imagen de cierre
  useEffect(() => {
    let timer;
    if (showCierre) {
      timer = setTimeout(() => {
        navigate("/"); // Redirigir a la ruta /
      }, 5000); // 5 segundos
    }
    
    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, [showCierre, navigate]);

  return (
    <div className="relative">
      <div>
        {currentQuestion === "pregunta1" && !mostrarRespuesta && (
          <img src={pregunta1} alt="inicio" className="noZoom" />
        )}
        {currentQuestion === "respuesta1" && mostrarRespuesta && (
          <img src={respuesta1} alt="respuesta" className="noZoom" />
        )}
        {currentQuestion === "pregunta2" && !mostrarRespuesta && (
          <img src={pregunta2} alt="pregunta2" className="noZoom" />
        )}
        {currentQuestion === "respuesta2" && mostrarRespuesta && (
          <img src={respuesta2} alt="respuesta2" className="noZoom" />
        )}
        {currentQuestion === "pregunta3" && !mostrarRespuesta && (
          <div className="relative">
            <img src={pregunta3} alt="pregunta3" className="noZoom" />
            <div
              className="absolute top-[600px] left-[120px] w-60 h-60"
              onClick={handleClickPregunta}
            ></div>
            <div
              className="absolute top-[600px] left-[420px] w-60 h-60"
              onClick={handleClickPregunta}
            ></div>
            <div
              className="absolute top-[600px] left-[720px]  w-60 h-60 "
              onClick={handleClickPregunta}
            ></div>
          </div>
        )}
        {currentQuestion === "respuesta3" && mostrarRespuesta && (
          <img src={respuesta3} alt="respuesta3" className="noZoom" />
        )}
        {currentQuestion === "pregunta4" && !mostrarRespuesta && (
          <div className="relative">
            <img src={pregunta4} alt="pregunta4" className="noZoom" />
            <div
              className="absolute top-[500px] left-[220px] w-[630px] h-[480px] "
              onClick={() => handleClickRespuesta(respuestaNo4)} // Cambiar aquí
            ></div>
            <div
              className="absolute top-[1020px] left-[220px] w-[630px] h-[480px] "
              onClick={() => handleClickRespuesta(respuestaSi4)} // Cambiar aquí
            ></div>
          </div>
        )}
        {currentQuestion === "respuesta4" &&
          mostrarRespuesta &&
          respuestaFinal && (
            <img src={respuestaFinal} alt="respuestaFinal" className="noZoom" />
          )}
        {currentQuestion === "pregunta5" && !mostrarRespuesta && (
          <div className="relative">
            <img src={pregunta5} alt="pregunta5" className="noZoom" />
            <div
              className="absolute top-[680px] left-[100px] w-[880px] h-14 "
              onClick={handleClickPregunta5}
            ></div>
            <div
              className="absolute top-[900px] left-[100px] w-[880px] h-14 "
              onClick={handleClickPregunta5}
            ></div>
            <div
              className="absolute top-[1020px] left-[100px] w-[880px] h-14"
              onClick={handleClickPregunta5}
            ></div>
            <div
              className="absolute top-[800px] left-[100px] w-[880px] h-14 "
              onClick={handleClickPregunta5}
            ></div>
          </div>
        )}
        {currentQuestion === "respuesta5" && mostrarRespuesta && (
          <img src={respuesta5} alt="respuesta5" className="noZoom" />
        )}
        {/* Mostrar imagen de cierre después de respuesta5 */}
        {showCierre && (
          <img src={cierre} alt="cierre" className="noZoom" />
        )}
      </div>
      {currentQuestion !== "pregunta5" &&
        currentQuestion !== "respuesta5" &&
        currentQuestion !== "pregunta3" &&
        currentQuestion !== "pregunta4" && (
          <>
            <div
              className="absolute top-[985px] left-[200px] p-4 w-80 h-28 rounded-lg  cursor-pointer"
              onClick={handleClickPregunta}
            >
              {/* Contenido del div */}
            </div>
            <div
              className="absolute top-[985px] left-[550px] p-4 w-80 h-28 rounded-lg  cursor-pointer"
              onClick={handleClickPregunta}
            >
              {/* Contenido del div */}
            </div>
          </>
        )}
    </div>
  );
};

export default Preguntas;
