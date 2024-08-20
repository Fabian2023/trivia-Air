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
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const isPageReload = sessionStorage.getItem("isPageReload");

    if (isPageReload) {
      navigate("/", { replace: true });
      sessionStorage.removeItem("isPageReload");
    } else {
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
      sessionStorage.setItem("isPageReload", "true");
    }

    return () => {
      sessionStorage.removeItem("isPageReload");
    };
  }, [navigate]);

  const handleClickPregunta = () => {
    setIsLoading(true); // Mostrar fondo de carga
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
    setIsLoading(true); // Mostrar fondo de carga
    setMostrarRespuesta(true);
    setRespuestaFinal(respuesta);
    setCurrentQuestion("respuesta4");
  };

  useEffect(() => {
    let timer;

    if (mostrarRespuesta) {
      timer = setTimeout(() => {
        setIsLoading(true); // Mostrar fondo de carga antes del cierre
        setMostrarRespuesta(false);
        setShowCierre(true);
      }, 12000);
    }

    return () => clearTimeout(timer);
  }, [mostrarRespuesta]);

  useEffect(() => {
    if (showCierre) {
      const timer = setTimeout(() => {
        navigate("/");
        setIsLoading(true);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [showCierre, navigate]);

  const handleVideoLoadedData = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#15438F] z-50">
          {/* Puedes agregar un spinner o mensaje de "Cargando..." aquí si lo deseas */}
        </div>
      )}
      <div className="relative w-full h-full">
        {currentQuestion === "pregunta1" && !mostrarRespuesta && (
          <>
            <video
              src={pregunta1}
              className="w-full h-full object-cover noZoom"
              autoPlay
              loop
              muted
              onLoadedData={handleVideoLoadedData}
            />
            <div
              style={{ top: "51%", left: "18%", width: "30%", height: "6%" }}
              className="absolute"
              onClick={handleClickPregunta}
            ></div>
            <div
              style={{ top: "51%", left: "52%", width: "30%", height: "6%" }}
              className="absolute"
              onClick={handleClickPregunta}
            ></div>
          </>
        )}
        {currentQuestion === "respuesta1" && mostrarRespuesta && (
          <video
            src={respuesta1}
            className="w-full h-full object-cover noZoom"
            autoPlay
            loop
            muted
            onLoadedData={handleVideoLoadedData}
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
              onLoadedData={handleVideoLoadedData}
            />
            <div
              style={{ top: "51%", left: "18%", width: "30%", height: "6%" }}
              className="absolute"
              onClick={handleClickPregunta}
            ></div>
            <div
              style={{ top: "51%", left: "52%", width: "30%", height: "6%" }}
              className="absolute"
              onClick={handleClickPregunta}
            ></div>
          </>
        )}
        {currentQuestion === "respuesta2" && mostrarRespuesta && (
          <video
            src={respuesta2}
            className="w-full h-full object-cover noZoom"
            autoPlay
            loop
            muted
            onLoadedData={handleVideoLoadedData}
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
              onLoadedData={handleVideoLoadedData}
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
            onLoadedData={handleVideoLoadedData}
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
              onLoadedData={handleVideoLoadedData}
            />
            <div
              style={{ top: "27%", left: "20%", width: "60%", height: "25%" }}
              className="absolute "
              onClick={() => handleClickRespuesta(respuestaNo4)}
            ></div>
            <div
              style={{ top: "53%", left: "20%", width: "60%", height: "25%" }}
              className="absolute"
              onClick={() => handleClickRespuesta(respuestaSi4)}
            ></div>
          </>
        )}
        {currentQuestion === "respuesta4" && mostrarRespuesta && (
          <video
            src={respuestaFinal}
            className="w-full h-full object-cover noZoom"
            autoPlay
            loop
            muted
            onLoadedData={handleVideoLoadedData}
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
              onLoadedData={handleVideoLoadedData}
            />
            <div
              style={{ top: "58%", left: "10%", width: "80%", height: "24%" }}
              className="absolute"
              onClick={handleClickPregunta}
            ></div>
          </>
        )}
        {currentQuestion === "respuesta5" && mostrarRespuesta && (
          <video
            src={respuesta5}
            className="w-full h-full object-cover noZoom"
            autoPlay
            loop
            muted
            onLoadedData={handleVideoLoadedData}
          />
        )}
        {showCierre && (
          <video
            src={cierre}
            className="w-full h-full object-cover noZoom"
            autoPlay
            loop
            muted
            onLoadedData={handleVideoLoadedData}
          />
        )}
      </div>
    </div>
  );
};

export default Preguntas;
