import "./App.css";

export default function App() {
  return (
    <div className="App">
     <Msg name="Ajith" pic="https://www.unigreet.com/wp-content/uploads/2021/07/WhatsApp-dp-images%EF%BB%BF-download%EF%BB%BF.jpg"/>
     <Msg name="Vijay" pic="https://e1.pxfuel.com/desktop-wallpaper/718/825/desktop-wallpaper-22-3d-for-whatsapp-dp-cool-dp-thumbnail.jpg" />
     <Msg name="Athulya" pic="https://funkylife.in/wp-content/uploads/2022/12/whatsapp-dp-funkylife-520-1.jpg"/>
    </div>
  );
}

function Msg({name,pic}){
  return(
    <div>
      <img className="person" src={pic} alt={name}/>
      <h2>Hi {name}❤️</h2>
      </div>
  )
}

// PROPS always comes as objects