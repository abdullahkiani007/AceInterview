import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';

const ProfileCard = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    profilePicture: "/path/to/profile.jpg",
  };

  return (
    <Card className="m-4 shadow-lg">
      <CardContent>
        <div className="flex items-center">
          <Avatar src={user.profilePicture} alt={user.name} className="mr-4" />
          <div>
            <Typography variant="h5" component="div">
              {user.name}
            </Typography>
            <Typography variant="body2">
              {user.email}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
