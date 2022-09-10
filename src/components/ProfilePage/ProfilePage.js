import React from 'react';

import AppHeader from '../AppHeader';

import {useStyles} from './ProfilePage.styles';

const PageProfile = ({
  user
}) => {
  const classes = useStyles();

  return <AppHeader>
    <div className={classes.root}>
      <div className={classes.sidebar}>

      </div>
      <div className={classes.body}>
        
      </div>
    </div>
  </AppHeader>;
};

export default PageProfile;
