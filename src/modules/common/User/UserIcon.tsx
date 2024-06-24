import UserIconContainer from "./UserIconContainer";
import UserTypo from "./UserTypo";

type UserIconProps = {
  firstChar: string;
};

const UserIcon = ({ firstChar }: UserIconProps) => {
  return (
    <UserIconContainer data-testid="user-icon">
      <UserTypo variant="type">{firstChar}</UserTypo>
    </UserIconContainer>
  );
};

export default UserIcon;
