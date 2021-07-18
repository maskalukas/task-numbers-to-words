import {faChevronLeft, faCoffee} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import phoneBottomMenuCss from "./phone-bottom-menu.module.css";
import {useHistory} from "react-router";
import {BaseSyntheticEvent} from "react";

const PhoneBottomMenu = () => {
    const history = useHistory();

    const onMouseClick = (event: BaseSyntheticEvent) => {
        history.goBack();
    }

    return (
        <div className={phoneBottomMenuCss.bottomMenu}>
            <FontAwesomeIcon icon={faChevronLeft} onMouseDown={ onMouseClick } />
        </div>
    )
}

export default PhoneBottomMenu;
