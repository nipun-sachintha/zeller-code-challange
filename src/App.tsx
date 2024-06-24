import UserTypesSelector from "./modules/UserTypesSelector";
import UsersList from "./modules/UsersList";
import { Box } from "@material-ui/core";
import { useStyles } from "./style";
import { UserContextProvider } from "./contexts/userContext";
import HorizontalDivider from "./modules/common/Divider";

function App() {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <UserContextProvider>
        <UserTypesSelector />
        <HorizontalDivider />
        <UsersList />
        <HorizontalDivider />
      </UserContextProvider>
    </Box>
  );
}

export default App;
