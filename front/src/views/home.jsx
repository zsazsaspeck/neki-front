import React from 'react'
import nekilogo from '../assets/nekilogo.jpg'
import LocalStorageService from '../app/service/LocalStorageService'

class Home extends React.Component{

   /*componentDidMount(){
       const usuarioLogado = LocalStorageService.obterItem('_usuario_logado')
    }*/

    render(){
        return(
            <div className="jumbotron">
                <img src={nekilogo} style={{width:200}}/>
            <h1 className="display-3">Bem vindo!</h1>
            <p className="lead">
                Esse aqui é o controle de usuários da Neki com seus usuários e habilidades.</p>            
            <hr className="my-4"></hr>
            <p>Cadastre um novo usuário, ou uma habilidade.</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" 
              href="" 
              role="button"><i className="fa fa-users"></i>  
              Cadastrar Usuário</a>
              <a className="btn btn-danger btn-lg" 
              href="" 
              role="button"><i className="fa fa-users"></i>  
              Cadastrar Habilidade</a>
            </p>
          </div>
        )
    }

}

export default Home;