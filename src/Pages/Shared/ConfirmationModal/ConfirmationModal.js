import React from 'react';

const ConfirmationModal = ({title, description, modalData, successAction, closeAction,}) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="py-4">{description}</p>
                <div className="modal-action">
                <label
                    onClick={() => successAction(modalData)} htmlFor="confirmation-modal" className="btn btn-primary text-white">Remove</label>
                    <button onClick={closeAction} className='btn'
                >No</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;