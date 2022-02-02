import {FC} from "react";
import { Link } from "react-router-dom";
import "./user.style.scss";

interface props {
    fullName: string;
    city: string;
    company: string;
    id: number;
}

const User: FC<props> = ({fullName, city, company, id}) => {

    return(
        <div className="user">
            <ul className="user__data">
                <li>ФИО: <span>{fullName}</span></li>
                <li>город: <span>{city}</span></li>
                <li>компания: <span>{company}</span></li>
            </ul>
            <Link to={"/user/" + id}>
                <span  className="user_about user__link ">Подробнее</span>
            </Link>
        </div>
    );
};

export default User;