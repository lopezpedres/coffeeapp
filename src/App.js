import CardList from "./components/CardList";
import NavBar from "./components/NavBar";
import Preview from "./components/Preview";
import CoffeeData from "./components/CoffeeData";
import { useState } from "react";

const initalPreview = {
  id: 1,
  name: "Select a Coffee!",
  description:
    "Click on the preview button of a coffee type to see the ingredients and the instruccion to know how to prepare it",
  imageURL:
    "https://cdn.luxe.digital/media/2020/05/07203610/best-coffee-beans-luxe-digital-775x388.jpg",
};

function App() {
  const [previewCoffee, setpreviewCoffee] = useState(initalPreview);
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-5 text-center">
            <CardList
              CoffeeData={CoffeeData}
              setpreviewCoffee={setpreviewCoffee}
            />
          </div>
          <div className="col-7 text-center">
            <h2>Preview</h2>
            <Preview previewCoffee={previewCoffee} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

//TO ADD AS ISSUES
//CREATE A FILE WITH ALL THE DATA (GET RIGHT DATA)
//CREATE A USESTATE FOR THE PREVIEW BUTTON
//FIGURE IF I CAN COLLAPSE MY COFFE LIST
