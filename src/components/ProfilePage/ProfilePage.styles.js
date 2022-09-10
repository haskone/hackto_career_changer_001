import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex'
  },
  sidebar: {
    maxWidth: 360
  },
  body: {
    width: '100%'
  },
}));

export {useStyles};
