import axios from "axios";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import "./index.css";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
