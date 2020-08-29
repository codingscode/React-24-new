import React, {Component} from 'react'

import './Modal.css'
import Auxiliar from '../../../hoc/Auxiliar'
import Backdrop from '../Backdrop/Backdrop'


class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children  
    }
     
    componentWillUpdate() {
        console.log('[Modal] WillUpdate')
    }

    render() {
        return (
            <Auxiliar>
                <Backdrop show={this.props.show} clicado={this.props.modalFechado}/>
                <div className={'Modal'} style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                    }}>
                       {this.props.children}
                </div>
            </Auxiliar>
        )
    }
    
}

export default Modal;