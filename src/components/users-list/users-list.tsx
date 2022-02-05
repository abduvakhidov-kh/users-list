import {FC} from "react";
import User from "../user/user";
import "./user-list.style.scss";
import {user} from "../../page/user-profile/user-profile";

interface props {
  usersList: Array<user>;
}

const UserList: FC<props> = ({usersList}) => {

  return (
    <div className="user-list">
      <h2>Список польователей:</h2>
      {usersList.map((user: any) => (
        <User fullName={user.name} city={user.address.city} company={user.company.name} id={user.id} key={user.id}/>
      ))}
    </div>
  );
};

export default UserList;