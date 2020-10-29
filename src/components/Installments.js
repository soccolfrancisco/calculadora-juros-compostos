import React from 'react';
import Installment from './Installment';

export default function Installments({ resultados }) {
    return (
        <div>
            <div className="row">
                <div className="col s12">
                    {resultados.map(({ periodo, total, valorMensal, porcentagem }) => {
                        return (
                            <Installment
                                key={periodo}
                                periodo={periodo}
                                total={total}
                                valorMensal={valorMensal}
                                porcentagem={porcentagem}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
