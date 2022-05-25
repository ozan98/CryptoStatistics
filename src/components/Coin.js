import React from 'react'

import '../styleSheet/Coin.css'

import {Line} from 'react-chartjs-2'
import Chart from 'chart.js/auto';


const formatter = new Intl.NumberFormat('en-US', {
  styel: 'curreny',
  currency: 'CAD',
});

const toMoneyFormat = (price) => {
  return formatter.format(price)
}


const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      }
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      }
    }
  }
}


const renderChart = (chartData, coinName) => {
  return {
    labels: Array(chartData.price.length).fill(0),
    datasets: [
      {
        data: chartData.price,
        label: coinName,
        borderColor: 'hsl(171, 100%, 41%)',
        pointRadius: 0,
        pointHoverRadius: 0,
        tension: 0.4,
      },
    ],
  }
  }

const renderPriceChange = (price24, percent24) => {
  if (percent24 > 0){
    return(
      <p className="green-price">
        ({percent24.toFixed(2)}%) ${price24.toFixed(2)} 
        <i className="fa fa-sort-up green-price"/>
      </p>
    )
  } else {
    return(
      <p className="red-price">
        ({percent24.toFixed(2)}%) ${price24.toFixed(2)}
        <i className="fa fa-sort-down red-price"/>
      </p>
    )
  }
}



const Coin = ({
  coinName, 
  coinPrice, 
  coinImage, 
  coinSymbol, 
  coinPriceChange24, 
  coinPriceChangePercentage24, 
  coinChart}) => {

    return (
          <div className="card"> 
              <div className="card-name-price">
                  <p>{coinName}</p>
                  <p>${toMoneyFormat(coinPrice)}</p>
              </div>
              <div className="card-image-priceChange">
                    <div className="image-symbol-container">
                        <img src={coinImage}></img>
                        <span className="symbol"><p>{coinSymbol.toUpperCase()}</p></span>
                    </div>
                  {renderPriceChange(coinPriceChange24, coinPriceChangePercentage24)}
              </div>
              <div className="chart-container">
                  <Line
                    data={renderChart(coinChart, coinName)}
                    options={options}
                  />
              </div>
          </div>
    )
}

export default Coin;