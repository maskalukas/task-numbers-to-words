/**
 * The component that shows total number of something
 */
export const PhoneScreenTotalNumbers = (props: { length: number }) => {
    return (
        <div style={{ textAlign: "center" }}>
            Total number: { props.length }
        </div>
    )
}
