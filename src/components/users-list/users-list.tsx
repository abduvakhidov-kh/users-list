import { FC } from "react";
import User from "../user/user";
import "./user-list.style.scss";

interface props {
    userList: any;
}

const UserList: FC<props> = ({userList}) => {

    return(
        <div className="user-list">
            <h2>Список польователей:</h2>
            {userList.map((user: any) => (
                <User fullName={user.name} city={user.address.city} company={user.company.name} id={user.id} key={user.id} />
            ))}
        </div>
    );
};

export default UserList;