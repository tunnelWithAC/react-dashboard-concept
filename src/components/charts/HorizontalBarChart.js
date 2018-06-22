import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';


class HorizontalBarChart extends Component {

  render() {
    const { data, options } = this.props

    return (
      <div>
        <HorizontalBar
          data={data}
          options={options} 
        />
      </div>
    )
  }
}

export default HorizontalBarChart;
