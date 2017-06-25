import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Modal from 'react-modal';
import { closeModal } from './modalActions';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};


const CustomModal = ({ modal, dispatch }) =>
  (<Modal
    isOpen={modal.isOpen}
    style={customStyles}
    contentLabel={modal.title}
    onRequestClose={() => dispatch(closeModal())}
  >
    {modal.children}
  </Modal>);

CustomModal.propTypes = {
  modal: PropTypes.object,
  dispatch: PropTypes.func,
};

const mapStateToProps = store => ({
  modal: store.modal,
  dispatch: store.dispatch,
});

export default connect(mapStateToProps)(CustomModal);
