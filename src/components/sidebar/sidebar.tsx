import { FC } from "react";
import "./sidebar.style.scss";
import Button from "../button/button";

const Sidebar: FC = () => {

  return(
    <div className="sidebar">
      <h3>Сортировка:</h3>
      <div className="button_group">
        <Button>по городу</Button>
        <Button>по компании</Button>
      </div>
    </div>
  );
}

export default Sidebar;