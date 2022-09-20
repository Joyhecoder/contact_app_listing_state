import React, {useState} from 'react'
import ShowContactDetails from './ShowContactDetails';

const Contacts = ({contactsPropsArray, deleteContact}) => {
    


  return (
    <>
    <div className="container">
        <ul className="contact_list">
            {contactsPropsArray.map(contactObj =>{
            return   <ShowContactDetails contactObj={contactObj} onDelete={deleteContact} />
            })}
        </ul>
    </div>
    </>
  )
}

export default Contacts