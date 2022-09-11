import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex'
  },
  sidebar: {
    minWidth: 360,
    backgroundColor: '#f0f8ff'
  },
  body: {
    width: '100%',
    display: 'flex',
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 12
  },
  largeAvatar: {
    width: 80,
    height: 80
  },
  userName: {
    fontWeight: 500,
    marginTop: 8
  },
  userPosition: {
    marginTop: 8
  },
  tenure: {
    marginTop: 8
  },
  availableMentorsWrapper: {
    marginTop: 12
  },
  openPositionAndRoadmapWrapper: {
    overflow: 'auto',
    flex: 1
  },
  openPositionWrapper: {
    paddingLeft: 12
  },
  openPositionsWrapper: {
    paddingTop: 16,
    paddingLeft: 16
  }
}));

export { useStyles };
