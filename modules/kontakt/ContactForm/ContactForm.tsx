import { StyledInput } from 'modules/kontakt/FormInput/FormInput';
import { StyledTextArea } from 'modules/kontakt/FormTextArea/FormTextArea';
import { StyledForm } from './ContactForm.styles';
import { useContactForm } from 'modules/kontakt/ContactForm/useContactForm';
import React, { useRef } from 'react';
import { FormButton } from 'modules/kontakt/FormButton/FormButton';
import { ErrorMessage } from '@hookform/error-message';

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { isSubmitting, errors, submitMessage, onSubmit, register, handleSubmit } = useContactForm(formRef);

  return (
    <StyledForm ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <div className="input-wrapper">
        <label htmlFor="name">Twoje imię:</label>
        <StyledInput
          {...register('from_name', {
            required: 'Imię jest wymagane.',
            maxLength: {
              value: 50,
              message: 'Przekroczono ilość znaków!',
            },
          })}
          id="name"
          type="text"
          className={errors.from_name ? 'invalid' : ''}
          aria-invalid={errors.from_name ? 'true' : 'false'}
        />
        <p className="error-wrapper">
          <ErrorMessage errors={errors} name="from_name" />
        </p>
      </div>

      <div className="input-wrapper">
        <label htmlFor="email">Twój email:</label>
        <StyledInput
          {...register('from_email', {
            required: 'Email jest wymagany.',
            maxLength: {
              value: 256,
              message: 'Przekroczono ilość znaków!',
            },
          })}
          id="email"
          type="email"
          className={errors.from_email ? 'invalid' : ''}
          aria-invalid={errors.from_email ? 'true' : 'false'}
        />
        <p className="error-wrapper">
          <ErrorMessage errors={errors} name="from_email" />
        </p>
      </div>

      <div className="input-wrapper">
        <label htmlFor="message">W czym możemy pomóc?</label>
        <StyledTextArea
          {...register('message', {
            required: 'Wiadomość jest wymagana.',
            maxLength: {
              value: 900,
              message: 'Przekroczono ilość znaków!',
            },
          })}
          id="message"
          className={errors.message ? 'invalid' : ''}
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        <p className="error-wrapper">
          <ErrorMessage errors={errors} name="message" />
        </p>
      </div>
      <p className="submit-message">{submitMessage} </p>
      <FormButton type="submit" isLoading={isSubmitting} isDisabled={isSubmitting} />
    </StyledForm>
  );
};
