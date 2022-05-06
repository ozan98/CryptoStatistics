import React from 'react'

import {Line} from 'react-chartjs-2'
import Chart from 'chart.js/auto';





const renderChart = (chartData, coinName) => {
  return {
    labels: Array(chartData.price.length).fill(0),
    datasets: [
      {
        borderColor: 'hsl(171, 100%, 41%)',
        data: chartData.price,
        label: coinName,
      },
    ],
  }
  
  }


const Coin = ({coinName, coinPrice, coinImage, coinSymbol, coinPiceChange24, coinChart}) => {



    return (
            <Line
              data={renderChart(coinChart, coinName)}
            />
    )
}

export default Coin;