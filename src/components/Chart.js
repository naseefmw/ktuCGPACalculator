import React from 'react'
import { Chart } from 'react-google-charts'

const MyChart = ({ values }) => {
  const data = [
    ['Element', 'SGPA', { role: 'style' }],
    ['S1', values[0][0], 'blue'],
    ['S2', values[0][1], 'blue'],
    ['S3', values[0][2], 'blue'],
    ['S4', values[0][3], 'blue'],
    ['S5', values[0][4], 'blue'],
    ['S6', values[0][5], 'blue'],
    ['S7', values[0][6], 'blue'],
    ['S8', values[0][7], 'blue'],
    ['CGPA', values[1], 'black'],
  ]
  return (
    <div className="chart">
      <Chart
        chartType="ColumnChart"
        width="fit-content"
        height="300px"
        data={data}
        options={{ legend: { position: 'none' } }}
      />
    </div>
  )
}

export default MyChart
