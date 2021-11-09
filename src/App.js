import CardList from "./components/CardList";
import NavBar from "./components/NavBar";

const cards = [
  {
    id: 1,
    name: "Americano",
    description: "The classic Americano Coffee",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/512px-A_small_cup_of_coffee.JPG",
  },
  {
    id: 2,
    name: "Americano",
    description: "The classic Americano Coffee",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/512px-A_small_cup_of_coffee.JPG",
  },
];

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <CardList cards={cards} />
          </div>
          <div className="col-2">
            <h2>Preview</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
