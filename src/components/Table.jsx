
const Table = () => {
    return (
        <table className="table border w-50 border-5 text-center">
            <thead>
                <tr>
                    <th>BMI</th>
                    <th>Classification</th>
                </tr>
            </thead>
            <tbody>
                <tr className="table-info">
                    <td>Less than 17</td>
                    <td>Insufficient Weight</td>
                </tr>
                <tr className="table-success">
                    <td>18,5 - 24,9</td>
                    <td>Normal weight</td>
                </tr>
                <tr className="table-secondary">
                    <td>25 - 26,9</td>
                    <td>Overweight grade I</td>
                </tr>
                <tr className="table-secondary">
                    <td>27 - 29,9</td>
                    <td>Overweight grade II</td>
                </tr>
                <tr className="table-warning">
                    <td>30 - 34,9</td>
                    <td>Type I obesity</td>
                </tr>
                <tr className="table-warning">
                    <td>35 - 39,9</td>
                    <td>Type II obesity</td>
                </tr>
                <tr className="table-danger">
                    <td>40 - 49,9</td>
                    <td>Type III obesity morbid</td>
                </tr>
                <tr className="table-danger">
                    <td>more than 50</td>
                    <td>Type VI obesity extreme</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;