import './App.css';
import React, { Component } from 'react'
import ListaUsuario from './Components/listaUsuario';
import CadastroUsuario from './Components/cadastroUsuario';

export default class App extends Component {
  state = {
    listaDeUsuarios: [],
    nomeDoUsuario: "",
    emailDoUsuario: "",
    erro: "",
    tela: "cadastro"
  }

  onClickCriarUsuario = () => {
    const novoUsuario = {
      name: this.state.nomeDoUsuario,
      email: this.state.emaiDolUsuario
    }
      }
      .then((respostaAoUsuario) => {
        console.log(respostaAoUsuario)
        respostaAoUsuario.status === 201 && alert(`Seu Usuário foi enviado`)
      })
      .catch((erroDoNovoUsuario) => {
        alert(erroDoNovoUsuario.response.data.message)
      })
  }

  onChangeNomeUsuario = (event) => {
    this.setState({ nomeUsuario: event.target.value })
  }

  onChangeUsuarioEmail = (event) => {
    this.setState({ emailUsuario: event.target.value })
  }

  listaDeUsuarios = () => {

   .then((respostaDaLista) => {
    console.log(respostaDaLista)
    this.setState({listaDeNomes: respostaDaLista.data})

   })
   .catch((error) => {
    this.setState({ erro: error.response.data})
   })
  }

 componentDidMount() {
  this.listaDeUsuarios()
 }

 mudandoTela = (mudaTela) => {
  this.setState({tela: mudaTela})
 }
  mudarTela = (telaEscolhida) => {
    this.setState({ tela: telaEscolhida })
  }

  exibeTela = () => {
    if (this.state.tela === "cadastro") {
      return <telaCadastroUsuario mudarTela={this.mudarTela}
        nomeDoUsuario={this.state.nomeDoUsuario}
        emailDoUsuario={this.state.emailDoUsuario}
        onChangeUsuarioEmail={this.onChangeUsuarioEmail}
        onClickCriarUsuario={this.onClickCriarUsuario} />
  } 
  else {
    return <listaUsuario mudarTela={this.mudarTela}
    listaDeUsuarios={this.listaDeUsuarios}
    listaDeNomes={this.state.listaDeNomes} />
  }
}
  render() { 

    
    return (
    <div>
      {this.exibeTela()}
    </div>
    );
  }