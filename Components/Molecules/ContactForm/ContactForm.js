import { FormButton } from 'Components/Atoms/FormButton/FormButton';
import { StyledInput } from 'Components/Atoms/FormInput/FormInput';
import { StyledTextArea } from 'Components/Atoms/FormTextArea/FormTextArea';
import { StyledForm } from './ContactForm.styles';
import { useForm } from 'react-hook-form';

const ContactForm = props => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput {...register('user_name')} id="name" type="text" placeholder="Twoje imię" />
      <StyledInput {...register('user_email')} id="email" type="email" placeholder="Twój email" />
      <StyledTextArea
        {...register('message')}
        id="message"
        type="text"
        placeholder="W czym możemy pomóc?"
      />
      <FormButton type="submit">Wyślij</FormButton>
    </StyledForm>
  );
};

export default ContactForm;
