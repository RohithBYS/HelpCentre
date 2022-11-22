import React from 'react'
import './chart.css'
import 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

const data = {
  labels: ["Maths", "Physics", "Chemistry",],
  datasets: [
    {
      label: "Student 1",
      data: [8, 53, 85],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Student 2",
      data: [45, 87, 35],
      fill: false,
      borderColor: "red"
    },
    {
      label: "Student 3",
      data: [90, 85, 75],
      fill: false,
      borderColor: "blue"
    },
    {
      label: "Student 4",
      data: [52, 67, 95],
      fill: false,
      borderColor: "green"
    },
    {
      label: "Student 5",
      data: [90, 65, 55],
      fill: false,
      borderColor: "yellow"
    }
  ]
}

// const options = {
//   title: {
//     display: true,
//     text: 'JEE Mains Score'
//   },
//   scales: {
//     yAxes:[
//       {
//         ticks: {
//           min: 0,
//           max:100,
//           stepSize: 100
//         }
//       }
//     ]
//   } 
// }

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'JEE Main Scores',
    }
  },
};

export default function LineChart() {
  return(
    
        <Chart type='line' data={data} options={options} />
      
    
  ) 
}
