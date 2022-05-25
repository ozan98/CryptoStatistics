import React from 'react'
import '../styleSheet/App.css'

import Coin from './Coin'
import Header from './Header'
import axios from 'axios'

import {useEffect, useState} from 'react'


const apiURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true'

const apiURL1 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page='
const apiURL2 = '&page=1&sparkline=true'

function App() {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(6)

  useEffect(() =>{
    axios.get(`${apiURL1}${page}${apiURL2}`).then(response =>{
      setCoins(response.data)
      
    })
    .catch(error => {
      alert('Unable to retrive Data')
    })
    setLoading(false)
  }, [page])

  const loadData = () => {
    setLoading(true)
    setPage(page + 6)
  }

  

  const getCoins = () => {
    return coins.map((coin) => {
      return <Coin 
              key={coin.id}
              coinName={coin.name}
              coinPrice={coin.current_price}
              coinImage={coin.image}
              coinSymbol={coin.symbol}
              coinPriceChange24={coin.price_change_24h}
              coinPriceChangePercentage24={coin.price_change_percentage_24h}
              coinChart={coin.sparkline_in_7d}
              />
    })
  }

  
  return (

      <main>
          <div className="header-container">
              <h1>Crypto Statistics</h1>
              <h2>Top crypto assets by market capitalization</h2>
          </div>
          <div className="card-container">
              {getCoins()}
          </div>
          <div className="button-container">
              <button onClick={loadData} 
                      type="button"
                      // className="button button-loading "
                      className={`button ${loading && 'button-loading'}`}
              > 
                      
                  <span className="button-text">Load More </span>
              </button>
          </div>
      </main>
  );
}

export default App;

