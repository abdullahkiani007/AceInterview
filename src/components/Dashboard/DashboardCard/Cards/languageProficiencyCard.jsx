import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const LanguageProficiencyCard = () => {
  const data = {
    title: "Language Proficiency Test",
    description: "Evaluate your grammar and vocabulary skills.",
    recentScore: "B2", // example data
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

export default LanguageProficiencyCard;
