import { StyledInput } from 'Components/Atoms/FormInput/FormInput';
import { StyledTextArea } from 'Components/Atoms/FormTextArea/FormTextArea';
import { StyledForm } from './ContactForm.styles';
import useContactForm, { FormValues } from 'hooks/useContactForm';
import React, { useEffect, useRef } from 'react';
import FormButton from 'Components/Atoms/FormButton/FormButton';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageTextAreaRef = useRef<HTMLTextAreaElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isDirty },
    clearErrors,
  } = useForm<FormValues>({
    defaultValues: {
      from_name: '',
      from_email: '',
      message: '',
    },
  });

  const { submitState, onSubmit, clearErrorMessage } = useContactForm(formRef, nameInputRef, emailInputRef, messageTextAreaRef);

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <StyledForm ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">
        Twoje imię:
        <StyledInput
          {...register('from_name', { required: true })}
          id="name"
          type="text"
          onChange={() => {
            clearErrors('from_name');
            clearErrorMessage();
          }}
          className={errors.from_name ? 'invalid' : ''}
        />
      </label>
      <label htmlFor="email">
        Twój email:
        <StyledInput
          {...register('from_email', { required: true })}
          id="email"
          type="email"
          onChange={() => {
            clearErrors('from_email');
            clearErrorMessage();
          }}
          className={errors.from_email ? 'invalid' : ''}
        />
      </label>
      <label htmlFor="message">
        W czym możemy pomóc?
        <StyledTextArea
          {...register('message', { required: true })}
          id="message"
          onChange={() => {
            clearErrors('message');
            clearErrorMessage();
          }}
          className={errors.message ? 'invalid' : ''}
        />
      </label>
      {submitState.message ? <p className="submit-message">{submitState.message} </p> : null}
      {Object.keys(errors).length > 0 && <p className="error-message">Uzupełnij brakujące pola :)</p>}
      <FormButton type="submit" isLoading={submitState.isLoading} />
    </StyledForm>
  );
};

export default ContactForm;
