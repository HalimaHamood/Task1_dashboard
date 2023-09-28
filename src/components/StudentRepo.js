import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';



const StudentRepo = () => {
  const { username } = useParams();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(error => console.error('Error fetching repos:', error));
  }, [username]);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">GitHub Repositories for {username}</Typography>
        <List>
          {repos.map(repo => (
            <ListItem key={repo.id}>
              <ListItemText primary={repo.name} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default StudentRepo;


