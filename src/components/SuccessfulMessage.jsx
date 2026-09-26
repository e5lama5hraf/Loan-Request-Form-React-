import "./css/successful.css"

export default function SuccessfulMessage({closeMessage}) {
    return (
        <div className={"over-lay"}
        onClick={closeMessage}>
            <h1 className="message">The Form Has Been Submitted Successfully</h1>
        </div>
    )
}