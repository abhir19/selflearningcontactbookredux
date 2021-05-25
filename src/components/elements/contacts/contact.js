import React from 'react'
import Avatar from 'react-avatar'
import {Link} from 'react-router-dom';
import {deleteContact}from "../../../store";
import{useDispatch} from 'react-redux';

const Contact = ({contact}) => {
    const{name,phone,email,id}=contact;
    const dispatch = useDispatch()
    return (
        <tr>
            <td> <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-control-label"></label>
            </div></td>
            <td >
                <Avatar className="mr-8" name={name} size="45" round={true}/>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
                <Link to={`/contacts/edit/${id}`}>
                    <span className="material-icons"> edit</span>
                </Link>
              
                    <span className="material-icons" onClick={()=>{dispatch(deleteContact(id))}}>remove_circle</span>
                
            </td>
        </tr>
    )
}

export default Contact
