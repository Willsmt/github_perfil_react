import { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [valor, setValor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valor.trim().length > 0) {
      onSearch(valor.trim());
    }
  };

  return (
    <div className={styles.search_container}>
      <h2 className={styles.search_title}>GitHub Perfil</h2>
      <form className={styles.search_bar} onSubmit={handleSubmit}>
        <input
          type="text"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="Digite o usuário do GitHub"
          className={styles.search_input}
        />
        <button type="submit" className={styles.search_button}>
          🔍 Pesquisar
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
