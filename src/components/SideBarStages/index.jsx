import React from 'react';

import './styles.scss';

export function SideBarStages() {
  return (
    <div className="side-bar">
      <h2 className="title">Estagio da questão</h2>
      <div className="categories">
        <div className="category">
          <p className="name">Não submetidas</p>
          <p className="value" style={{ color: '#007D99' }}>10</p>
        </div>
        <div className="category">
          <p className="name" >Aguardando análise</p>
          <p className="value" style={{ color: '#E1BD00' }}>7</p>
        </div>
        <div
          className="category active"
          style={{ backgroundColor: '#009E2C' }}
        >
          <p className="name">Aprovados</p>
          <p className="value">18</p>
        </div>
        <div className="category">
          <p className="name">Com parecer</p>
          <p className="value" style={{ color: '#B00' }}>15</p>
        </div>
        <div className="category">
          <p className="name">Bloqueadas</p>
          <p className="value" style={{ color: '#000' }}>4</p>
        </div>
      </div>
    </div>
  );
}

