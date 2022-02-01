import {FC} from "react";
import "./button.style.scss";


const Button: FC = ({children}) => {

    return(
        <button className="btn">
            {children}
        </button>
    );
};

export default Button;