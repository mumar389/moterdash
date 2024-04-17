import React, { useState } from "react";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";

import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/ChartsContainer";
import axios from "axios";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const [motorData, setMotor] = useState([]);
  // const { monthlyApplications: data } = useAppContext();

  const fetchTableData = async () => {
    try {
      const response = await axios.get("/api/v1/motor");
      setMotor(response.data);
    } catch (error) {
      console.error("Error fetching table data:", error);
    }
  };

  useEffect(() => {
    fetchTableData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const statusCounts = motorData.reduce((acc, motor) => {
    acc[motor.motorStatus] = (acc[motor.motorStatus] || 0) + 1;
    return acc;
  }, {});

  // Extract labels and data for the chart
  const labels = Object.keys(statusCounts);
  const data = Object.values(statusCounts);
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Motor Status",
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Faulty
          "rgba(54, 162, 235, 0.6)", // Not Working
          "rgba(255, 206, 86, 0.6)", // Working
        ],
      },
    ],
  };
  return (
    <Wrapper>
      <h2>Motor Status Chart</h2>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </Wrapper>
  );
};

export default ChartsContainer;
