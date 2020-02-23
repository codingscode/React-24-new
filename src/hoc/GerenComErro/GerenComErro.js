import React, {Component} from 'react'

import Modal from '../../componentes/UI/Modal/Modal'
import Auxiliar from '../Auxiliar'

const gerenComErro = (ComponenteEnvolvido, axios) => {
    return class extends Component {
        state = {
            erro: null
        }
         
        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
               this.setState({erro: null})
               return req
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, erro => {
               this.setState({erro: erro})
            })
        }

        componentWillUnmount() {
            console.log('Will Unmount', this.reqInterceptor, this.resInterceptor)
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }
        
        gerenErroConfirmado = () => {
            this.setState({erro: null})
        }

        render () {
           return (
                <Auxiliar>
                    <Modal show={this.state.erro} modalFechado={this.gerenErroConfirmado}>
                         {this.state.erro ? this.state.erro.message : null}
                    </Modal>
                    <ComponenteEnvolvido {...this.props} />
                </Auxiliar>
           )
        }
    }
}

export default gerenComErro
