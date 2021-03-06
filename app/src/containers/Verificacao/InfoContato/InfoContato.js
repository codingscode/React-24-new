import React, {Component} from 'react'
import { connect } from 'react-redux'

import Botao from '../../../componentes/UI/Botao/Botao'
import Rodador from '../../../componentes/UI/Rodador/Rodador'
import './InfoContato.css'
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
                valido: false,
                tocado: false
            },
            rua: {
                tipoElemento: 'input',
                configElemento: {
                    type: 'text',
                    placeholder: 'Rua'
                },
                valor: '',
                validacao: {requerido: true},
                valido: false,
                tocado: false
            },
            zipCode: {
                tipoElemento: 'input',
                configElemento: {
                    type: 'text',
                    placeholder: 'Código Postal'
                },
                valor: '',
                validacao: {requerido: true, minComprimento: 5, maxComprimento: 5},
                valido: false,
                tocado: false
            },
            pais: {
                tipoElemento: 'input',
                configElemento: {
                    type: 'text',
                    placeholder: 'País'
                },
                valor: '',
                validacao: {requerido: true},
                valido: false,
                tocado: false
            },
            email: {
                tipoElemento: 'input',
                configElemento: {
                    type: 'email',
                    placeholder: 'Seu E-mail'
                },
                valor: '',
                validacao: {requerido: true},
                valido: false,
                tocado: false
            },
            metodoEntrega: {
                tipoElemento: 'select',
                configElemento: {
                    options: [
                        {valor: 'o mais rápido', valorMostrado: 'O mais rápido'},
                        {valor: 'o mais barato', valorMostrado: 'O mais barato'},
                    ]
                },
                valor: '',
                validacao: {},
                valido: true
            }
        },
        formEValido: false,
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
            ingredientes: this.props.meus_ings,
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

        if (!regras) {
            return true
        }
    
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
         
         elementoFormAtualizado.tocado = true

         pedidoFormAtualizado[identificadorEntrada] = elementoFormAtualizado
         console.log(elementoFormAtualizado)

         let formEValido = true
         for (let entrId in pedidoFormAtualizado) {
            formEValido = pedidoFormAtualizado[entrId].valido && formEValido
         }

         console.log('formEValido ?', formEValido)
         this.setState({pedidoForm: pedidoFormAtualizado, formEValido: formEValido})
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
                            invalido={!cada.config.valido} deveValidar={cada.config.validacao} tocado={cada.config.tocado}/>
                ))}
                
                <Botao btnType="Sucedido" clicado={this.gerenPedido} desabilitado={!this.state.formEValido}>Ordene</Botao>
            </form>
        )
        if (this.state.carregando) {
            form = <Rodador />
        }
        return (
           <div className={'InfoContato'}>
              <h4>Digite sua informação de Contato</h4>
              {form}
           </div>
        )
    }
}

const mapStateParaProps = state => {
    return {
        meus_ings: state.ingredientes,
        preco: state.precoTotal
    }
}

export default connect(mapStateParaProps)(InfoContato)
