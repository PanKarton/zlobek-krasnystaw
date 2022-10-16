import React from 'react';
import { StyledWrapper } from './ValueCell.styles';

type Props = {
  children: React.ReactNode;
};

const ValueCell: React.FC<Props> = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

export default ValueCell;
