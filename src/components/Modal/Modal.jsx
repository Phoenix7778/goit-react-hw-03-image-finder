import PropTypes from 'prop-types';
import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscPress);
  }

  onEscPress = event => {
    if (event.code === 'Escape') {
      this.props.closeModalWindow();
    }
  };

  handleClose = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModalWindow();
    }
  };

  render() {
    const { url, alt } = this.props;

    return (
      <div
        onClick={this.handleClose}
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: '1200',
        }}
      >
        <div
          style={{
            maxWidth: 'calc(100vw - 48px)',
            maxHeight: 'calc(100vh - 24px)',
          }}
        >
          <img src={url} alt={alt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModalWindow: PropTypes.func.isRequired,
};
