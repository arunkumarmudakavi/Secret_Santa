import axios from "axios";
import { Header } from "./components/Header";
// import { Home } from "./components/Home";
import { Outlet } from "react-router-dom";
import "./index.css";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet/>
      </main>
      
    </>
  );
}

export default App;
