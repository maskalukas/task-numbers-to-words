import {faChevronLeft, faCoffee} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import phoneBottomMenuCss from "./phone-bottom-menu.module.css";

const PhoneBottomMenu = () => {
    return (
        <div className={phoneBottomMenuCss.bottomMenu}>
            <FontAwesomeIcon icon={faChevronLeft}/>
        </div>
    )
}

export default PhoneBottomMenu;
