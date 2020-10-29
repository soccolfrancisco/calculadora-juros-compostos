import React from 'react';
import { formatarMoeda, formatarPorcentagem } from './FormatNumber';
import css from './global.module.css';

export default function Installments({ periodo, total, valorMensal, porcentagem}) {
  const totalFormatado = formatarMoeda(total);
  const valorMensalFormatado = formatarMoeda(valorMensal);
  const porcentagemFormatado = formatarPorcentagem(porcentagem);

  const styleColorValor = valorMensal < 0 ? '#cc0000' : '#009933';
  const styleColorPorcentagem = valorMensal < 0 ? '#ff9933' : '#0066cc';

  const styleGrade = {
    colorValor: {
      color: `${styleColorValor}`,
    },
    colorPorcentagem: {
      color: `${styleColorPorcentagem}`,
    },
  };

  return (
      <div>
        <div className="col s2">
          <div className="row center">
            <div className={`${css.grade}`}>
              <h5>{periodo}º</h5>
              <span style={styleGrade.colorValor}>{totalFormatado}</span>
              <br />
              <span style={styleGrade.colorValor}>{valorMensalFormatado}</span>
              <br />
              <span style={styleGrade.colorPorcentagem}>{porcentagemFormatado}</span>
            </div>
          </div>
        </div>
      </div>
  );
}
