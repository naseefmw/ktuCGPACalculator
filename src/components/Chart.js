import React from 'react'
import { Chart } from 'react-google-charts'

const MyChart = ({ values }) => {
  const data = [
    ['Element', 'SGPA', { role: 'style' }],
    ['S1', values[0][0], 'orange'],
    ['S2', values[0][1], 'silver'],
    ['S3', values[0][2], 'gold'],
    ['S4', values[0][3], 'black'],
    ['S5', values[0][4], 'black'],
    ['S6', values[0][5], 'black'],
    ['S7', values[0][6], 'black'],
    ['S8', values[0][7], 'black'],
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
