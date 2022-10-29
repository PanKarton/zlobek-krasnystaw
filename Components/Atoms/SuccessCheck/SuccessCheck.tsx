import { StyledWrapper } from './SuccessCheck.styles';

const SuccessCheck = () => (
  <StyledWrapper>
    <div className="check-icon">
      <span className="icon-line line-tip"></span>
      <span className="icon-line line-long"></span>
      <div className="icon-circle"></div>
      <div className="icon-fix"></div>
    </div>
  </StyledWrapper>
);

export default SuccessCheck;
