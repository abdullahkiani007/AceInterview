import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const FeedbackCard = () => {
  const data = {
    title: "Feedback",
    description: "Recent feedback on your performance.",
    feedback: "Great job on the last interview! Keep improving your technical skills.", // example data
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
        <Typography variant="body1" component="div" className="mt-4">
          {data.feedback}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeedbackCard;
