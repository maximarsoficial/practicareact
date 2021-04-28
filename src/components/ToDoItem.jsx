import React from 'react';

export const ToDoItem = ({offer, index, onDelete}) => (

    <>
        <li className="list-group-item mb-1 ">
            {offer.name} {offer.bussiness} {offer.place} {offer.country}
            <button type="button" className="btn btn-danger" onClick={() => onDelete(index)}>
                eliminar
            </button>
        </li>

    </>

);
