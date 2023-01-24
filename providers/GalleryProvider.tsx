import { createContext, ReactNode, useContext, useState, useCallback, useEffect } from 'react';
import { GalleryImage, GalleryImages } from 'types/galleryResponse';

type Props = {
  children: ReactNode;
  imagesData: GalleryImages;
};

type Context = {
  isModalOpen: boolean;
  isRightArrowVisible: boolean;
  isLeftArrowVisible: boolean;
  currentImage: GalleryImage | null;
  currentImageIndex: number;
  imagesNumber: number;
  handleOpenModal: (_index: number) => void;
  handleCloseModal: () => void;
  handleNextImage: () => void;
  handlePreviousImage: () => void;
};

const GalleryContext = createContext<Context | null>(null);

export const GalleryProvider = ({ children, imagesData }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleOpenModal = useCallback((index: number) => {
    setCurrentImageIndex(() => index);
    setIsModalOpen(() => true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(() => false);
  }, []);

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
  }, []);

  const handlePreviousImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => --prevIndex);
  }, []);

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      // Prevent when it is first image displayed
      if ((event.key === 'ArrowLeft' || event.key === 'a') && currentImageIndex !== 0) handlePreviousImage();

      // Prevent when it is last image displayed
      if ((event.key === 'ArrowRight' || event.key === 'd') && currentImageIndex !== imagesData.data.length - 1) handleNextImage();
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => window.removeEventListener('keyup', handleKeyUp);
  }, [handlePreviousImage, handleNextImage, currentImageIndex, imagesData.data.length]);

  const context = {
    isModalOpen,
    isRightArrowVisible: currentImageIndex !== imagesData.data.length - 1,
    isLeftArrowVisible: currentImageIndex !== 0,
    currentImageIndex,
    imagesNumber: imagesData.data.length,
    currentImage: imagesData.data[currentImageIndex],
    handleOpenModal,
    handleCloseModal,
    handleNextImage,
    handlePreviousImage,
  };

  return <GalleryContext.Provider value={context}>{children}</GalleryContext.Provider>;
};

export const useGallery = () => {
  const galleryData = useContext(GalleryContext);

  if (galleryData === null) throw Error('useGallery is supposed to be used inside GalleryContextProvider');

  return galleryData;
};
