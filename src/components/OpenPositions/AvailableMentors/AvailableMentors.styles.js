import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 260,
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    alignItems: 'center'
  },
  listRoot: {
    width: '100%'
  },
  bookAMentor: {
    marginBottom: 16
  }
}));

export { useStyles };
