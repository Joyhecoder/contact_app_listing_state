import React, {useState} from 'react'
import ShowContactDetails from './ShowContactDetails';

const Contacts = ({contactsPropsArray, deleteContact, updateContactProp}) => {
   


  return (
    <>
    <div className="container">
        <ul className="contact_list">
            {contactsPropsArray.map(contactObj =>{
            return   <ShowContactDetails contactObj={contactObj} onDelete={deleteContact} updateContactProp={updateContactProp}  />
            })}
        </ul>
    </div>
    </>
  )
}

export default Contacts