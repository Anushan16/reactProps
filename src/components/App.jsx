// import React module and necescary components
import React from "react";
import Header from "./Header.jsx"
import Card from "./Card.jsx"
import contacts from "../contacts"


function App(){
  return (
    <div>
    {/* // return map method on the contacts array, that loops through and maps each individual object(and its properties) to the card component */}
      {contacts.map(function(contact){
        return(
          
          // key must be returned on the outer most element 
          <div key = {contact.id}>
          <Header listName = "My Contacts" />
            <Card 
              identifier = {contact.id}
              name = {contact.name} 
              img = {contact.imgURL}
              phoneNumber = {contact.phone}
              email= {contact.email}

            
             />
          </div>
        )
      })}
    </div>
  )
}




// export this module
export default App;
