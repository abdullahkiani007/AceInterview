import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const TechnicalCard = () => {
  const data = {
    title: "Technical Interviews",
    description: "Evaluate your response time and answer accuracy.",
    recentScore: 88, // example data
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

export default TechnicalCard;
