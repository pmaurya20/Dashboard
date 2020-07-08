import React from 'react';
import './fullModal.css';
import SecondaryTabs from '../../tabs/secondaryTabs/secondaryTabs';
import Container from 'react-bootstrap/Container';

// Modal
var Modal = props => {
    let modalData = props.ModalData;
    let idName = `Modal${modalData.id}`;
    return (
        <div className="modal" role="dialog" id={idName}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    {/* Modal Header */}
                    <div className="modal-header d-flex align-items-center">
                        <div className="mr-2 mr-md-5">
                            <label className="modal-label">Campaign Name:</label>
                            <span className="modal-label-desc">{modalData.brand}</span>
                        </div>
                        <div>
                            <label className="modal-label">Campaign Duration:</label>
                            <span className="modal-label-desc">{modalData.date}</span>
                        </div>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.closeEvent}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    {/* Modal Body */}
                    <div className="modal-body">
                        <Container>
                            <SecondaryTabs />
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;