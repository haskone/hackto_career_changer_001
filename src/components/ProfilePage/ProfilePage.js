import React, { useCallback, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

import Avatar from '@material-ui/core/Avatar';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExploreIcon from '@material-ui/icons/Explore';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import AppHeader from '../AppHeader';

import AvailableMentors from '../OpenPositions/AvailableMentors';
import OpenPosition from '../OpenPositions/OpenPosition';
import OpenPositions from '../OpenPositions';

import { useAppContext } from '../../context/AppContext';

import Roadmap from '../Roadmap';

import { useStyles } from './ProfilePage.styles';

const PageProfile = ({
  user
}) => {
  const [, setState] = useAppContext();

  const navigate = useNavigate();
  const { positionId } = useParams();

  const [roadmapId, setRoadmapId] = useState(null);

  const classes = useStyles();

  const onPositionSelect = useCallback((id) => {
    navigate(`/profile/position/${id}`);
  }, [navigate]);

  const onExploreClick = useCallback(() => {
    navigate('/profile');
  }, [navigate]);

  const onSeeJourney = useCallback((id) => () => {
    setRoadmapId((currId) => id === currId ? null : id)
  }, []);

  const onLogout = useCallback(() => {
    setState((prev) => {
      return {
        ...prev,
        auth: {
          ...prev.auth,
          user: null
        }
      }
    });

    navigate('/login');
  }, [navigate, setState]);

  return <AppHeader title="Explore">
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <div className={classes.avatarContainer}>
          <Avatar alt="Jamie"
            src="https://charity13.ca/wp-content/uploads/2021/05/adult-women.png"
            className={classes.largeAvatar}
          />
          <Typography className={classes.userName}>
            Jamie
          </Typography>
          <Typography className={classes.userPosition}>
            Software Development Engineer 1
          </Typography>
          <Typography variant="body2" className={classes.tenure}>
            1.5 years at Amazon
          </Typography>
        </div>
        <List>
          <ListItem button selected onClick={onExploreClick}>
            <ListItemIcon><ExploreIcon /></ListItemIcon>
            <ListItemText primary="Explore" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><SupervisorAccountIcon /></ListItemIcon>
            <ListItemText primary="Become a mentor" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button onClick={onLogout}>
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </div>
      <Divider orientation='vertical' />
      <div className={classes.body}>
        {
          positionId ?
            <React.Fragment>
              <div className={classes.openPositionAndRoadmapWrapper}>
                <div className={classes.openPositionWrapper}>
                  <OpenPosition
                    id={positionId}
                    onSeeJourney={onSeeJourney(positionId)}
                    roadmapId={roadmapId}
                  />
                </div>
                {
                  roadmapId && <Roadmap id={positionId} />
                }
              </div>
              <Divider orientation='vertical' />
              <div className={classes.availableMentorsWrapper}>
                <AvailableMentors positionId={positionId} />
              </div>
            </React.Fragment> : <div className={classes.openPositionsWrapper}>
              <OpenPositions onPositionSelect={onPositionSelect} />
            </div>
        }
      </div>

    </div>
  </AppHeader>;
};

export default PageProfile;
