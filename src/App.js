import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "./routes/Login";
import SignUpComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";

function App() {
  return (
    <div className="w-full h-full font-poppins">
   <BrowserRouter>
      <Routes>
           <Route
          path="/login"
          element={<LoginComponent />}
        />
        <Route
          path="/signup"
          element={<SignUpComponent />}
        />
         <Route
          path="/"
          element={<HomeComponent />}
        />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
