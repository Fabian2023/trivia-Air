import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import pregunta1 from "../images/PREGUNTA1VIDEO.mp4";
import respuesta1 from "../images/RESPUESTA1VIDEO.mp4";
import pregunta2 from "../images/PREGUNTA2VIDEO.mp4";
import respuesta2 from "../images/RESPUESTA2VIDEO.mp4";
import pregunta3 from "../images/PREGUNTA3VIDEO.mp4";
import respuesta3 from "../images/RESPUESTA3VIDEO.mp4";
import pregunta4 from "../images/PREGUNTA4VIDEO.mp4";
import respuestaNo4 from "../images/RESPUESTANO4VIDEO.mp4";
import respuestaSi4 from "../images/RESPUESTASI4VIDEO.mp4";
import pregunta5 from "../images/PANTALLA 5 PREGUNTA.mp4";
import respuesta5 from "../images/PANTALLA 5 RESPUESTA.mp4";
import cierre from "../images/CIERREVIDEO.mp4";

const Preguntas = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);
  const [respuestaFinal, setRespuestaFinal] = useState(null);
  const [showCierre, setShowCierre] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica si la página fue recargada
    const isPageReload = sessionStorage.getItem("isPageReload");
    const preguntasMostradas = JSON.parse(sessionStorage.getItem("preguntasMostradas")) || [];

    if (isPageReload) {
      // Si la página fue recargada, redirige a "/"
      navigate("/", { replace: true });
      sessionStorage.removeItem("isPageReload"); // Limpia el flag
    } else {
      // Selecciona una pregunta aleatoria
      const preguntas = [
        "pregunta1",
        "pregunta2",
        "pregunta3",
        "pregunta4",
        "pregunta5",
      ];
      const preguntaAleatoria =
        preguntas[Math.floor(Math.random() * preguntas.length)];
      setCurrentQuestion(preguntaAleatoria);

      // Marca la página como recargada
      sessionStorage.setItem("isPageReload", "true");
    }

    // Limpiar el flag en la salida del componente
    return () => {
      sessionStorage.removeItem("isPageReload");
    };
  }, [navigate]);

  const handleClickPregunta = () => {
    setMostrarRespuesta(true);
    if (currentQuestion === "pregunta1") {
      setCurrentQuestion("respuesta1");
    } else if (currentQuestion === "pregunta2") {
      setCurrentQuestion("respuesta2");
    } else if (currentQuestion === "pregunta3") {
      setCurrentQuestion("respuesta3");
    } else if (currentQuestion === "pregunta4") {
      setCurrentQuestion("respuesta4");
    } else if (currentQuestion === "pregunta5") {
      setCurrentQuestion("respuesta5");
    }
  };

  const handleClickRespuesta = (respuesta) => {
    setMostrarRespuesta(true);
    setRespuestaFinal(respuesta);
    setCurrentQuestion("respuesta4");
  };

  useEffect(() => {
    let timer;

    if (mostrarRespuesta) {
      timer = setTimeout(() => {
        setMostrarRespuesta(false);
        setShowCierre(true); // Mostrar la imagen de cierre después de la respuesta
      }, 12000); // Mostrar la respuesta durante 5 segundos
    }

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, [mostrarRespuesta]);

  useEffect(() => {
    if (showCierre) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [showCierre, navigate]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">
        {currentQuestion === "pregunta1" && !mostrarRespuesta && (
          <>
            <video
              src={pregunta1}
              className="w-full h-full object-cover noZoom"
              autoPlay
              loop
              muted
            />
            <div
              style={{ top: "51%", left: "18%", width: "30%", height: "6%" }}
              className="absolute "
              onClick={handleClickPregunta}
            >
              {/* Contenido del div */}
            </div>
            <div
              style={{ top: "51%", left: "52%", width: "30%", height: "6%" }}
              className="absolute"
              onClick={handleClickPregunta}
            >
              {/* Contenido del div */}
            </div>
          </>
        )}
        {currentQuestion === "respuesta1" && mostrarRespuesta && (
          <video
            src={respuesta1}
            className="w-full h-full object-cover noZoom"
            autoPlay
            loop
            muted
          />
        )}
        {currentQuestion === "pregunta2" && !mostrarRespuesta && (
          <>
            <video
              src={pregunta2}
              className="w-full h-full object-cover noZoom"
              autoPlay
              loop
              muted
            />
            <div
              style={{ top: "51%", left: "18%", width: "30%", height: "6%" }}
              className="absolute "
              onClick={handleClickPregunta}
            >
              {/* Contenido del div */}
            </div>
            <div
              style={{ top: "51%", left: "52%", width: "30%", height: "6%" }}
              className="absolute"
              onClick={handleClickPregunta}
            >
              {/* Contenido del div */}
            </div>
          </>
        )}
        {currentQuestion === "respuesta2" && mostrarRespuesta && (
          <video
            src={respuesta2}
            className="w-full h-full object-cover noZoom"
            autoPlay
            loop
            muted
          />
        )}
        {currentQuestion === "pregunta3" && !mostrarRespuesta && (
          <>
            <video
              src={pregunta3}
              className="w-full h-full object-cover noZoom"
              autoPlay
              loop
              muted
            />
            <div
              style={{ top: "41%", left: "10%", width: "85%", height: "10%" }}
              className="absolute"
              onClick={handleClickPregunta}
            ></div>
          </>
        )}
        {currentQuestion === "respuesta3" && mostrarRespuesta && (
          <video
            src={respuesta3}
            className="w-full h-full object-cover noZoom"
            autoPlay
            loop
            muted
          />
        )}
        {currentQuestion === "pregunta4" && !mostrarRespuesta && (
          <>
            <video
              src={pregunta4}
              className="w-full h-full object-cover noZoom"
              autoPlay
              loop
              muted
            />
            <div
              style={{ top: "27%", left: "20%", width: "60%", height: "25%" }}
              className="absolute "
              onClick={() => handleClickRespuesta(respuestaNo4)}
            >
              
            </div>
            <div
              style={{ top: "53%", left: "20%", width: "60%", height: "25%" }}
              className="absolute"
              onClick={() => handleClickRespuesta(respuestaSi4)}
            >
              
            </div>
          </>
        )}
        {currentQuestion === "respuesta4" && mostrarRespuesta && (
          <video
          src={respuestaFinal}
          className="w-full h-full object-cover noZoom"
          autoPlay
          loop
          muted
        />
        )}
        {currentQuestion === "pregunta5" && !mostrarRespuesta && (
          <>
            <video
              src={pregunta5}
              className="w-full h-full object-cover noZoom"
              autoPlay
              loop
              muted
            />
            <div
              style={{ top: "58%", left: "10%", width: "80%", height: "24%" }}
              className="absolute"
              onClick={handleClickPregunta}
            ></div>
            {/* <div
              style={{ top: "51%", left: "52%", width: "30%", height: "6%" }}
              className="absolute bg-green-500 "
              onClick={handleClickPregunta}
            ></div>
            <div
              style={{ top: "51%", left: "52%", width: "30%", height: "6%" }}
              className="absolute bg-green-500 "
              onClick={handleClickPregunta}
            ></div>
            <div
              style={{ top: "51%", left: "52%", width: "30%", height: "6%" }}
              className="absolute bg-green-500 "
              onClick={handleClickPregunta}
            ></div>
            <div
              style={{ top: "51%", left: "52%", width: "30%", height: "6%" }}
              className="absolute bg-green-500 "
              onClick={handleClickPregunta}
            ></div> */}
          </>
        )}
        {currentQuestion === "respuesta5" && mostrarRespuesta && (
         <video
         src={respuesta5}
         className="w-full h-full object-cover noZoom"
         autoPlay
         loop
         muted
       />
        )}
        {showCierre && (
          <video
          src={cierre}
          className="w-full h-full object-cover noZoom"
          autoPlay
          loop
          muted
        />
        )}
      </div>
    </div>
  );
};

export default Preguntas;
