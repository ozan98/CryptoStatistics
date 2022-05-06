import React from 'react'

import axios from 'axios'

// import '../styleSheet/App.css'

import Coin from './Coin'
import {useEffect, useState} from 'react'


const apiURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true'
function App() {

  const [coins, setCoins] = useState([])

  useEffect(() =>{
    axios.get(apiURL).then(response =>{
      setCoins(response.data)
      
    })
    .catch(error => {
      console.log(error.message)
    })
  }, [])

  const getCoins = () => {
    return coins.map((coin) => {
      return <Coin 
              key={coin.id}
              coinName={coin.id}
              coinPrice={coin.current_price}
              coinImage={coin.image}
              coinSymbol={coin.symbol}
              coinPriceChange24={coin.price_change_percentage_24h}
              coinChart={coin.sparkline_in_7d}
              />
    })
  }

  
  return (
    <div>
      <div>
          <div>
            {getCoins().slice(0, 11)}
          </div>
      </div>
    </div>
  );
}

export default App;
