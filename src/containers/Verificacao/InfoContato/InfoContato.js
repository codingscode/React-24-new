import React, {Component} from 'react'

import Botao from '../../../componentes/UI/Botao/Botao'
import Rodador from '../../../componentes/UI/Rodador/Rodador'
import classes from './InfoContato.css'
import axios from '../../../axios-pedidos'


class InfoContato extends Component {
    state = {
        nome: '',
        email: '',
        endereco: {
           rua: '',
           codigoPostal: ''
        },
        carregando: false
    }

    gerenPedido = (evento) => {
        evento.preventDefault()
        //console.log(this.props.ingredientes)
        
        this.setState({carregando: true})
        const pedido = {
            ingredientes: this.props.ingredientes,
            preco: this.props.preco,
            cliente: {
                nome: 'Mario Rossi',
                endereco: {
                      rua: 'Testrua 1',
                      zipCode: '41351',
                      pais: 'Itália'
                },
                email: 'test@test.com'
            },
            metodoEntrega: 'o mais rápido'
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
                <input className={classes.Input} type="text" name="nome" placeholder="Seu Nome" />
                <input className={classes.Input} type="email" name="email" placeholder="Seu Email" />
                <input className={classes.Input} type="text" name="rua" placeholder="Rua" />
                <input className={classes.Input} type="text" name="codigoPostal" placeholder="Código Postal" />
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



