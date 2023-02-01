import logo from './logo.svg';
import './App.css';

function App() {
  let a = 10;
  let arr = [1, 2, 3, 4];
  let mobiles = [
    {
      name: "A30",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 2000,
      brand: "Samsung",
    },
    {
      name: "Note10",
      ram: "6gb",
      rom: "128gb",
      camera: "50px",
      price: 4000,
      brand: "Samsung",
    },
    {
      name: "S10",
      ram: "3gb",
      rom: "128gb",
      camera: "10px",
      price: 5000,
      brand: "Samsung",
    },
    {
      name: "Iphone4",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "Iphone",
    },
    {
      name: "Iphone4s",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 20000,
      brand: "Iphone",
    },
    {
      name: "Iphone5",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 30000,
      brand: "Iphone",
    },
    {
      name: "Iphone6",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 30000,
      brand: "Iphone",
    },
    {
      name: "RedmiNote10",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "Xiaomi",
    },
    {
      name: "RedmiNote11",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "Xiaomi",
    },
    {
      name: "Redmi10",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "Xiaomi",
    },
    {
      name: "Redmi10Pro",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "Xiaomi",
    },
    {
      name: "A3s",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "Oppo",
    },
    {
      name: "A3s",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "Realmi",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
      <h1>Hello React</h1>
        {mobiles.map((x, i) => {
          return (
            <div key={i} className="card">
              <h3>{x.brand}</h3>
              <p>{x.name}</p>
              <p>Ram {x.ram}</p>
              <p>Rom {x.rom}</p>
              <p>Camera {x.camera}</p>
              <p>Rs {x.price} /-</p>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
