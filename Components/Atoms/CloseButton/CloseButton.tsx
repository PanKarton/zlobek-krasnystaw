import React from 'react';
import { IoMdClose } from 'react-icons/io';

type Props = {
  onClick: () => void;
};

const CloseButton: React.FC<Props> = ({ onClick }) => <IoMdClose onClick={onClick} />;

export default CloseButton;
