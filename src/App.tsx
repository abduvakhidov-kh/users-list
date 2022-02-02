import {useEffect, FC, useState} from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UserList from "./components/users-list/users-list";
import Sidebar from "./components/sidebar/sidebar";
import "./App.style.scss";
import UserProfile from "./page/user-profile";

const App: FC = () => {
    const [users, setUsers] = useState<Array<object>>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json();
            })
            .then((data) => {
                setUsers( [...data] );
            })
            .catch(error => console.log("error", error))
    }, [])

    console.log(users);

  return (
    <Router>
      <div className="App">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<UserList userList={users} />} />
        </Routes>
        <Routes>
          <Route path={"/user/:id"} element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
