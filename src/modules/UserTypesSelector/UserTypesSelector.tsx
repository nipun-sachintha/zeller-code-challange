import { USER_ROLES_TITLE } from "../../constants/constants";
import Title from "../common/Title";
import UserTypes from "./UserTypes";

const UserTypeSelector = () => {
  return (
    <>
      <Title>{USER_ROLES_TITLE}</Title>
      <UserTypes />
    </>
  );
};

export default UserTypeSelector;
