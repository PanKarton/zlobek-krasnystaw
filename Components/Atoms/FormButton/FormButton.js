import PropTypes from 'prop-types';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { StyledButton } from './FormButton.styles';

const FormButton = ({ type, isLoading }) => {
  return <StyledButton type={type}>{isLoading ? <LoadingSpinner /> : 'Wyślij'}</StyledButton>;
};

FormButton.propTypes = {
  type: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default FormButton;
