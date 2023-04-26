import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImageItem, Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    return this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    return this.setState({ isModalOpen: false });
  };

  render() {
    const { src, alt, largeImageURL } = this.props;
    return (
      <ImageItem>
        <Image onClick={this.openModal} src={src} alt={alt} />
        {this.state.isModalOpen && (
          <Modal
            url={largeImageURL}
            user={alt}
            closeModalWindow={this.closeModal}
          />
        )}
      </ImageItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  isModalOpen: PropTypes.func.isRequired,
};
