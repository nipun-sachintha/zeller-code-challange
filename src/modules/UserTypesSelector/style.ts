import { createStyles, makeStyles } from '@material-ui/core/';

export const useStyles = makeStyles(() =>
  createStyles({
    checkedLabel: {
      backgroundColor: '#e8f2fb',
      borderRadius: '8px',
    },
    uncheckedLabel: {
      backgroundColor: 'transparent',
    },
  })
);
