import React, {useEffect, useState} from 'react';

import {useStyles} from './AvailableMentors.styles';

import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const mentors = {
  1: ['Bessie Chang', 'Rajesh Harald', 'Ella Meta'],
  2: ['Alexandra Shahrzad', 'Lihuén Martin', 'Lilith Henriette', 'Dene Ketill']
};

export default function AvailableMentors ({
  positionId
}) {
  const classes = useStyles();
  const [availableMentors, setAvailableMentors] = useState([]);

  useEffect(() => {
    if (positionId) {
      setAvailableMentors(mentors[positionId]);
    }
  }, [positionId]);

  return <div className={classes.root}>
    <Typography>Available Mentors</Typography>
    <List dense className={classes.root}>
      {availableMentors.map((mentor, index) => {
        const labelId = `checkbox-list-secondary-label-${index}`;

        return (
          <ListItem key={index} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${index + 1}`}
                src={
                  index % 2 ?
                    "https://cdn-icons-png.flaticon.com/512/2922/2922510.png" :
                    "https://cdn-icons-png.flaticon.com/512/2922/2922561.png"
                  }
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={mentor} />
          </ListItem>
        );
      })}
    </List>
  </div>;
};
