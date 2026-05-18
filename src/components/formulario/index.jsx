import { useState, useEffect } from "react";
// Importa o hook useState do React, usado para criar estados dentro do componente.

const Formulario = () => {
  // Declaração dos estados para armazenar as notas e o nome do aluno.
  let [materiaA, setMateriaA] = useState();
  let [materiaB, setMateriaB] = useState();
  let [materiaC, setMateriaC] = useState();
  let [nome, setNome] = useState("");

  useEffect(() => {
    return () => {};
  });

  // Função que atualiza o estado 'nome' sempre que o usuário digita no input de texto.
  const alteraNome = (evento) => {
    setNome(evento.target.value);
  };

  // Função que valida a nota digitada, garantindo que fique entre 0 e 10.
  const validarNota = (valor) => {
    const numero = Number(valor); // Converte para número
    if (numero < 0) return 0; // Se menor que 0, retorna 0
    if (numero > 10) return 10; // Se maior que 10, retorna 10
    return numero; // Caso contrário, retorna o valor digitado
  };

  // Função que calcula a média e retorna o resultado (aprovado ou reprovado).
  const renderizaResultado = () => {
    // Se alguma nota ainda não foi digitada (continua 0), pede para preencher todas.
    if (materiaA === 0 || materiaB === 0 || materiaC === 0) {
      return <p>Digite todas as notas para ver o resultado</p>;
    }

    // Calcula a soma e a média das três matérias.
    const soma = materiaA + materiaB + materiaC;
    const media = soma / 3;

    // Retorna mensagem personalizada com nome, média e resultado.
    if (media >= 7) {
      return (
        <p>
          Olá {nome}, sua média foi {media.toFixed(2)}. Você foi aprovado ✅
        </p>
      );
    } else {
      return (
        <p>
          Olá {nome}, sua média foi {media.toFixed(2)}. Você foi reprovado ❌
        </p>
      );
    }
  };

  // JSX que renderiza o formulário na tela.
  return (
    <form>
      <ul>
        {[1, 2, 3, 4, 5].map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      {/* Campo para digitar o nome */}
      <input type="text" placeholder="Digite seu nome" onChange={alteraNome} />

      {/* Campo para nota da matéria A */}
      <input
        type="number"
        placeholder="Nota matéria A"
        min="0"
        max="10"
        value={materiaA}
        onChange={(evento) => setMateriaA(validarNota(evento.target.value))}
      />

      {/* Campo para nota da matéria B */}
      <input
        type="number"
        placeholder="Nota matéria B"
        min="0"
        max="10"
        value={materiaB}
        onChange={(evento) => setMateriaB(validarNota(evento.target.value))}
      />

      {/* Campo para nota da matéria C */}
      <input
        type="number"
        placeholder="Nota matéria C"
        min="0"
        max="10"
        value={materiaC}
        onChange={(evento) => setMateriaC(validarNota(evento.target.value))}
      />

      {/* Exibe o resultado da função renderizaResultado */}
      {renderizaResultado()}
    </form>
  );
};

export default Formulario;
// Exporta o componente para ser usado em outros arquivos.
