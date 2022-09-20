import React, {useState} from 'react'
import EditContact from './EditContact'

const ShowContactDetails = ({contactObj, onDelete, updateContactProp}) => {

    const [showDetailedContact, setShowDetailedContact] = useState(false)
    const [isShown, setIsShown] = useState(false)
    const [showEdit, setShowEdit] = useState(false)


    const handleDisplayContact = () => { 
        if(showDetailedContact){
            setShowDetailedContact(false)
        }else{
            setShowDetailedContact(true)
        }
    }
    const onMouseEnter = () => { 
        handleDisplayContact()
        setIsShown(true)
     }

     const onMouseLeave = () => {
        handleDisplayContact()
        setIsShown(false)
     }

    const showEditForm = () => { 
        setShowEdit(true)
     }

     const hideEditForm = () => { 
        setShowEdit(false)
      }



    return <div onMouseEnter={()=> onMouseEnter()} onMouseLeave={()=>onMouseLeave()}>
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
            <button className="threeButtons" onClick={()=> showEditForm()}>Edit</button>
            <button className="threeButtons" onClick={()=> onDelete(contactObj.id)}>Delete</button>
        </div>
        : <div className="buttonGroup"></div>}
    {showEdit ? <EditContact existedContact={contactObj} updateContactProp={updateContactProp} hideEditForm={()=>hideEditForm()} /> : <div></div>}
  
        </div>
         
}

export default ShowContactDetails