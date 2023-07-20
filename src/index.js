import React from "react";
import ReactDom from "react-dom/client";
// import { useEffect, useState } from "react";
import "./index.css";

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
];

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

function Header() {
  //   const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzas && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredient="Tomanto, Mozarella, Spinach, and ricotta cheesse"
        photoName="pizzas/spinaci.jpg"
        //you can pass in anything as a prop even another react component just put the in javascript mode for numbers and anything but not string
        price={10}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj: { name, ingredients, photoName, price, soldOut } }) {
  //   if (soldOut) return null;
  return (
    // adding css class
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt="Pizza Spinaci" />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>

        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //   if (hour >= openHour && hour <= closeHour) {
  //     alert("We're currently open");
  //   } else {
  //     alert("Sorry we are closed");
  //   }
  //   return React.createElement("foorter", null, "We're currently open");
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00, come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      )}
      {/* {new Date().toLocaleTimeString()} We're currently open */}
    </footer>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
