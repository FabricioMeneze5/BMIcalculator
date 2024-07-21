import { useState } from "react";

const Form = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [result, setResult] = useState("");
    const [showBMI, setShowBMI] = useState("Calculate your BMI and check the result with the table below.");

    const calculateBMI = () => {
        if (weight < 2 || weight > 350) {
            alert('Please, fill a valid weight');
            setHeight("");
            setWeight("");
            setResult("");
        } else if (height < 0.5 || height > 2.0) {
            alert('Please, fill a valid height');
            setHeight("");
            setWeight("");
            setResult("");
        }

        const BMI = weight / (height * height);
        const resultFormated = BMI.toFixed(2);
        setResult(resultFormated);

        if (BMI <= 17.0) {
            setShowBMI("Insufficient Weight");
        } else if (BMI <= 24.9) {
            setShowBMI("Normal weight");
        } else if (BMI <= 26.9) {
            setShowBMI("Overweight grade I");
        } else if (BMI <= 29.9) {
            setShowBMI("Overweight grade II");
        } else if (BMI <= 34.9) {
            setShowBMI("Type I obesity");
        } else if (BMI <= 39.9) {
            setShowBMI("Type II obesity");
        } else if (BMI <= 49.9) {
            setShowBMI("Type III obesity morbid");
        } else if (BMI >= 50.0) {
            setShowBMI("Type III obesity morbid");
        } else {
            setShowBMI("Calculate your BMI and check the result with the table below.");
        }
    }

    return (
        <form className="d-flex flex-column align-items-center w-100">
            
            <div className="form-control w-50 mb-4 p-3">

                <input
                type="number"
                placeholder="Weight (kg)"
                className="form-control mb-3"
                required
                value={weight}
                onChange={e => setWeight(e.target.value)}
                />

                <input
                type="number"
                placeholder="Height (m)"
                className="form-control mb-3"
                required
                value={height}
                onChange={e => setHeight(e.target.value)}
                />

                <button type="button" onClick={calculateBMI} className="btn btn-sm btn-outline-primary w-100 mb-3">Calculate</button>

                <span className="form-control bg-light text-center">
                    {result}
                    <br />
                    {showBMI}
                </span>
            </div>
        </form>
    )
}

export default Form;