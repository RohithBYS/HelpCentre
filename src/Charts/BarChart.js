import React from 'react';
import './chart.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Overall JEE Scores',
    },
  },
};

const labels = ['Maths', 'Physics', 'Chemistry', 'English', 'Telugu', 'Hindi', 'Social'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Student 1',
      data: [100,400,344,678,568,968,533],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Student 2',
      data: [845,56,345,536,343,345,767],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function BarChart() {
  return(
   
  
        <Bar options={options} data={data} />
     
  )
}
