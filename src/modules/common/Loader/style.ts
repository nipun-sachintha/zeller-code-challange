import { createStyles, makeStyles } from '@material-ui/core/';

export const useStyles = makeStyles(() =>
  createStyles({
    loaderContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  })
);
