import { FormControlLabel, RadioGroup } from "@material-ui/core";
import clsx from "clsx";
import { USER_ROLES } from "../../constants/constants";
import Option from "../common/Option";
import { useUserContext } from "../../contexts/userContext";
import { useStyles } from "./style";

const UserTypeSelector = () => {
  const classes = useStyles();
  const { selectedType, setSelectedType } = useUserContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(event.target.value);
  };

  return (
    <RadioGroup value={selectedType} onChange={handleChange}>
      {USER_ROLES.map((userRole) => (
        <FormControlLabel
          key={userRole}
          value={userRole}
          control={<Option />}
          label={userRole}
          className={clsx({
            [classes.checkedLabel]: selectedType === userRole,
            [classes.uncheckedLabel]: selectedType !== userRole,
          })}
        />
      ))}
    </RadioGroup>
  );
};

export default UserTypeSelector;
