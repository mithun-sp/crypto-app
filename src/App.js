import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Coin from './components/Coin';

function App() {

  const [listOfCoins, setListOfCoins] = useState([])
  const [searchWord, setSearchWord] = useState("")

  useEffect(() => {
    axios.get("https://api.coinstats.app/public/v1/coins?skip=0")
    .then((res) => {
      setListOfCoins(res.data.coins)
    })
  }, [])

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase())
  })

  return (
    <div className="App">
      <div className='cryptoHeader'>
        <input type="text" onChange={(event) => setSearchWord(event.target.value)}  />
      </div>
      <div className='cryptoDisplay'>{filteredCoins.map((coin) => {
        return <Coin name={coin.name} icon ={coin.icon} symbol={coin.symbol} price = {coin.price} /> }
      )}</div>
    </div>
  );
}

export default App;
