import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeService, editService, filterServiceField } from '../actions/actionCreators';
import '../App.css';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
  }
  const handleEdit = (nameNote, price, idNote) => {
    dispatch(editService(nameNote, price, idNote));
  }
	const handleChange = evt => {
		const { value } = evt.target;
		dispatch(filterServiceField(value));
	}
  return (
    <>
      <ul>
        {items.map(o => (
          <li key={o.id}>
            {o.name} {o.price}
            <button onClick={() => handleEdit(o.name, o.price, o.id)}>&#9998;</button>
            <button onClick={() => handleRemove(o.id)}>✕</button>
          </li>
        ))}
      </ul>
      <input className='seach' onChange={handleChange} placeholder = 'Seach'/>
    </>
  )
}

export default ServiceList
