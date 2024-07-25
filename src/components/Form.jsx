import { useState } from 'react';

const Form = ({ setRowClass }) => {
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
            setRowClass({});
            return;
        } else if (height < 0.5 || height > 2.0) {
            setHeight("");
            setWeight("");
            setShowBMI("Please, fill a valid height!");
            setClassSpan("light");
            setRowClass({});
            return;
        }

        const BMI = weight / (height * height);
        const resultFormated = BMI.toFixed(2);

        const rowClasses = {
            insufficientWeight: "",
            normalWeight: "",
            overweightI: "",
            overweightII: "",
            obesityI: "",
            obesityII: "",
            obesityIII: "",
            extremeObesity: ""
        };

        if (BMI <= 17.0) {
            setShowBMI(`Your BMI is ${resultFormated} - Insufficient Weight`);
            setClassSpan("info");
            rowClasses.insufficientWeight = "table-info";
        } else if (BMI <= 24.9) {
            setShowBMI(`Your BMI is ${resultFormated} - Normal weight`);
            setClassSpan("success");
            rowClasses.normalWeight = "table-success";
        } else if (BMI <= 26.9) {
            setShowBMI(`Your BMI is ${resultFormated} - Overweight grade I`);
            setClassSpan("secondary");
            rowClasses.overweightI = "table-secondary";
        } else if (BMI <= 29.9) {
            setShowBMI(`Your BMI is ${resultFormated} - Overweight grade II`);
            setClassSpan("secondary");
            rowClasses.overweightII = "table-secondary";
        } else if (BMI <= 34.9) {
            setShowBMI(`Your BMI is ${resultFormated} - Type I obesity`);
            setClassSpan("warning");
            rowClasses.obesityI = "table-warning";
        } else if (BMI <= 39.9) {
            setShowBMI(`Your BMI is ${resultFormated} - Type II obesity`);
            setClassSpan("warning");
            rowClasses.obesityII = "table-warning";
        } else if (BMI <= 49.9) {
            setShowBMI(`Your BMI is ${resultFormated} - Type III obesity morbid`);
            setClassSpan("danger");
            rowClasses.obesityIII = "table-danger";
        } else if (BMI >= 50.0) {
            setShowBMI(`Your BMI is ${resultFormated} - Type III obesity morbid`);
            setClassSpan("danger");
            rowClasses.extremeObesity = "table-danger";
        } else {
            setShowBMI("Calculate your BMI and check the result with the table below.");
        }

        setRowClass(rowClasses);
    };

    return (
        <form className="d-flex flex-column align-items-center">
            <div className="form-control mb-4 p-3">
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
    );
};

export default Form;
