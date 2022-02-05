import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./user-profile.scss";
import Button from "../../components/button/button";
import {useForm, SubmitHandler} from "react-hook-form";

export interface user {
  name: string;
  id: number;
  username: string;
  email: string;
  address: { street: string; city: string, zipcode: string };
  company: { name: string };
  phone: string;
  website: string;
}

interface Inputs {
  name: string;
  id: number;
  username: string;
  email: string;
  phone: string;
  website: string;
  street: string;
  city: string,
  zipcode: string;
  comments: string;
}

const UserProfile: FC = () => {
  const [user, setUser] = useState<Array<user>>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const {id} = useParams();
  const {register, handleSubmit} = useForm<Inputs>();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then((data) => {
        setUser([...data.filter((item: user) => item.id === Number(id))]);
      })
      .catch(error => console.log("error", error))
  }, [])

  const onSubmit: SubmitHandler<Inputs> = data => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="user-profile">
      <header className="user-profile__header">
        <h2>Профиль пользователя:</h2>
        <div onClick={() => {
          if (!isEditing) {
            setIsEditing(true);
          } else {
            setIsEditing(false);
          }
        }}>
          <Button>Редактировать</Button>
        </div>
      </header>
      {user.map(item => (
        <form className="user-profile__form" onSubmit={handleSubmit(onSubmit)} key={item.id}>
          <fieldset>
            <div className="user-profile__item">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                className="user-profile__input"
                defaultValue={item.name}
                required
                {...register("name",)}
                {...(isEditing ? {disabled: false} : {disabled: true})}
              />
            </div>
            <div className="user-profile__item">
              <label htmlFor="username">User Name</label>
              <input
                id="username"
                type="text"
                defaultValue={item.username}
                required
                {...register("username", )}
                {...(isEditing ? {disabled: false} : {disabled: true})}
                className="user-profile__input"
              />
            </div>
            <div className="user-profile__item">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                defaultValue={item.email}
                required
                {...register("email", )}
                {...(isEditing ? {disabled: false} : {disabled: true})}
                className="user-profile__input"
              />
            </div>
            <div className="user-profile__item">
              <label htmlFor="street">Street</label>
              <input
                id="street"
                type="text"
                defaultValue={item.address.street}
                required
                {...register("street")}
                {...(isEditing ? {disabled: false} : {disabled: true})}
                className="user-profile__input"
              />
            </div>
            <div className="user-profile__item">
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                defaultValue={item.address.city}
                required
                {...register("city")}
                {...(isEditing ? {disabled: false} : {disabled: true})}
                className="user-profile__input"
              />
            </div>
            <div className="user-profile__item">
              <label htmlFor="zipcode">Zip code</label>
              <input
                id="zipcode"
                type="text"
                defaultValue={item.address.zipcode}
                required
                {...register("zipcode")}
                {...(isEditing ? {disabled: false} : {disabled: true})}
                className="user-profile__input"
              />
            </div>
            <div className="user-profile__item">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="text"
                defaultValue={item.phone}
                required
                {...register("phone")}
                {...(isEditing ? {disabled: false} : {disabled: true})}
                className="user-profile__input"
              />
            </div>
            <div className="user-profile__item">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                type="text"
                defaultValue={item.website}
                required
                {...register("website")}
                {...(isEditing ? {disabled: false} : {disabled: true})}
                className="user-profile__input"
              />
            </div>
            <div className="user-profile__item">
              <label htmlFor="comment">Comment</label>
              <textarea
                id="comment"
                {...register("comments")}
                {...(isEditing ? {disabled: false} : {disabled: true})}
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