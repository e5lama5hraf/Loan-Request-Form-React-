import SuccessfulMessage from "./SuccessfulMessage";
import WrongPhone from "./WrongPhone";
import WrongAge from "./WrongAge";
import { useState } from "react";
import "./css/MyFormStyle.css"
import "./css/successful.css"

const divStyle = {
    margin: "15px 0"
}
const inputStyle = {
    display: "block",
    width: "100%",
    padding: "5px",
    outline: "none",
    fontSize: "18px"
};

export default function MyForm() {

    const [formValues, setFormValues] = useState({
        name: "",
        phoneNumber: "",
        age: "",
        employee: false,
        salary: "",
    });

    const [popupType, setPopupType] = useState(null); // null | "success" | "wrongPhone" | "wrongAge"

    // const [name, setName] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("");
    // const [age, setAge] = useState("");
    // const [employee, setEmployee] = useState(true);
    // const [salary, setSalary] = useState("");

    function handleName(event) {
        setFormValues({
            ...formValues,
            name: event.target.value
        });
    };

    function handlePhoneNumber(event) {
        setFormValues({
            ...formValues,
            phoneNumber: event.target.value
        });
    };

    function handleAge(event) {
        setFormValues({
            ...formValues,
            age: event.target.value
        });
    };

    function handleEmployee(event) {
        setFormValues({
            ...formValues,
            employee: event.target.checked
        });
    };

    function handleSalary(event) {
        setFormValues({
            ...formValues,
            salary: event.target.value
        });
    };


    function handleSubmitForm() {
        if (formValues.name && formValues.phoneNumber && formValues.age && formValues.employee && formValues.salary) {
            if (!(formValues.phoneNumber.length > 10 && formValues.phoneNumber.length < 12)) {
                setPopupType("wrongPhone");
            } else if (!(formValues.age < 100 && formValues.age > 18)) {
                setPopupType("wrongAge");
            } else {
                setPopupType("success");
            }
        };
    };

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                style={{
                    backgroundColor: "#2d41b0",
                    padding: "15px",
                    borderRadius: "10px",
                    width: "50%",
                    color: "white",
                    fontFamily: "Arial, Helvatica, sans-serif",
                    textAlign: "center"
                }}>

                <h2 style={{
                    borderBottom: "2px solid white",
                    padding: "25px",
                    fontSize: "30px"
                }}>Requesting a Loan</h2>

                <div style={divStyle}>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={formValues.name}
                        onChange={handleName}
                        // value={name}
                        // onChange={(changeName) => {
                        //     setName(changeName.target.value);
                        // }}
                        style={inputStyle} />
                </div>

                <div style={divStyle}>
                    <label>Phone Number:</label>
                    <input
                        type="number"
                        value={formValues.phoneNumber}
                        onChange={handlePhoneNumber}
                        // value={phoneNumber}
                        // onChange={(changePhone) => {
                        //     setPhoneNumber(changePhone.target.value);
                        // }}
                        style={inputStyle} />
                </div>

                <div style={divStyle}>
                    <label>Age:</label>
                    <input
                        type="number"
                        value={formValues.age}
                        onChange={handleAge}
                        // value={age}
                        // onChange={(changeAge) => {
                        //     setAge(changeAge.target.value);
                        // }}
                        style={inputStyle} />
                </div>

                <div style={divStyle}>
                    <label>Are You an Employee?</label>
                    <input
                        type="checkbox"
                        checked={formValues.employee}
                        onChange={handleEmployee}
                        // checked={employee}
                        // onChange={(changeEmployee) => {
                        //     setEmployee(changeEmployee.target.checked);
                        // }}
                        style={{
                            display: "block",
                            width: "100%",
                            height: "30px",
                            outline: "none"
                        }} />
                </div>

                <div style={divStyle}>
                    <label>Salary:</label>
                    <select
                        value={formValues.salary}
                        onChange={handleSalary}
                        // value={salary}
                        // onChange={(changeSalary) => {
                        //     setSalary(changeSalary.target.value);
                        // }}
                        style={inputStyle}>
                        <option value={""}>Choose Salary</option>
                        <option>500$</option>
                        <option>1000$</option>
                        <option>2000$</option>
                    </select>
                </div>

                <button
                    className={!(formValues.name && formValues.phoneNumber && formValues.age && formValues.employee && formValues.salary) ? "submit-btn" : "submit-btn active"}

                    onClick={handleSubmitForm}
                >
                    Submit
                </button>
            </form>
            {popupType === "wrongPhone" && <WrongPhone closeMessage={() => setPopupType(null)} />}
            {popupType === "wrongAge" && <WrongAge closeMessage={() => setPopupType(null)} />}
            {popupType === "success" && <SuccessfulMessage closeMessage={() => setPopupType(null)} />}
        </>
    )
}