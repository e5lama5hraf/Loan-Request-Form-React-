import "./css/successful.css"

export default function WrongPhone({closeMessage}) {
    return (
        <div className={"over-lay"}
        onClick={closeMessage}>
            <h1 className="message wrong">Phone Number Format is Incorrect</h1>
        </div>
    )
}