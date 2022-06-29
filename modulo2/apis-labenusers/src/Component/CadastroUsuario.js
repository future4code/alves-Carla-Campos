import React, { Component } from 'react'

export default class CadastroUsuario extends Component {
  
    render() {
    const listaAtualizada = this.props.listaDeNomes.map((nomes) => {
        return <div key={nomes.id}>
          <li>{nomes.name}</li>
        </div>
       })

    return (
      <div>
        <button onClick={()=>this.props.mudarTela("cadastro")}>Trocar de Tela</button>
        {listaAtualizada}
      </div>
    )
  }
}