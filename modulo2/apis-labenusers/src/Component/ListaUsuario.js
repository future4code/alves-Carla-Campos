import React, { Component } from 'react'
import CadastroUsuario from './Components/CadastroUsuario'

export default class ListaUsuario extends Component {
 
    render() {
     return (
        <div>
          <input 
          value={this.props.nomeDoUsuario}
          onChange={this.props.onChangeNomeUsuario}
          placeholder="Usuario"/>
          <input 
          value={this.props.emailDoUsuario}
          onChange={this.props.onChangeEmailUsuario}
          placeholder="Email"/>
          <button onClick={this.props.onClickCriarUsuario}>Enviar</button>
          <button onClick={() => this.props.mudarTela()}>Trocar de Tela</button>
          </div>
    
        )
      }                      
    }

