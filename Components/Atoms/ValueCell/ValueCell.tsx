import React from 'react';
import { StyledWrapper } from './ValueCell.styles';

type Props = {
  children: React.ReactNode;
};

const ValueCell = ({ children }: Props) => <StyledWrapper>{children}</StyledWrapper>;

export default ValueCell;
