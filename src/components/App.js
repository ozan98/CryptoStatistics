

import axios from 'axios'

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
  
  return (
    <div className="App">
      hello world
    </div>
  );
}

export default App;
