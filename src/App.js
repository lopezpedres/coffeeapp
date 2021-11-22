import CardList from "./components/CardList";
import NavBar from "./components/NavBar";
import Preview from "./components/Preview";
import data from "./components/CoffeeData";
import PreviewReducer from "./reducers/PreviewReducer";
import { useEffect, useReducer, useState } from "react";

function App() {
  const [PreviewState, PreviewDispatch] = useReducer(PreviewReducer, data);
  const [PreviewCoffee, setPreviewCoffee] = useState(null);
  const [formValues, setformValues] = useState(null);

  useEffect(() => {
    console.log("App");
  });
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-5 text-center">
            <CardList
              PreviewState={PreviewState}
              setPreviewCoffee={setPreviewCoffee}
              setformValues={setformValues}
            />
          </div>
          <div className="col-7 text-center">
            <h2>Preview</h2>
            <Preview
              PreviewCoffee={PreviewCoffee}
              PreviewDispatch={PreviewDispatch}
              setPreviewCoffee={setPreviewCoffee}
              formValues={formValues}
              setformValues={setformValues}
            />
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
