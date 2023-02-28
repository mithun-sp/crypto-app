import React from 'react'

function Coin({name, icon, symbol, price}) {
  return (
    <div className='coin'>
        <h1>Name: {name} </h1>
        <img src={icon} alt = {`${name}-icon`} />
        <h3>symbol: {symbol}</h3>
        <h3>Price: {price}</h3>
    </div>
  )
}

export default Coin