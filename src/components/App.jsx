import React from "react";
import Header from "./Header.jsx"
import Card from "./Card.jsx"
import contacts from "../contacts"

function App() {
  console.log(contacts[0])
  return (
    <div>
    <Header />
     <Card name = {contacts[0].name} 
     img = {contacts[0].imgURL}
       phoneNumber = {contacts[0].phone}
       email= {contacts[0].email}
     />
     <Card name = {contacts[1].name} 
     img = {contacts[1].imgURL}
       phoneNumber = {contacts[1].phone}
       email= {contacts[1].email}
     />
     <Card name = {contacts[2].name} 
     img = {contacts[2].imgURL}
       phoneNumber = {contacts[2].phone}
       email= {contacts[2].email}
     />
    </div> 
    
  );
}

export default App;
