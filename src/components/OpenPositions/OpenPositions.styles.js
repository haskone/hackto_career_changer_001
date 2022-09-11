import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  positionTitle: {
    textAlign: 'left',
    marginBottom: 10
  },
  openPositions: {
    display: 'flex'
  },
  openPosition: {
    marginRight: 12
  }
}));

export {useStyles};
