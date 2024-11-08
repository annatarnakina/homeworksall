import './App.css';
import { Chart } from "react-google-charts";

function App() {
  const data = [
    ["Task", "Hours per Day"],
    ["Работа", 9],
    ["Еда", 2],
    ["Общение", 2],
    ["Сериалы", 2],
    ["Сон", 7],
  ];

  const options = {
    title: "Мои задачи на день",
  };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default App;
