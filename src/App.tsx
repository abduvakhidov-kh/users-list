import {useEffect, FC, useState, useContext} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UserList from "./components/users-list/users-list";
import Sidebar from "./components/sidebar/sidebar";
import "./App.style.scss";
import UserProfile, {user} from "./page/user-profile/user-profile";
import Loading from "./components/loading/loading";
import {AppContext} from "./AppContext";

const App: FC = () => {
  const [users, setUsers] = useState<Array<user>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const {state} = useContext(AppContext);

  window.onload = (event) => {
    setIsLoading(false)
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then((data) => {
        let usersData = [...data];
        if (state.sortBy === "all") {
          setUsers(usersData);
        } else if (state.sortBy === "city") {
          setUsers(usersData.sort((a, b) => a.address.city.toLowerCase().localeCompare(b.address.city.toLowerCase())));
        } else if (state.sortBy === "company") {
          setUsers(usersData.sort((a, b) => a.company.name.toLowerCase().localeCompare(b.company.name.toLowerCase())))
        }
      })
      .catch(error => console.log("error: ", error))
  }, [state])


  return (
    <Router>
      {isLoading ? (<Loading/>) :
        (<div className="App">
          <Sidebar/>
          <Routes>
            <Route path="/" element={<UserList usersList={users}/>}/>
            <Route path={"/user/:id"} element={<UserProfile/>}/>
          </Routes>
        </div>)
      }
    </Router>
  );
}

export default App;
