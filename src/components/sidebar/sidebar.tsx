import {FC, useContext} from "react";
import "./sidebar.style.scss";
import Button from "../button/button";
import {AppContext} from "../../AppContext";

const Sidebar: FC = () => {
  const {setState} = useContext(AppContext)

  return (
    <div className="sidebar">
      <h3>Сортировка:</h3>
      <div className="button_group">
        <div onClick={() => {
          setState({sortBy: "city"})
        }}>
          <Button>по городу</Button>
        </div>
        <div onClick={() => {
          setState({sortBy: "company"})
        }}>
          <Button>по компании</Button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;