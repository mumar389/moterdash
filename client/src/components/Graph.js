import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, LineController, LineElement, PointElement, ArcElement } from 'chart.js';
Chart.register(CategoryScale, LinearScale, LineController, LineElement, PointElement, ArcElement);

const Graph = ({ data, chartId }) => {
  const chartRef = useRef(null);
  let myChart;

  useEffect(() => {
    if (chartRef && chartRef.current && data) {
      if (myChart) {
        myChart.destroy();
      }
      const statusCounts = data.reduce((acc, motor) => {
        acc[motor.motorStatus] = (acc[motor.motorStatus] || 0) + 1;
        return acc;
      }, {});

      const labels = Object.keys(statusCounts);
      const counts = Object.values(statusCounts);
      myChart = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels:labels,
          datasets: [
            {
              label: ['Faulty','Not Working','Working'],
              data: counts,
              fill: false,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)', // Red
                'rgba(54, 162, 235, 0.6)', // Blue
                'rgba(255, 206, 86, 0.6)', // Yellow
              ],
              borderWidth: 1,
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [data, chartId]);
          
  return <canvas id={chartId} ref={chartRef} />;
};

export default Graph;

