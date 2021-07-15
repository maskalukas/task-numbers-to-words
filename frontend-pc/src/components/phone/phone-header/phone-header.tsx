import phoneHeaderCss from "./phone-header.module.css";

const PhoneHeader = () => {



    return (
        <div className={ phoneHeaderCss.phoneHeader } >
            <div className={ phoneHeaderCss.phoneSignalCircle }></div>
        </div>
    )
}

export { PhoneHeader }
