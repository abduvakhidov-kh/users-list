import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

interface user {
  name: string;
  id: number;
}

const UserProfile: FC = () => {
  const [user, setUser] = useState<Array<user>>([]);
  const { id } = useParams();

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
  return(
    <div>
      {user.filter((item) => item.id === Number(id)).map(item => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

export default UserProfile;