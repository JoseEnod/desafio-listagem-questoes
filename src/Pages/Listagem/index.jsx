import React from 'react';

import './styles.scss';
import {MagnifyingGlass} from 'phosphor-react';

import {Header} from '../../components/Header';
import {Button} from '../../components/Button';
import {SideBarStages} from '../../components/SideBarStages';


export function Listagem() {
  return (
    <div>
    <Header /> 
    <div className="section-title">
      <div className="page-title">
        <h1>Listagem de questões</h1>
        <p>Gerencie e crie novas questões no sistema</p>
      </div>
      <div className="add-buttons">
      <Button
      title="Criar questão"
      buttonColor='#0095DA'
      textColor='#FFF'
      />
      <Button 
      title="Importar"
      transparent
      />
      </div>
    </div>
    <div className="section-search-input">
      <div className="input">
      <input type="text" placeholder="Buscar questão..." />
      <MagnifyingGlass size={25} color="#BEBEBE" weight="bold" />
      </div>
      <Button 
      className="btn-search"
      title="Criar questão"
      buttonColor='#00C82C'
      textColor='#FFF'
      height={46}
      />
      <Button 
      title="Importar"
      transparent
      height={46}
      />
    </div>
    <div className="section-results-area">
      <SideBarStages />
    </div>
    </div>
  );
}