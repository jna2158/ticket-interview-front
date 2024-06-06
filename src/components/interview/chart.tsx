import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import styled from "styled-components";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const transformData = (data) => {
  const subjects = {};
  data.result.forEach((item) => {
    const subject = item.subject;
    if (!subjects[subject]) {
      subjects[subject] = { correct: 0, total: 0 };
    }
    subjects[subject].total += 1;
    if (item.score > 0) {
      subjects[subject].correct += 1;
    }
  });
  return subjects;
};

export default function Chart({ data }) {
  const subjectsData = transformData(data);
  const categories = Object.keys(subjectsData);
  const total = categories.map(category => subjectsData[category].total);
  const correctCounts = categories.map(category => subjectsData[category].correct);
  const incorrectCounts = categories.map(category => subjectsData[category].total - subjectsData[category].correct);

  const chartData = {
    labels: categories,
    datasets: [
      {
        label: "Total",
        data: total,
        backgroundColor: "rgba(255,251,0, 0.2)",
        borderColor: "rgba(255,251,0, 1)",
        borderWidth: 1,
      },
      {
        label: "Correct Answers",
        data: correctCounts,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Incorrect Answers",
        data: incorrectCounts,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white',
        },
      },
      title: {
        display: true,
        text: 'Interview Results',
        color: 'white',
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          color: 'white',
        },
      },
    },
  };

  return (
    <Wrapper>
      <Bar data={chartData} options={options} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35vh;
`;