import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BookMentorDialog({
  open,
  onClose,
  mentors,
  onAdd,
  timeSlot,
}) {
  const [booked, setBooked] = useState([]);
  return (
    <Dialog
      maxWidth={'md'}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">Booked Mentors Sessions</DialogTitle>
      <DialogContent>
        <List>
          {mentors.map((mentor, index) => {
            const labelId = `checkbox-list-secondary-label-${index}`;
            return (
              <ListItem
                selected={booked.includes(index)}
                key={index}
                button
                onClick={() => {
                  if (booked.includes(index)) {
                    setBooked([...booked.filter(m => m !== index)]);
                  } else {
                    setBooked([...booked, index]);
                  }
                }}
              >
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

                <Box>
                  <ListItemText id={labelId} primary={mentor} />
                  <ListItemText id={labelId} primary={timeSlot} />
                </Box>

              </ListItem>
            );
          })}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => {
          onAdd(booked);
          onClose();
        }} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}