import phoneTopBarButtonCss from "./phone-top-bar-button.module.css";
import React, {BaseSyntheticEvent} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library} from '@fortawesome/fontawesome-svg-core';
import {IconName} from "@fortawesome/fontawesome-common-types";
library.add(fas);


const PhoneTopBarButton = (props: { iconName: IconName, isActivated: boolean, func: Function }) => {

    const onMouseClick = (event: BaseSyntheticEvent) => {
        event.stopPropagation();
        props.func(event);
    }

    return (
        <div className={`
        ${phoneTopBarButtonCss.phoneTopBarButton}  
        ${props.isActivated ? phoneTopBarButtonCss.isActivated : phoneTopBarButtonCss.isDeactivated}
        `} onMouseDown={onMouseClick}>
            <FontAwesomeIcon icon={["fas", props.iconName]}/>
        </div>
    );
}

export default PhoneTopBarButton;
