import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
]

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header() {
  //   const style = { color: "red", fontSize: "48px", textTransform: "uppercase" }
  const style = {}
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  )
}
function Menu() {
  const pizzas = pizzaData
  const numPizzas = pizzas.length

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All from our
            stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizaaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Finghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  )
}

function Pizza({ pizaaObj }) {
  // console.log(props)
  return (
    <li className={`pizza ${pizaaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizaaObj.photoName} alt={pizaaObj.name} />
      <div>
        <h3>{pizaaObj.name}</h3>
        <p>{pizaaObj.ingredients}</p>
        <span>{pizaaObj.soldOut ? "SOLD OUT" : pizaaObj.price + 3}</span>
      </div>
    </li>
  )
}

function Footer() {
  const hour = new Date().getHours()
  const openHour = 12
  const closehour = 21
  const isOpen = hour >= openHour && hour <= closehour
  //   console.log(isOpen)

  //   if (hour >= openHour && hour <= closehour) {
  //     alert("We're currentle open!")
  //   } else {
  //     alert("Sorry we're close")
  //   }

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closehour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome between {openHour}:00 and {closehour}:00.
        </p>
      )}
    </footer>
  )
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  )
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
