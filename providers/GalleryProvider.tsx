import { createContext, ReactNode, useContext, useState, useCallback, useEffect } from 'react';
import { GalleryImage, GalleryImages } from 'types/galleryResponse';

type Props = {
  children: ReactNode;
  imagesData: GalleryImages;
};

type Context = {
  isModalOpen: boolean;
  isLeftArrowVisible: boolean;
  isRightArrowVisible: boolean;
  currentImage: GalleryImage | null;
  handleOpenModal: (index: number) => void;
  handleCloseModal: () => void;
  handleNextImage: () => void;
  handlePreviousImage: () => void;
};

const GalleryContext = createContext<Context | null>(null);

export const GalleryProvider = ({ children, imagesData }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [currentImage, setCurrentImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  //   console.log('currentImageIndex', currentImageIndex);
  //   console.log('currentImage', currentImage?.attributes.url);

  const handleOpenModal = useCallback(
    (index: number) => {
      setCurrentImageIndex(() => index);
      setCurrentImage(() => imagesData.data[index]);
      setIsModalOpen(() => true);
    },
    [imagesData.data],
  );

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(() => false);
  }, []);

  const handleNextImage = useCallback(() => {
    setCurrentImage(() => imagesData.data[currentImageIndex + 1]);
    setCurrentImageIndex((prevIndex) => ++prevIndex);
  }, [currentImageIndex, imagesData.data]);

  const handlePreviousImage = useCallback(() => {
    setCurrentImage(() => imagesData.data[currentImageIndex - 1]);
    setCurrentImageIndex((prevIndex) => --prevIndex);
  }, [currentImageIndex, imagesData.data]);

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' || event.key === 'a' || currentImageIndex !== 0) handlePreviousImage();

      if (event.key === 'ArrowRight' || event.key === 'd' || currentImageIndex !== imagesData.data.length - 1) handleNextImage();
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => window.removeEventListener('keyup', handleKeyUp);
  }, [handlePreviousImage, handleNextImage, currentImageIndex, imagesData.data.length]);

  const context = {
    isModalOpen,
    isLeftArrowVisible: currentImageIndex !== 0,
    isRightArrowVisible: currentImageIndex !== imagesData.data.length - 1,
    currentImage,
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
