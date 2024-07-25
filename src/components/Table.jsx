const Table = ({ rowClass }) => {
    return (
        <table className="table border border-5 text-center">
            <thead>
                <tr>
                    <th>BMI</th>
                    <th>Classification</th>
                </tr>
            </thead>
            <tbody>
                <tr className={rowClass.insufficientWeight}>
                    <td>Less than 17</td>
                    <td>Insufficient Weight</td>
                </tr>
                <tr className={rowClass.normalWeight}>
                    <td>18.5 - 24.9</td>
                    <td>Normal weight</td>
                </tr>
                <tr className={rowClass.overweightI}>
                    <td>25 - 26.9</td>
                    <td>Overweight grade I</td>
                </tr>
                <tr className={rowClass.overweightII}>
                    <td>27 - 29.9</td>
                    <td>Overweight grade II</td>
                </tr>
                <tr className={rowClass.obesityI}>
                    <td>30 - 34.9</td>
                    <td>Type I obesity</td>
                </tr>
                <tr className={rowClass.obesityII}>
                    <td>35 - 39.9</td>
                    <td>Type II obesity</td>
                </tr>
                <tr className={rowClass.obesityIII}>
                    <td>40 - 49.9</td>
                    <td>Type III obesity morbid</td>
                </tr>
                <tr className={rowClass.extremeObesity}>
                    <td>More than 50</td>
                    <td>Type VI obesity extreme</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
