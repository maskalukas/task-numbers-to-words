import {faChevronLeft, faCoffee} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import phoneBottomMenuCss from "./phone-bottom-menu.module.css";
import {useHistory} from "react-router";
import {BaseSyntheticEvent} from "react";
import { screenRoute as mainMenuScreenRoute } from "../../../screens/phone-screen-main-menu/phone-screen-main-menu";

/**
 * The bottom menu that contains: the back button, the main menu
 */
const PhoneBottomMenu = () => {
    const history = useHistory();

    /**
     * Redirect to the previous route
     */
    const onMouseClickBack = (event: BaseSyntheticEvent) => {
        history.goBack();
    }

    /**
     * Redirect to the main menu screen
     */
    const onMouseClickMainMenu = (event: BaseSyntheticEvent) => {
        history.push({
            pathname: "/" + mainMenuScreenRoute
        })
    }

    return (
        <div className={phoneBottomMenuCss.bottomMenu}>
            <FontAwesomeIcon icon={faChevronLeft} onMouseDown={ onMouseClickBack } />
            <FontAwesomeIcon icon={["fas","ellipsis-h"]} onMouseDown={ onMouseClickMainMenu } />
        </div>
    )
}

export default PhoneBottomMenu;
