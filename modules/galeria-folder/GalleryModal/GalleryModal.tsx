import Modal from 'react-modal';
import Image from 'next/image';
import { buildURL } from 'helpers/buildURL';
import { customStyles, StyledArrowButton, StyledWrapper } from './GalleryModal.styles';
import { CloseButton } from 'Components/Atoms/CloseButton/CloseButton';
import { useGallery } from 'providers/GalleryProvider';
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md';

export const GalleryModal = () => {
  const {
    isModalOpen,
    isLeftArrowVisible,
    isRightArrowVisible,
    currentImage,
    currentImageIndex,
    imagesNumber,
    handleCloseModal,
    handleNextImage,
    handlePreviousImage,
  } = useGallery();

  if (!currentImage) return null;

  const { alternativeText, url } = currentImage?.attributes;

  return (
    <Modal isOpen={isModalOpen} shouldCloseOnOverlayClick={true} style={customStyles} onRequestClose={handleCloseModal} preventScroll={false}>
      <StyledWrapper>
        <div className="top-bar-wrapper">
          <div className="counter-wrapper">
            <span>{`${currentImageIndex + 1} / ${imagesNumber}`}</span>
          </div>
          <div className="close-button-wrapper">
            <CloseButton onClick={handleCloseModal} />
          </div>
        </div>
        <div className="main-img-wrapper">
          <Image src={buildURL(url)} alt={alternativeText || 'Gallery image'} fill style={{ objectFit: 'contain' }} />
        </div>
        <StyledArrowButton className="right" onClick={handleNextImage} disabled={!isRightArrowVisible} isVisible={isRightArrowVisible}>
          <MdArrowForwardIos />
        </StyledArrowButton>
        <StyledArrowButton className="left" onClick={handlePreviousImage} disabled={!isLeftArrowVisible} isVisible={isLeftArrowVisible}>
          <MdArrowBackIosNew />
        </StyledArrowButton>
      </StyledWrapper>
    </Modal>
  );
};

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#__next');
