import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Doughnut, Bar, Line } from 'react-chartjs-2';

const BarChart = ({ data }) => (
  <div className="chart">
    <Bar data={data} />
  </div>
)


BarChart.propTypes = {
  data: PropTypes.object
};

BarChart.defaultProps = {
  data: {
    labels: [ '1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'Population',
        data: [
          10000,
          10000,
          10000,
          10000,
          10000,
          10000
        ]
      }
    ]
  }
};

export default BarChart;
