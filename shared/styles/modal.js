const modalBaseStyle = {
  overlay: {
    zIndex: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    zIndex: 6,
    backgroundColor: '#ffffff',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

const modalDesktopStyle = {
  content: {
    maxWidth: '750px',
    maxHeight: '600px',
  },
};

const modalMobileStyle = {
  content: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 0,
    padding: '60px 0 0 0',
  },
};

export {
  modalBaseStyle,
  modalDesktopStyle,
  modalMobileStyle,
};
