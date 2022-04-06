import { React, useState, useEffect } from 'react'
import EditContact from './editcontact';

const ListContacts = (props) => {
    //WE NEED AN ARRAY STATE TO STORE ALL THE CONTACTS
    const [contactDetails, setContactDetails] = useState([]);


    //WE NEED TO MAKE A FUNCTION THAT CALLS OUR CONTACT API FOR INFOS ON ALL CONTACTS
    async function getAllContacts(){
        const response = await fetch("http://localhost:8080/contact");
        const theList = await response.json();

        //We will take the data we got and set it as our list of contact details
        setContactDetails(theList)
    }
    //WE WILL USE useEffect TO CONTINOUSLY CALL OUR getAllContacts()
    useEffect(() => {
        getAllContacts();
    },[]);

    console.log(contactDetails)
  return (
    <>
    <h1>Contacts List</h1>
    <div className="cardlist">
        {contactDetails.map((user) => (
            <div className="card">
                <span>ID: {user.contact_id}</span>
                <p>Name: {user.first_name} {user.last_name}</p>
                <p>Email Address: {user.email}</p>
                <p>Phone Number: {user.phone_number}</p>
                <p>Notes: {user.notes}</p>
                <EditContact contactDetails={user}/>
                <br/>
                <span>____________________________________</span>
                <br/>
                <br/>
            </div>
        ))}

    </div>
    </>
  )
}



export default ListContacts;