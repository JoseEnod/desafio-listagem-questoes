import React from 'react';

import './styles.scss';
import logo from '../../assets/logo.png';

import { List } from "phosphor-react";
import { ReactComponent as Down } from '../../assets/icons/down.svg';

export function Header() {
  return (
    <div>
      <header>
        <div className="logo">
          <img src={logo} alt="Qstione Logo" />
        </div>
        <div className="mobile-menu">
          <List size={25} color="#000" weight="bold" />
        </div>
        <div className="responsive">
          <div className="nav-options">
            <nav className="nav-bar">
              <ul>
                <li>
                  <a href="#" className="activated">Questões</a>
                </li>
                <li>
                  <a href="#">Provas</a>
                </li>
                <li>
                  <a href="#">Correção de Provas</a>
                </li>
                <li>
                  <a href="#">Turmas</a>
                </li>
                <li>
                  <a href="#">Mais...</a>
                </li>
              </ul>
            </nav>
            <div className="login">
              <div>
                <p>Período ativo</p>
                <p>202020<Down /> </p>

              </div>
              <div>
                <p>Conectado como</p>
                <p>Qstione<Down /></p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}