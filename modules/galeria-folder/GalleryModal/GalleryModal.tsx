import Modal from 'react-modal';
import Image from 'next/image';
import { buildURL } from 'helpers/buildURL';
import { customStyles, StyledArrowButton, StyledWrapper } from './GalleryModal.styles';
import { CloseButton } from 'Components/Atoms/CloseButton/CloseButton';
import { useGallery } from 'providers/GalleryProvider';
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md';

export const GalleryModal = () => {
  const { isModalOpen, isLeftArrowVisible, isRightArrowVisible, currentImage, handleCloseModal, handleNextImage, handlePreviousImage } = useGallery();

  if (!currentImage) return null;

  const { alternativeText, url } = currentImage?.attributes;

  return (
    <Modal isOpen={isModalOpen} shouldCloseOnOverlayClick={true} style={customStyles} onRequestClose={handleCloseModal} preventScroll={false}>
      <StyledWrapper>
        <div className="main-img-wrapper">
          <Image src={buildURL(url)} alt={alternativeText || 'Gallery image'} fill style={{ objectFit: 'contain' }} />
        </div>
        <div className="close-button-wrapper">
          <CloseButton onClick={handleCloseModal} />
        </div>
        {isRightArrowVisible && (
          <StyledArrowButton className="right" onClick={handleNextImage}>
            <MdArrowForwardIos />
          </StyledArrowButton>
        )}
        {isLeftArrowVisible && (
          <StyledArrowButton className="left" onClick={handlePreviousImage}>
            <MdArrowBackIosNew />
          </StyledArrowButton>
        )}
      </StyledWrapper>
    </Modal>
  );
};

Modal.setAppElement('#__next');
