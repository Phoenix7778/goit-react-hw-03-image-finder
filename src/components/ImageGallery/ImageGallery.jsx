import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImgList } from './ImageGallery.styled';

export const ImageGallery = ({ images, onImgClick }) => {
  return (
    <ImgList>
      {images.map(item => {
        return (
          <ImageGalleryItem
            key={item.id}
            alt={item.tags}
            src={item.webformatURL}
            largeImageURL={item.largeImageURL}
            showLargeImg={onImgClick}
          />
        );
      })}
    </ImgList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onImgClick: PropTypes.func.isRequired,
};
