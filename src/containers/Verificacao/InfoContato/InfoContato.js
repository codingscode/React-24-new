import React, {Component} from 'react'

import Botao from '../../../componentes/UI/Botao/Botao'
import classes from './InfoContato.css'

class InfoContato extends Component {
    state = {
        nome: '',
        email: '',
        endereco: {
           rua: '',
           codigoPostal: ''
        }
    }

    render() {
        return (
           <div className={classes.InfoContato}>
              <h4>Digite sua informação de Contato</h4>
              <form>
                  <input className={classes.Input} type="text" name="nome" placeholder="Seu Nome" />
                  <input className={classes.Input} type="email" name="email" placeholder="Seu Email" />
                  <input className={classes.Input} type="text" name="rua" placeholder="Rua" />
                  <input className={classes.Input} type="text" name="postal" placeholder="Código Postal" />
                  <Botao btnType="Sucedido" >Ordene</Botao>
              </form>
           </div>
        )
    }
}

export default InfoContato



