import { FormButton } from 'Components/Atoms/FormButton/FormButton';
import { StyledInput } from 'Components/Atoms/FormInput/FormInput';
import { StyledTextArea } from 'Components/Atoms/FormTextArea/FormTextArea';
import { StyledForm } from './ContactForm.styles';

const ContactForm = props => (
  <StyledForm>
    <StyledInput name="name" id="name" type="text" placeholder="Twoje imię" />
    <StyledInput name="email" id="email" type="text" placeholder="Twój email" />
    <StyledTextArea name="message" id="message" type="text" placeholder="W czym możemy pomóc?" />
    <FormButton type="submit">Wyślij</FormButton>
  </StyledForm>
);

export default ContactForm;
