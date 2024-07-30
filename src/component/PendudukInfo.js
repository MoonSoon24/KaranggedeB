import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const InfoPenduduk = () => {
  const data = {
    labels: ["Jumlah KK", "Jumlah Jiwa", "Laki-laki", "Perempuan"],
    datasets: [
      {
        label: "Jumlah",
        data: [79, 229, 117, 112],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Visualisasi Jumlah Penduduk",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default InfoPenduduk;
