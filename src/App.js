import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Installments from './components/Installments';
import css from './components/global.module.css';

export default function App() {
  const [capital, setCapital] = useState(100);
  const [taxa, setTaxa] = useState(0);
  const [periodo, setPeriodo] = useState(1);
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    let capitalTotal = 0;
    let valorMensal = 0;
    let porcentagem = 0;

    for (let i = 1; i <= periodo; i++) {
      capitalTotal = capital * (1 + taxa / 100) ** i;

      valorMensal = capitalTotal - capital;

      porcentagem = valorMensal / capital;

      const resultadoExistente = resultados.find((resultado) => {
        return resultado.periodo === i;
      });

      if (resultadoExistente) {
        resultadoExistente.total = capitalTotal;
        resultadoExistente.valorMensal = valorMensal;
        resultadoExistente.porcentagem = porcentagem;

        setResultados([...resultados]);
      } else {
        setResultados([
          ...resultados,
          {
            periodo: i,
            total: capitalTotal,
            valorMensal: valorMensal,
            porcentagem: porcentagem,
          },
        ]);
      }
    }
  }, [capital, taxa, periodo]);

  const handleForm = (capital, juros, periodo) => {
    setCapital(capital);
    setTaxa(juros);
    setPeriodo(periodo);
  };

  return (
      <div className="container">
        <div className="row">
          <h3 className={`${css.title} center`}>
            <i className="small material-icons">polymer</i>
            &nbsp;Calculadora de Juros Compostos
          </h3>
        </div>

        <Header
            capital={capital}
            taxa={taxa}
            periodo={periodo}
            onForm={handleForm}
        />

        {resultados && <Installments resultados={resultados} />}
      </div>
  );
}
