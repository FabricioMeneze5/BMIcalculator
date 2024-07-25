import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
    const [rowClass, setRowClass] = useState({});

    return (
        <div className="container-sm d-flex flex-column align-items-center bg-white rounded-4 mt-4 mb-4">
            <div>
                <h1 className="h1 mb-4 mt-4 text-primary text-center">BMI Calculator</h1>
                <Form setRowClass={setRowClass} />
                <Table rowClass={rowClass} />
            </div>
        </div>
    );
}

export default App;
