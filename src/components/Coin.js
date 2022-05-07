import React from 'react'

import '../styleSheet/Coin.css'

import {Line} from 'react-chartjs-2'
import Chart from 'chart.js/auto';



const options = {
  responsive: true,
  maintainAspectRatio: false,
  tooltips: {
    enabaled: false,
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



const Coin = ({coinName, coinPrice, coinImage, coinSymbol, coinPriceChange24, coinChart}) => {



    return (
          <div className="card"> 
            <div className="card-name-price">
            <p>{coinName}</p>
            <p>{coinPrice}</p>
            </div>
            <div className="card-image-priceChange">
              <div className="image-symbol-container">
                <img src={coinImage}></img>
                <p>{coinSymbol}</p>
              </div>
              <p>{coinPriceChange24}</p>
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