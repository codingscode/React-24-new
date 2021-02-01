import React from 'react'

import './Pedido.css'

const pedido = (props) => {
    const ingredientes = []

    for (let nomeIngrediente in props.ingredientes) {
        ingredientes.push({nome: nomeIngrediente, quantidade: props.ingredientes[nomeIngrediente]})
    }

    const resultadoIngrediente = ingredientes.map(ig => {
        return <span key={ig.nome} style={{
            textTransform: 'capitalize',
            display: 'inline-block',
            margin: '0 8px',
            border: '1px solid #ccc',
            padding: '5px'
              }}>{ig.nome} ({ig.quantidade})</span>
    })

    return (
      <div className={'Pedido'}>
         <p>Ingredientes: {resultadoIngrediente}</p>
         <p>Preco: <strong>USD {Number.parseFloat(props.preco).toFixed(2)}</strong></p>
      </div>
    )
    
}

export default pedido