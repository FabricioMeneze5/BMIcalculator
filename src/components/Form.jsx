import { useState, useRef } from "react";

const Form = () => {
    const [weight, setWeight] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
    }

    
    return (
        <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center w-100">
            
            <div className="form-control w-50 mb-4 p-3">

                <input
                type="number"
                placeholder="Weight (kg)"
                className="form-control mb-3"
                required
                value={weight}
                onChange={e => setWeight(e.target.value)}
                // ref={weightInputRef}
                />

                {/* <input
                type="text"
                placeholder="Height (cm)"
                className="form-control mb-3"
                required
                value={height}
                onChange={e => setHeight(e.target.value)}
                ref={heightInputRef}
                /> */}

                <button type="submit" className="btn btn-sm btn-outline-primary w-100 mb-3">Calculate</button>

                <span className="form-control bg-light text-center">Weigth:{weight} - BMI:.</span>
            </div>
        </form>
    )
}

export default Form;
// const calculateBMI = () => {
//     const BMI = weight / (height * height);
//     return BMI;
// }

//     return calculateBMI().toFixed(2)
// }