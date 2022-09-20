import React, {useState} from 'react'

const ShowContactDetails = ({contactObj, onDelete}) => {

    const [showDetailedContact, setShowDetailedContact] = useState(false)
    const [isShown, setIsShown] = useState(false)


    const handleDisplayContact = () => { 
        if(showDetailedContact){
            setShowDetailedContact(false)
        }else{
            setShowDetailedContact(true)
        }
    }



    return <div onClick={()=>handleDisplayContact()} onMouseEnter={()=> setIsShown(true)} onMouseLeave={()=>setIsShown(false)}>
    {!showDetailedContact ? 
        <li key={contactObj.id}>
            <h3>{contactObj.name}</h3>
            <p>{contactObj.city}, {contactObj.state}</p>
        </li>
        :
         <li key={contactObj.id}>
            <h3>{contactObj.name}</h3>
            <p>{contactObj.address}</p>
            <p>{contactObj.city}, {contactObj.state} {contactObj.zip}</p>
            <p>{contactObj.number}</p>
            <p>{contactObj.email}</p>
         </li>
    }

    {isShown ? <div className="buttonGroup">
            <button className="threeButtons">Favorite</button>
            <button className="threeButtons">Edit</button>
            <button className="threeButtons" onClick={()=> onDelete(contactObj.id)}>Delete</button>
        </div>
        : <div className="buttonGroup"></div>}
        
       
      
        

        </div>
}

export default ShowContactDetails