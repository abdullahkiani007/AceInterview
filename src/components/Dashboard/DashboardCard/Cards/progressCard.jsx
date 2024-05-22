import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';

const ProgressCard = () => {
  const data = {
    title: "Progress Report",
    description: "Track your progress over time.",
    chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Score",
          data: [65, 70, 75, 80, 85, 90],
          fill: false,
          borderColor: "#4CAF50",
        },
      ],
    },
  };

  return (
    <Card className="m-4 shadow-lg">
      <CardContent>
        <Typography variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2">
          {data.description}
        </Typography>
        <div className="mt-4">
          <Line data={data.chartData} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressCard;
