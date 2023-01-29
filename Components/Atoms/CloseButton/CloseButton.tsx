import { IoMdClose } from 'react-icons/io';

type Props = {
  onClick: () => void;
};

export const CloseButton = ({ onClick }: Props) => <IoMdClose onClick={onClick} />;
