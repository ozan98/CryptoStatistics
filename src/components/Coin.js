import React from 'react'

import '../styleSheet/Coin.css'

import {Line} from 'react-chartjs-2'
import Chart from 'chart.js/auto';



const options = {
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
      },
    ],
  }
  }



const Coin = ({coinName, coinPrice, coinImage, coinSymbol, coinPiceChange24, coinChart}) => {



    return (
          <div className="card"> 
            <div className="container">
              <Line
                data={renderChart(coinChart, coinName)}
                options={options}
              />
            </div>
          </div>
    )
}

export default Coin;