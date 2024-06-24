import { createStyles, makeStyles } from '@material-ui/core/';

export const useStyles = makeStyles(() =>
  createStyles({
    errorContainer: {
      backgroundColor: '#fceded',
      color: 'red',
      padding: '26px 8px',
      border: '2px solid red',
    },
  })
);
