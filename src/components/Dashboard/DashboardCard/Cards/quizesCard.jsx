import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const QuizesCard = () => {
  const data = {
    title: "Quizzes",
    description: "Practice with role-based quiz scenarios.",
    recentScore: 90, // example data
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
        <Typography variant="h6" component="div" className="mt-4">
          Recent Score: {data.recentScore}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuizesCard;
