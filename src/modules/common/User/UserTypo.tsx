import { Typography } from "@material-ui/core";
import { ReactNode } from "react";

type UserTypoProps = {
  children: ReactNode;
  variant: "icon" | "name" | "type";
};

const UserTypo = ({ children, variant }: UserTypoProps) => {
  let color:
    | "initial"
    | "inherit"
    | "primary"
    | "secondary"
    | "textPrimary"
    | "textSecondary"
    | "error" = "initial";

  switch (variant) {
    case "icon":
      color = "primary";
      break;
    case "type":
      color = "textSecondary";
      break;
    case "name":
    default:
      break;
  }

  return <Typography color={color}>{children}</Typography>;
};

export default UserTypo;
