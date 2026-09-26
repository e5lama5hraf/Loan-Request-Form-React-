import "./css/successful.css"

export default function WrongPhone({closeMessage}) {
    return (
        <div className={"over-lay"}
        onClick={closeMessage}>
            <h1 className="message wrong">Age is not Allowed</h1>
        </div>
    )
}