import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Modal from 'react-modal';

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

const CustomModal = ({ modal }) =>
  (<Modal isOpen={modal.isOpen} style={customStyles} contentLabel={modal.title}>
    {modal.children}
  </Modal>);

CustomModal.propTypes = {
  modal: PropTypes.object
};

const mapStateToProps = store => ({
  modal: store.modal
});

export default connect(mapStateToProps)(CustomModal);
