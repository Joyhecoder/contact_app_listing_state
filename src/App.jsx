import React, {useState, useEffect} from 'react'
import './App.css';
import AddNewContact from './components/AddNewContact'
import './index.css';
import { v4 as uuidv4 } from 'uuid';
import Contacts from './components/Contacts';


function App() {
  // switch to display add new contact form or search bar
  const [showSearchBar, setShowSearchBar] = useState(true);


  const [contacts, setContacts] = useState([])
  useEffect(()=>{

    setContacts([
      {
        id: uuidv4(),
        name: "Joy",
        address: "123456 Main St",
        city: "Katy",
        state: "Texas",
        zip:"1234",
        number: "456456456",
        email: "joy@me.com"
      },
      {
        id: uuidv4(),
        name: "Kevin",
        address: "123456 Main St",
        city: "Katy",
        state: "Texas",
        zip:"1234",
        number: "456654456",
        email: "kev@me.com"
      },
      {
        id: uuidv4(),
        name: "Alan",
        address: "199887 Main St",
        city: "Katy",
        state: "Texas",
        zip:"1234",
        number: "589765456",
        email: "alan@me.com"
      }
    ])
  }, [])

  //this is to sort the object by alphabet order
  contacts.sort(function(a,b){
    let textA = a.name.toUpperCase();
    let textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
  })

  const handleAddContact = (newContactObj) => {
    setContacts([newContactObj, ...contacts])
    setShowSearchBar(true)
  }
  
  return (
    <>
    <div className="title">
      <h1>Contact List</h1>
    </div>
   

    {showSearchBar ? <div className="container">



{/* searchbar area */}
<div className="initialDisplay">
  <input type="text" placeholder={'search contacts'} />
  <div className="buttons">
    <button className="addNewContactButton" onClick={()=>setShowSearchBar(false)}>Add New Contact</button>
    <button className="showFavButton">Show Favorites</button>
  </div>
</div>

{/* display contact area */}
<div className="displayContacts">

</div>
</div>
: <AddNewContact addContactProp={contact => handleAddContact(contact)} />}


<br />
<br />
<Contacts contactsPropsArray={contacts} />
    
     
     
    </>
  );
}

export default App;
