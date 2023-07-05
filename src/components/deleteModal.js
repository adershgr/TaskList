import React from 'react'
import './deleteModal.css'

function DeleteModal({ handleDelete, handleClose }) {
    return (
        <div>
            <div className="modal">
                <div className="modal-content">
                    <div className="delete-modal">
                        <p>Are you sure you want to delete this task?</p>
                        <div className="delete-modal__actions">
                            <button className="button" onClick={handleDelete}>Delete</button>
                            <button className="outline button" onClick={handleClose}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal