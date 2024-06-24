import { useMemo } from "react";
import User from "../common/User";
import { useUserContext } from "../../contexts/userContext";
import { USER_ROLES } from "../../constants/constants";
import Loader from "../common/Loader";
import Error from "../common/Error";

const Users = () => {
  const {
    selectedType,
    adminUsers,
    managerUsers,
    usersLoading,
    usersLoadingError,
  } = useUserContext();

  const usersList = useMemo(() => {
    switch (selectedType) {
      case USER_ROLES[0]:
        return adminUsers;
      case USER_ROLES[1]:
        return managerUsers;
      default:
        return [];
    }
  }, [selectedType, adminUsers, managerUsers]);

  if (usersLoading) return <Loader />;

  if (usersLoadingError) return <Error />;

  return (
    <>
      {usersList.map(({ name, id }) => (
        <User key={id} userName={name} userType={selectedType} />
      ))}
    </>
  );
};

export default Users;
