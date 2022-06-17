import "./App.css";
import Create from "./screens/Create";
import Home from "./screens/Home";
import List from "./screens/List";
import Search from "./screens/Search";

function App() {
  return (
    <div className="App">
      <Home tab="0" />
      <Create tab="1" />
      <List tab="2" />
      <Search tab="3" />
    </div>
  );
}

export default App;
