
import { useRoutes, BrowserRouter } from "react-router-dom";
import Landing from "./components/Landing";
import Preguntas from "./components/Preguntas";



import "./App.css";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Landing /> },
    { path: "/preguntas", element: <Preguntas /> },
   
  
  ]);
  return routes;
};

function App() {
  
  

  return (
    <BrowserRouter>
      <AppRoutes  />
    </BrowserRouter>
  );
}

export default App;
