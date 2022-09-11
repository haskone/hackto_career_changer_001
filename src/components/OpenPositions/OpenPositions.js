import React, { useCallback } from 'react';

import Typography from '@material-ui/core/Typography';

import OpenPositionItem from './OpenPositionItem';

import { useStyles } from './OpenPositions.styles';

const OpenPositions = ({
  onPositionSelect
}) => {
  const classes = useStyles();

  const onPositionClick = useCallback((id) => {
    onPositionSelect(id);
  }, [onPositionSelect]);

  return (
    <div className={classes.root}>
      <Typography variant='h4' className={classes.positionTitle}>Select your journey</Typography>
      <div className={classes.openPositions}>
        <OpenPositionItem
          id="1"
          onPrimaryActionClick={onPositionClick}
          title="Software Engineer to UX/UI Developer Journey"
          image="https://cdn-icons-png.flaticon.com/512/2554/2554442.png"
          description="Are you passionate about innovative technologies like speech? Interested in Amazon Alexa, the brain behind Amazon Echo? The Amazon Alexa team is looking for a Sr. UX Designer to create new customer experiences for Alexa Skills on devices such as Amazon Echo, Amazon Show, Amazon Spot and more."
          className={classes.openPosition} />
        <OpenPositionItem
          id="2"
          onPrimaryActionClick={onPositionClick}
          title="Software Engineer to Project Manager Journey"
          image="https://cdn-icons-png.flaticon.com/512/2554/2554433.png"
          description="Are you looking for your next Program/Project Manager role, but not sure where to start? Well, you have found the right place! At Amazon, we are working to be the most customer-centric company on earth."
          className={classes.openPosition}
        />
      </div>
    </div>
  );
};

export default OpenPositions;
