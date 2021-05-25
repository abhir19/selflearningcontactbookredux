import React from 'react'
import { useSelector } from 'react-redux';
import Contact from './contact';

const Contacts = () => {
    const contacts = useSelector(state => state.contacts)
    console.log(contacts);
    return (
        <div style={{ marginTop: "40px" }}>
            <table className="table table-dark table-striped">

                <thead>
                    <tr>
                        <th >
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <label className="custom-control-label"></label>
                        </div>
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map(contact=><Contact contact={contact} key={contact.id}/>)
                    }
                   
                </tbody>
            </table>

        </div>
    )
}

export default Contacts
