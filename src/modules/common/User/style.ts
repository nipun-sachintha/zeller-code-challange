import { createStyles, makeStyles } from '@material-ui/core/';

export const useStyles = makeStyles(() =>
  createStyles({
    userMainContainer: {
      display: 'flex',
      padding: '8px 0',
      alignItems: 'center',
    },
    userSubContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '16px',
    }
  })
);
