import phoneScreenTopBarCss from "./phone-screen-top-bar.module.css";

/**
 * The component top bar for screen
 */
export const PhoneScreenTopBar = (props: { children: any }) => {
    return (
        <div className={ phoneScreenTopBarCss.hocScreenTopBar }>
            { props.children }
        </div>
    )
}
