import "./App.css";
import GetData from "./components/GetData";

function App() {
  return (
    <div className="App">
      <GetData url="data" header="успешное получение данных" />
      <GetData url="error" header="получение 500 ошибки" />
      <GetData url="loading" header="индикатор загрузки" />
    </div>
  );
}

export default App;
