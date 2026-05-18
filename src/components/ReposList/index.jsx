import { useEffect, useState } from "react";
import styles from "./ReposList.module.css";

const ReposList = ({ nomeUsuario }) => {
  const [repos, setRepos] = useState([]);
  const [estaCarregando, setEstaCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    if (!nomeUsuario) return;

    setEstaCarregando(true);
    setErro(null);

    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Usuário não encontrado");
        }
        return res.json();
      })
      .then((resJson) => {
        // simula carregamento com delay de 2 segundos
        setTimeout(() => {
          if (Array.isArray(resJson)) {
            setRepos(resJson);
          } else {
            setRepos([]);
            setErro("Nenhum repositório encontrado.");
          }
          setEstaCarregando(false);
        }, 2000);
      })
      .catch((err) => {
        setTimeout(() => {
          if (err.message.includes("rate limit")) {
            setErro(
              "Limite de requisições da API atingido. Tente novamente mais tarde.",
            );
          } else {
            setErro(err.message);
          }
          setRepos([]);
          setEstaCarregando(false);
        }, 2000);
      });
  }, [nomeUsuario]);

  return (
    <>
      {estaCarregando ? (
        <h1>Carregando...</h1>
      ) : erro ? (
        <p style={{ color: "red" }}>{erro}</p>
      ) : repos.length > 0 ? (
        <ul className={styles.repos_list}>
          {repos.map(({ id, name, language, html_url }) => (
            <li key={id} className={styles.repos_item}>
              <b>Nome:</b> {name}
              <br />
              <b>Linguagem:</b> {language || "Não especificada"}
              <br />
              <a
                className={styles.repos_button}
                target="_blank"
                rel="noreferrer"
                href={html_url}
              >
                🔗 Visitar no GitHub
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum repositório encontrado.</p>
      )}
    </>
  );
};

export default ReposList;
