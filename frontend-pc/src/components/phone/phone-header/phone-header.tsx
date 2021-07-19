import phoneHeaderCss from "./phone-header.module.css";

/**
 * The Phone main header
 */
const PhoneHeader = () => {
    return (
        <div className={ phoneHeaderCss.phoneHeader } >
            <div className={ phoneHeaderCss.phoneSignalCircle }></div>
        </div>
    )
}

export { PhoneHeader }
