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
      <label>
        Twoje imię:
        <StyledInput aria-invalid={true} {...register('from_name', { required: true })} id="name" type="text" ref={nameInputRef} />
      </label>
      <label>
        Twój email:
        <StyledInput {...register('from_email')} id="email" type="email" ref={emailInputRef} />
      </label>
      <label>
        W czym możemy pomóc?
        <StyledTextArea {...register('message')} id="message" ref={messageTextAreaRef} />
      </label>
      {submitState.message && <p className="submit-message">{submitState.message}</p>}
      <FormButton type="submit" isLoading={submitState.isLoading} />
    </StyledForm>
  );
};

export default ContactForm;
