import React from 'react'

const Contacts = ({contactsPropsArray}) => {
  return (
    <>
    <div className="container">
        <ul className="contact_list">
            {contactsPropsArray.map(contactObj =>{
                return <li key={contactObj.id}>
                    <h3>{contactObj.name}</h3>
                    <p>{contactObj.city}, {contactObj.state}</p>
                </li>
            })}
        </ul>
    </div>
    </>
  )
}

export default Contacts