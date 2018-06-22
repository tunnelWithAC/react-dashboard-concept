import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';


const colors = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.3)',
  'rgba(255, 206, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(255, 159, 64, 0.2)',
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 206, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(255, 159, 64, 0.2)'
  ]

class BarChart extends Component {

  mapColors = (chartParams, colors) => {
    if(chartParams !== undefined) {
      let index = 0
      let data = chartParams.datasets[0].data
      let backgroundColor = []

      data.forEach(function () {
        index += 1
        if(index > data.length) index = 0
        backgroundColor.push(colors[index])
      })

      chartParams.datasets[0].backgroundColor = backgroundColor
      return chartParams
    }
    return {}
  }

  render() {
    let { label, data, options } = this.props
    console.log(options)
    const chartData = this.mapColors(data, colors)
    return (
      <div className="chart">
        <Bar
        data={chartData}
        label={label}
        options={options}
        />
      </div>
    )
  }
}

export default BarChart;
