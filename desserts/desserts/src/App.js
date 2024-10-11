import "./App.css";
import GameList from "./GameList";

const games = [
  {
    name: "Throne & Liberty",
    price: 0,
    createdAt: "2022-09-01",
  },
  {
    name: "Cyberpunk",
    price: 60,
    createdAt: "2022-01-02",
  },
  {
    name: "World of Warcraft",
    price: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Lineage 2",
    price: 69,
    createdAt: "2022-01-04",
  },
];

function App() {
  return (
    <div className="App">
      <h2>List of games:</h2>
      <GameList data={games} />
    </div>
  );
}

export default App;
