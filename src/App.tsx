import "./styles.css";
import { DogList } from "./DogList";
import { DogNameContainer } from "./AddDogStyles";

export default function App() {
  return (
    <div className="App">
      <div class="flexcontainer">
        <h1>Who's the best dog ever?</h1>
        <p>A registry of the best</p>
        <div>
          <DogList />
          <DogNameContainer>
            <div id="showName">this one is:</div>
          </DogNameContainer>
        </div>
      </div>
    </div>
  );
}
