import { useState } from "react";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";
import SearchBar from "./components/SearchBar";
import "./global.css";

function App() {
  const [usuarioPesquisado, setUsuarioPesquisado] = useState("");

  return (
    <div className="container">
      <SearchBar onSearch={setUsuarioPesquisado} />

      {usuarioPesquisado.length > 4 && (
        <>
          <Perfil nomeUsuario={usuarioPesquisado} />
          <ReposList nomeUsuario={usuarioPesquisado} />
        </>
      )}
    </div>
  );
}

export default App;
