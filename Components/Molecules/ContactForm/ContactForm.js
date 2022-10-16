import { StyledInput } from 'Components/Atoms/FormInput/FormInput';
import { StyledTextArea } from 'Components/Atoms/FormTextArea/FormTextArea';
import { StyledForm } from './ContactForm.styles';
import useContactForm from 'hooks/useContactForm';
import { useRef } from 'react';
import FormButton from 'Components/Atoms/FormButton/FormButton';

const ContactForm = () => {
  const formRef = useRef();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageTextAreaRef = useRef();
  const { isLoading, submitMessage, register, handleSubmit, onSubmit } = useContactForm(
    formRef,
    nameInputRef,
    emailInputRef,
    messageTextAreaRef
  );

  //   TRZEBA DODAC JAKIS LOADING, POTWIERDZENIE, ERROR HANDLING I OGARNAC COS Z ANTYSPAMEM

  return (
    <StyledForm ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        {...register('from_name')}
        id="name"
        type="text"
        placeholder="Twoje imię"
        ref={nameInputRef}
      />
      <StyledInput
        {...register('from_email')}
        id="email"
        type="email"
        placeholder="Twój email"
        ref={emailInputRef}
      />
      <StyledTextArea
        {...register('message')}
        id="message"
        type="text"
        placeholder="W czym możemy pomóc?"
        ref={messageTextAreaRef}
      />
      {submitMessage && <p className="submit-message">{submitMessage}</p>}
      <FormButton type="submit" isLoading={isLoading} />
    </StyledForm>
  );
};

export default ContactForm;
