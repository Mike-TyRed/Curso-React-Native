/* //Función tradicional
export default function app{
  return(
    
  );
} */

import { Route, BrowserRouter, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Header from "./components/Header";

//Función flecha
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<DashBoard />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
