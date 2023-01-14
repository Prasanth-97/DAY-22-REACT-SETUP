import "./App.css";
import Message from "../src/constants/Message";


export default function App() {
  return (
    <div className="App">
      {Message.length
        ? Message.map((each) => <Msg name={each.name} pic={each.imageURL} />)
        : ""}
    </div>
  );
}

function Msg({ name, pic }) {
  return (
    <div>
      <img className="person" src={pic} alt={name} />
      <h2>Hi {name}❤️</h2>
    </div>
  );
}

// PROPS always comes as objects
