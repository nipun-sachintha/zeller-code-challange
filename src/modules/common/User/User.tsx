import { Box } from "@material-ui/core";
import UserIcon from "./UserIcon";
import { useStyles } from "./style";
import UserTypo from "./UserTypo";

type UserProps = {
  userName: string;
  userType: string;
};

const User = ({ userName, userType }: UserProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.userMainContainer}>
      <UserIcon firstChar={userName[0].toUpperCase()} />
      <Box className={classes.userSubContainer}>
        <UserTypo variant="name">{userName}</UserTypo>
        <UserTypo variant="type">{userType}</UserTypo>
      </Box>
    </Box>
  );
};

export default User;
