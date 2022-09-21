import React from 'react'

import './styles.scss';

import { Circle } from 'phosphor-react';
import { ReactComponent as Down } from '../../assets/icons/down.svg';

export function ResultsBox() {
  return (
    <table className="main-table">
      <tr className="header">
        <th><Circle size={20} color="#494949" weight="bold" className="mark-circle" /></th>
        <th>Cód.</th>
        <th>Tipo/Enunciado<Down /></th>
        <th>Curso/Disciplina<Down /></th>
        <th>Opções</th>
      </tr>
      <tr className="data">
        <td><Circle size={20} color="#494949" weight="bold" className="mark-circle" /></td>
        <td className="cod">00371</td>
        <td>
          <div className="enunciado">
            <p>Múltipla escolha • Cadastrada há 5 meses por
              <span className="blue-color"> Qstione</span>
            </p>
            <h3>Qual o nome da fruta mais bonita?</h3>
            <div className="tags">
              <span className="tag blue-color">Ainda não foi utilizada</span>
              <span className="tag green-aprovado">Aprovado</span>
            </div>
          </div>
        </td>
        <td>
          <div className="disciplina">
            <p>CURSO (Cód QST001)</p>
            <h3>Direito</h3>
            <p className="margin">Não vinculado a uma unidade</p>
            <p>Disciplina (Cód QST0003)</p>
            <h3>Direito Administrativo</h3>
          </div>
        </td>
        <td>
          <div className="opcoes">
            <span className="open-button">Abrir</span>
            <span className="options-button">Opções<Down /></span>
          </div>
        </td>
      </tr>
      <tr className="data">
        <td><Circle size={20} color="#494949" weight="bold" className="mark-circle" /></td>
        <td className="cod">00371</td>
        <td>
          <div className="enunciado">
            <p>Múltipla escolha • Cadastrada há 5 meses por
              <span className="blue-color"> Qstione</span>
            </p>
            <h3>Qual o nome da fruta mais bonita?</h3>
            <div className="tags">
              <span className="tag blue-color">Ainda não foi utilizada</span>
              <span className="tag green-aprovado">Aprovado</span>
            </div>
          </div>
        </td>
        <td>
          <div className="disciplina">
            <p>CURSO (Cód QST001)</p>
            <h3>Direito</h3>
            <p className="margin">Não vinculado a uma unidade</p>
            <p>Disciplina (Cód QST0003)</p>
            <h3>Direito Administrativo</h3>
          </div>
        </td>
        <td>
          <div className="opcoes">
            <span className="open-button">Abrir</span>
            <span className="options-button">Opções<Down /></span>
          </div>
        </td>
      </tr>
      <div />
    </table>
  )
}
