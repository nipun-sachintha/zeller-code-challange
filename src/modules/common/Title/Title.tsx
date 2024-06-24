import { Box, Typography } from '@material-ui/core';
import { ReactNode } from 'react';
import { useStyles } from './style';

type TitleProps = {
  children: ReactNode
}

const Title = ({children}: TitleProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.titleContainer}>
      <Typography variant="h5">{children}</Typography>
    </Box>
  );
}

export default Title;
