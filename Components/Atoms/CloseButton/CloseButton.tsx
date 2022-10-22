import React from 'react';
import { IoMdClose } from 'react-icons/io';

type Props = {
  onClick: () => void;
};

const CloseButton = ({ onClick }: Props) => <IoMdClose onClick={onClick} />;

export default CloseButton;
