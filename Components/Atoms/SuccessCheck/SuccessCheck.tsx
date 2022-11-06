import { StyledWrapper } from './SuccessCheck.styles';

type Props = {
  color?: string;
};

export const SuccessCheck = ({ color }: Props) => (
  <StyledWrapper color={color}>
    <div className="check-icon">
      <span className="icon-line line-tip"></span>
      <span className="icon-line line-long"></span>
      <div className="icon-circle"></div>
      <div className="icon-fix"></div>
    </div>
  </StyledWrapper>
);
