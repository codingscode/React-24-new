import React, {Component} from 'react'

import Botao from '../../../componentes/UI/Botao/Botao'
import Rodador from '../../../componentes/UI/Rodador/Rodador'
import classes from './InfoContato.css'
import axios from '../../../axios-pedidos'
import Entrada from '../../../componentes/UI/Entrada/Entrada'


class InfoContato extends Component {
    state = {
        pedidoForm: {
            nome: {
                tipoElemento: 'input',
                configElemento: {
                    type: 'text',
                    placeholder: 'Seu nome'
                },
                valor: ''
            },
            rua: {
                tipoElemento: 'input',
                configElemento: {
                    type: 'text',
                    placeholder: 'Rua'
                },
                valor: ''
            },
            zipCode: {
                tipoElemento: 'input',
                configElemento: {
                    type: 'text',
                    placeholder: 'Código Postal'
                },
                valor: ''
            },
            pais: {
                tipoElemento: 'input',
                configElemento: {
                    type: 'text',
                    placeholder: 'País'
                },
                valor: ''
            },
            email: {
                tipoElemento: 'input',
                configElemento: {
                    type: 'email',
                    placeholder: 'Seu E-mail'
                },
                valor: ''
            },
            metodoEntrega: {
                tipoElemento: 'select',
                configElemento: {
                    options: [
                        {valor: 'o mais rápido', valorMostrado: 'O mais rápido'},
                        {valor: 'o mais barato', valorMostrado: 'O mais barato'},
                    ]
                },
                valor: ''
            }
        },
        carregando: false
    }

    gerenPedido = (evento) => {
        evento.preventDefault()
        //console.log(this.props.ingredientes)
        
        this.setState({carregando: true})
        const pedido = {
            ingredientes: this.props.ingredientes,
            preco: this.props.preco
            
        }
        axios.post('/pedidos.json', pedido)
            .then(resposta => {
                this.setState({carregando: false})
                this.props.history.push('/')
            })
            .catch(erro => {
                this.setState({carregando: false})
            })
    }

    render() {
        let form = (
            <form>
                <Entrada tipoElemento="..." configElemento="..." valor="..." />
                <Entrada inputtype="input" type="email" name="email" placeholder="Seu Email" />
                <Entrada inputtype="input" type="text" name="rua" placeholder="Rua" />
                <Entrada inputtype="input" type="text" name="codigoPostal" placeholder="Código Postal" />
                <Botao btnType="Sucedido" clicado={this.gerenPedido} >Ordene</Botao>
            </form>
        )
        if (this.state.carregando) {
            form = <Rodador />
        }
        return (
           <div className={classes.InfoContato}>
              <h4>Digite sua informação de Contato</h4>
              {form}
           </div>
        )
    }
}

export default InfoContato


