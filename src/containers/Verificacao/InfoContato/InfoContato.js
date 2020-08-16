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
                valor: '',
                validacao: {requerido: true},
                valido: false
            },
            rua: {
                tipoElemento: 'input',
                configElemento: {
                    type: 'text',
                    placeholder: 'Rua'
                },
                valor: '',
                validacao: {requerido: true},
                valido: false
            },
            zipCode: {
                tipoElemento: 'input',
                configElemento: {
                    type: 'text',
                    placeholder: 'Código Postal'
                },
                valor: '',
                validacao: {requerido: true, minComprimento: 5, maxComprimento: 5},
                valido: false
            },
            pais: {
                tipoElemento: 'input',
                configElemento: {
                    type: 'text',
                    placeholder: 'País'
                },
                valor: '',
                validacao: {requerido: true},
                valido: false
            },
            email: {
                tipoElemento: 'input',
                configElemento: {
                    type: 'email',
                    placeholder: 'Seu E-mail'
                },
                valor: '',
                validacao: {requerido: true},
                valido: false
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
        const dadosForm = {}

        for (let identifElementoForm in this.state.pedidoForm) {
            dadosForm[identifElementoForm] = this.state.pedidoForm[identifElementoForm].valor
        }

        const pedido = {
            ingredientes: this.props.ingredientes,
            preco: this.props.preco,
            dadosPedido: dadosForm
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

    checarValidade(valor, regras) {
        let eValido = true
    
        if (regras.requerido) {
           eValido = valor.trim() !== '' && eValido
        }

        if (regras.minComprimento) {
            eValido = valor.length >= regras.minComprimento && eValido
        }

        if (regras.maxComprimento) {
            eValido = valor.length <= regras.maxComprimento && eValido
        }
    
        return eValido
    }

    tratadorMudancaEntrada = (evento, identificadorEntrada) => {
         console.log(evento.target.value)
         console.log(identificadorEntrada)
         const pedidoFormAtualizado = {
            ...this.state.pedidoForm
         }
         const elementoFormAtualizado = {...pedidoFormAtualizado[identificadorEntrada]}
         
         elementoFormAtualizado.valor = evento.target.value

         elementoFormAtualizado.valido = this.checarValidade(elementoFormAtualizado.valor, elementoFormAtualizado.validacao)
         
         pedidoFormAtualizado[identificadorEntrada] = elementoFormAtualizado
         console.log(elementoFormAtualizado)
         this.setState({pedidoForm: pedidoFormAtualizado})
    }

    render() {
        const matrizElementosForm = []

        for (let chave in this.state.pedidoForm) {
            matrizElementosForm.push({
                id: chave,
                config: this.state.pedidoForm[chave]
            })    
        }

        let form = (
            <form onSubmit={this.gerenPedido}>
                {matrizElementosForm.map(cada => (
                    <Entrada key={cada.id} tipoElemento={cada.config.tipoElemento} configElemento={cada.config.configElemento}
                            valor={cada.config.valor} mudanca={(evento) => this.tratadorMudancaEntrada(evento, cada.id)}
                            invalido={!cada.config.valido}   />
                ))}
                
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



