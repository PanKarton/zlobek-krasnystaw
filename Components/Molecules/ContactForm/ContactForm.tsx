import { StyledInput } from 'Components/Atoms/FormInput/FormInput';
import { StyledTextArea } from 'Components/Atoms/FormTextArea/FormTextArea';
import { StyledForm } from './ContactForm.styles';
import useContactForm, { FormValues } from 'hooks/useContactForm';
import React, { useRef } from 'react';
import FormButton from 'Components/Atoms/FormButton/FormButton';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageTextAreaRef = useRef<HTMLTextAreaElement>(null);
  const { register, handleSubmit } = useForm<FormValues>();

  const { submitState, onSubmit } = useContactForm(formRef, nameInputRef, emailInputRef, messageTextAreaRef);

  //   TRZEBA OGARNAC COS Z ANTYSPAMEM

  return (
    <StyledForm ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <StyledInput {...register('from_name')} id="name" type="text" placeholder="Twoje imię" ref={nameInputRef} />
      <StyledInput {...register('from_email')} id="email" type="email" placeholder="Twój email" ref={emailInputRef} />
      <StyledTextArea {...register('message')} id="message" placeholder="W czym możemy pomóc?" ref={messageTextAreaRef} />
      {submitState.message && <p className="submit-message">{submitState.message}</p>}
      <FormButton type="submit" isLoading={submitState.isLoading} />
    </StyledForm>
  );
};

export default ContactForm;
