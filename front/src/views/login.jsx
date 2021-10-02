import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/formgroup'
import logoneki from '../assets/neki-logo-oficial-colorido.png'
import { mensagemErro } from '../components/toastr'

import UsuarioService from '../app/service/usuarioService'
import LocalStorageService from '../app/service/LocalStorageService'

class Login extends React.Component{

    state = {
        login: '',
        senha: ''
    }

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    entrar = () => {
        this.service.autenticar({
            login: this.state.login,
            senha: this.state.senha
        }).then( response => {
            LocalStorageService.adicionarItem()
            localStorage.setItem('_usuario_logado', response.data )
            
            this.props.history.push('/home')
        }).catch( erro => {
            mensagemErro(erro.response.data)
        })
    }

    formeCadastrar = () => {
        this.props.history.push('/cadastrousuario')
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-6" style={{position : 'relative', left: '300px', bottom:'80px'}}>
                   <div className="bs-docs-section">
                       <Card title="Login">
                           <div className="row">
                               </div>
                           <img src={logoneki} style={{width:200}}/>
                            <div className="col-lg-12">
                                <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Login: *" htmlFor="exampleInputLogin">
                                            <input type="email"
                                            value={this.state.login}
                                            onChange={e => this.setState({login: e.target.value})}
                                             className="form-control" id="exampleInputLogin"
                                              aria-describedby="loginHelp"
                                               placeholder="Digite o login" />
                                            </FormGroup>
                                            <FormGroup label="Senha: *" htmlFor="">
                                            <input type="password" 
                                            value={this.state.senha}
                                            onChange={e => this.setState({senha: e.target.value})}
                                            className="form-control" id="exampleInputPassword1" 
                                            placeholder="Senha" />
                                            <button style={{marginTop: '20px'}}onClick={this.entrar}className="btn btn-success">Entrar</button>
                                            <button onClick={this.formeCadastrar}style={{marginTop: '20px'}}className="btn btn-danger">Cadastrar</button>
  
                                            </FormGroup>
                                        </fieldset>
                                    </div>
                            </div>
                       </Card>

                   </div>
                </div>
            </div>
        )
    }
}

export default Login