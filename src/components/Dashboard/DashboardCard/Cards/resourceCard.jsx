import React from 'react';
import { Card, CardContent, Typography, Link } from '@mui/material';

const ResourcesCard = () => {
  const resources = [
    { title: "How to Ace Technical Interviews", url: "https://example.com/article1" },
    { title: "Improving Communication Skills", url: "https://example.com/article2" },
  ];

  return (
    <Card className="m-4 shadow-lg">
      <CardContent>
        <Typography variant="h5" component="div">
          Resources
        </Typography>
        <Typography variant="body2">
          Articles and videos for interview preparation.
        </Typography>
        <ul className="mt-4">
          {resources.map((resource, index) => (
            <li key={index}>
              <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ResourcesCard;
