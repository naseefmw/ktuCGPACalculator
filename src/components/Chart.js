import React from 'react'
import { Chart } from 'react-google-charts'

const data = [
  ['Element', 'SGPA', { role: 'style' }],
  ['S1', 8.94, '#b87333'], // RGB value
  ['S2', 10.0, 'silver'], // English color name
  ['S3', 9.3, 'gold'],
  ['S4', 1.0, 'color: #e5e4e2'], // CSS-style declaration
]

const MyChart = () => {
  return (
    <Chart chartType="ColumnChart" width="400px" height="300px" data={data} />
  )
}

export default MyChart
