import Modal from 'react-modal';
import { useState } from 'react';

export const GalleryModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return <Modal isOpen={isModalOpen} shouldCloseOnOverlayClick></Modal>;
};
