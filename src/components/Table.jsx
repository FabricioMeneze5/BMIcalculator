
const Table = () => {
    return (
        <table className="table table-striped w-50 border border-5 text-center">
            <thead>
                <tr>
                    <th>BMI / IMC</th>
                    <th>Classification</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Less than 17</td>
                    <td>Insufficient Weight</td>
                </tr>
                <tr>
                    <td>18,5 - 24,9</td>
                    <td>Normal weight</td>
                </tr >
                <tr>
                    <td>25 - 26,9</td>
                    <td>Overweight grade I</td>
                </tr>
                <tr>
                    <td>27 - 29,9</td>
                    <td>Overweight grade II</td>
                </tr>
                <tr>
                    <td>30 - 34,9</td>
                    <td>Type I obesity</td>
                </tr>
                <tr>
                    <td>35 - 39,9</td>
                    <td>Type II obesity</td>
                </tr>
                <tr>
                    <td>40 - 49,9</td>
                    <td>Type III obesity morbid</td>
                </tr>
                <tr>
                    <td>more than 50</td>
                    <td>Type VI obesity extreme</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;