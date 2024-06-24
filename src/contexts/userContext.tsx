import { createContext, useContext, useEffect, useState } from "react";
import { ApolloError, useQuery } from "@apollo/client";
import { User } from "../types/users";
import { USER_ROLES } from "../constants/constants";
import { ListZellerCustomers } from "../queries/user-queries";

export interface UserContextDefinition {
  selectedType: string;
  adminUsers: User[];
  managerUsers: User[];
  usersLoading: boolean;
  usersLoadingError?: ApolloError;
  setSelectedType: (selectedType: string) => void;
}

const initData = {
  selectedType: USER_ROLES[0],
  adminUsers: [],
  managerUsers: [],
  usersLoading: false,
  setSelectedType: () => {},
};

export const UserContext = createContext<UserContextDefinition>(initData);

export const useUserContext = () => useContext(UserContext);

interface UserContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const UserContextProvider = (props: UserContextProviderProps) => {
  const { children } = props;
  const {
    loading: usersLoading,
    error: usersLoadingError,
    data,
  } = useQuery(ListZellerCustomers);
  const [selectedType, setSelectedType] = useState(USER_ROLES[0]);
  const [adminUsers, setAdminUsers] = useState<User[]>([]);
  const [managerUsers, setManagerUsers] = useState<User[]>([]);

  useEffect(() => {
    if (data) {
      const users = data.listZellerCustomers.items;
      const adminUserList = users.filter(
        (user: User) => user.role.toLowerCase() === USER_ROLES[0].toLowerCase()
      );
      const managerUsersList = users.filter(
        (user: User) => user.role.toLowerCase() === USER_ROLES[1].toLowerCase()
      );
      setAdminUsers(adminUserList);
      setManagerUsers(managerUsersList);
    }
  }, [data]);

  return (
    <UserContext.Provider
      value={{
        selectedType,
        adminUsers,
        managerUsers,
        usersLoading,
        usersLoadingError,
        setSelectedType,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
