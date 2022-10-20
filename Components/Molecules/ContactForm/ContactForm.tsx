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
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<FormValues>();

  const { submitState, onSubmit } = useContactForm(formRef, nameInputRef, emailInputRef, messageTextAreaRef, errors);

  console.log(errors);

  //   TRZEBA OGARNAC COS Z ANTYSPAMEM

  const x = (data: unknown) => {
    console.log(`Submit` + data);
  };

  return (
    // <StyledForm ref={formRef} onSubmit={handleSubmit(onSubmit)}>
    <StyledForm ref={formRef} onSubmit={handleSubmit(x)}>
      <label>
        Twoje imię:
        <StyledInput
          {...register('from_name', { required: true })}
          className={errors.from_name ? 'invalid' : ''}
          id="name"
          type="text"
          ref={nameInputRef}
          onChange={() => clearErrors()}
        />
      </label>
      <label>
        Twój email:
        <StyledInput
          {...(register('from_email'), { required: true })}
          className={errors.from_email ? 'invalid' : ''}
          id="email"
          type="email"
          ref={emailInputRef}
          onChange={() => clearErrors()}
        />
      </label>
      <label>
        W czym możemy pomóc?
        <StyledTextArea
          {...(register('message'), { required: true })}
          className={errors.message ? 'invalid' : ''}
          id="message"
          ref={messageTextAreaRef}
          onChange={() => clearErrors()}
        />
      </label>
      {submitState.message && <p className="submit-message">{submitState.message}</p>}
      <FormButton type="submit" isLoading={submitState.isLoading} />
    </StyledForm>
  );
};

export default ContactForm;
