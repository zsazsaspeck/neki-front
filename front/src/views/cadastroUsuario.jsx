import React from 'react'

import { withRouter } from 'react-dom'
import Card from '../components/card'
import FormGroup from '../components/formgroup'

class CadastroUsuario extends React.Component{

    state = {
        nome : '',
        login: '',
        senha: '',
        senhaRepeticao: ''
    }
        cadastrar = () => {
            console.log(this.state)
        }
    
        cancelar = () => {
            this.props.history.push('/login')
        }
            
    render(){
        return (
                <Card title="Cadastro de Usuário">
                <div class="row">
                     <div className="col-lg-12">
                       <div className="bs-component">
                           <FormGroup label="nome: *" htmlFor="inputNome">
                               <input type="text"
                               id="inputNome"
                               className="form-control"
                               nome="nome"
                               onChange={e => this.setState({nome: e.target.value})} />

                           </FormGroup>
                           <FormGroup label="login: *" htmlFor="inputLogin">
                               <input type="login"
                               id="inputLogin"
                               className="form-control"
                               name="login"
                               onChange={e => this.setState({login: e.target.value})} />
                        </FormGroup>
                        <FormGroup label="Senha: *" htmlFor="inputSenha">
                               <input type="passowrd"
                               id="inputSenha"
                               className="form-control"
                               name="senha"
                               onChange={e => this.setState({senha: e.target.value})} />
                        </FormGroup>
                        <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                               <input type="passowrd"
                               id="inputRepitaSenha"
                               className="form-control"
                               name="senha"
                               onChange={e => this.setState({senhaRepeticao: e.target.value})} />
                        </FormGroup>
                        <button onClick={this.cadastrar}type="button" className="btn btn-success">Salvar</button>
                        <button onClick={this.cancelar}type="button" className="btn btn-danger">Cancelar</button>
                    </div>
                </div>
            </div>
            </Card>
        )
    }
}

export default CadastroUsuario;