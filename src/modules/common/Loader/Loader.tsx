import { Box, CircularProgress } from '@material-ui/core';
import { useStyles } from './style';

const Loader = () => {
  const classes = useStyles();

  return (
    <Box className={classes.loaderContainer}>
      <CircularProgress />
    </Box>
  );
}

export default Loader;
