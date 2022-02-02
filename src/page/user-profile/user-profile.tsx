import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./user-profile.scss";
import Button from "../../components/button/button";

interface user {
  name: string;
  id: number;
  username: string;
  email: string;
  address: { street: string; city: string, zipcode: string };
  phone: string;
  website: string;
}

const UserProfile: FC = () => {
  const [user, setUser] = useState<Array<user>>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const {id} = useParams();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then((data) => {
        setUser([...data]);
      })
      .catch(error => console.log("error", error))
  }, [])

  console.log(user);
  return (
    <div className="user-profile">
      <header className="user-profile__header">
        <h2>Профиль пользователя:</h2>
        <div onClick={() => {
          setIsEditing(true)
        }}>
          <Button>Редактировать</Button>
        </div>
      </header>
      {user.filter((item) => item.id === Number(id)).map(item => (
        <form className="user-profile__form">
          <fieldset>
            <div className="user-profile__item">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                className="user-profile__input"
                {...(isEditing ? {value: item.name} : {placeholder: item.name})}
              />
            </div>
            <div className="user-profile__item">
              <label htmlFor="username">User Name</label>
              <input
                id="username"
                type="text"
                {...(isEditing ? {value: item.username} : {placeholder: item.username})}
                className="user-profile__input"
              />
            </div>
            <div className="user-profile__item">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                {...(isEditing ? {value: item.email} : {placeholder: item.email})}
                className="user-profile__input"
              />
            </div>
            <div className="user-profile__item">
              <label htmlFor="street">Street</label>
              <input
                id="street"
                type="text"
                {...(isEditing ? {value: item.address.street} : {placeholder: item.address.street})}
                className="user-profile__input"
              />
            </div>
            <div className="user-profile__item">
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                {...(isEditing ? {value: item.address.city} : {placeholder: item.address.city})}
                className="user-profile__input"
              />
            </div>
            <div className="user-profile__item">
              <label htmlFor="zipcode">Zip code</label>
              <input
                id="zipcode"
                type="text"
                {...(isEditing ? {value: item.address.zipcode} : {placeholder: item.address.zipcode})}
                className="user-profile__input"
              />
            </div>
            <div className="user-profile__item">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="text"
                {...(isEditing ? {value: item.phone} : {placeholder: item.phone})}
                className="user-profile__input"
              />
            </div>
            <div className="user-profile__item">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                type="text"
                {...(isEditing ? {value: item.website} : {placeholder: item.website})}
                className="user-profile__input"
              />
            </div>
            <div className="user-profile__item">
              <label htmlFor="comment">Comment</label>
              <textarea
                id="comment"
                className="user-profile__textarea"
                rows={5}
              />
            </div>
            {/*<button className="user-profile__button">Update</button>*/}
          </fieldset>
          <button className="btn-submit"
                  type="submit" {...(isEditing ? {disabled: false} : {disabled: true})}>Отправить
          </button>
        </form>
      ))}
    </div>
  );
};

export default UserProfile;