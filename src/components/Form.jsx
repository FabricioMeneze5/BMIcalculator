import { useState } from "react";

const Form = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [showBMI, setShowBMI] = useState("Calculate your BMI and check the result with the table below.");
    const [classSpan, setClassSpan] = useState("light");

    const calculateBMI = () => {
        if (weight < 2 || weight > 350) {
            setHeight("");
            setWeight("");
            setShowBMI("Please, fill a valid weight!");
            setClassSpan("light");
        } else if (height < 0.5 || height > 2.0) {
            setHeight("");
            setWeight("");
            setShowBMI("Please, fill a valid height!");
            setClassSpan("light");
        }

        const BMI = weight / (height * height);
        const resultFormated = BMI.toFixed(2);

        if (BMI <= 17.0) {
            setShowBMI(`Your BMI is ${resultFormated} - Insufficient Weight`);
            setClassSpan("info");
        } else if (BMI <= 24.9) {
            setShowBMI(`Your BMI is ${resultFormated} - Normal weight`);
            setClassSpan("success");
        } else if (BMI <= 26.9) {
            setShowBMI(`Your BMI is ${resultFormated} - Overweight grade I`);
            setClassSpan("secondary");
        } else if (BMI <= 29.9) {
            setShowBMI(`Your BMI is ${resultFormated} - Overweight grade II`);
            setClassSpan("secondary");
        } else if (BMI <= 34.9) {
            setShowBMI(`Your BMI is ${resultFormated} - Type I obesity`);
            setClassSpan("warning");
        } else if (BMI <= 39.9) {
            setShowBMI(`Your BMI is ${resultFormated} - Type II obesity`);
            setClassSpan("warning");
        } else if (BMI <= 49.9) {
            setShowBMI(`Your BMI is ${resultFormated} - Type III obesity morbid`);
            setClassSpan("danger");
        } else if (BMI >= 50.0) {
            setShowBMI(`Your BMI is ${resultFormated} - Type III obesity morbid`);
            setClassSpan("danger");
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

                <span className={`badge w-100 text-center text-wrap text-bg-${classSpan}`}>
                    {showBMI}
                </span>

            </div>
        </form>
    )
}

export default Form;