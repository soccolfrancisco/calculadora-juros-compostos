import React from 'react';

export default function Header({ capital, taxa, periodo, onForm }) {
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === 'capital') {
      onForm(value, taxa, periodo);
    }

    if (name === 'taxa') {
      onForm(capital, value, periodo);
    }

    if (name === 'periodo') {
      onForm(capital, taxa, value);
    }
  };

  return (
      <div>
        <div className="container">
          <div className="row">
            <div className="input-field col s4">
              <span><i className="tiny material-icons">monetization_on</i>&nbsp;Capital Inicial:</span>
              <input
                  type="number"
                  name="capital"
                  min="0"
                  value={capital}
                  onChange={handleInputChange}
              />
            </div>

            <div className="input-field col s4">
              <span><i className="tiny material-icons">iso</i>&nbsp;Taxa de Juros Mensal:</span>
              <input
                  type="number"
                  name="taxa"
                  min="-12"
                  max="12"
                  value={taxa}
                  onChange={handleInputChange}
                  step="0.1"
              />
            </div>

            <div className="input-field col s4">
              <span><i className="tiny material-icons">date_range</i>&nbsp;Período (Mensal):</span>
              <input
                  type="number"
                  name="periodo"
                  min="1"
                  max="36"
                  value={periodo}
                  onChange={handleInputChange}
                  step="1"
              />
            </div>
          </div>
        </div>
      </div>
  );
}
