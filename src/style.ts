import { createStyles, makeStyles } from '@material-ui/core/';

export const useStyles = makeStyles(() =>
  createStyles({
    mainContainer: {
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '24px',
      flexWrap: 'wrap',
      alignContent: 'center',
    },
  })
);
