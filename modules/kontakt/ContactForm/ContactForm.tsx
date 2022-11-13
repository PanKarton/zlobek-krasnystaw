import { StyledInput } from 'modules/kontakt/FormInput/FormInput';
import { StyledTextArea } from 'modules/kontakt/FormTextArea/FormTextArea';
import { StyledForm } from './ContactForm.styles';
import { useContactForm, FormValues } from 'modules/kontakt/ContactForm/useContactForm';
import React, { useEffect, useRef } from 'react';
import { FormButton } from 'modules/kontakt/FormButton/FormButton';
import { useForm } from 'react-hook-form';

type Props = {
  testOnSubmit?: () => any;
};

export const ContactForm = ({ testOnSubmit }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { submitState, errors, isSubmitSuccessful, onSubmit, handleClearErorrs, register, handleSubmit, clearErrors } = useContactForm(formRef);

  return (
    <StyledForm ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <div className="input-wrapper">
        <label htmlFor="name">Twoje imię:</label>
        <StyledInput
          {...register('from_name', { required: 'Imię jest wymagane' })}
          id="name"
          type="text"
          onChange={() => handleClearErorrs('from_name')}
          className={errors.from_name ? 'invalid' : ''}
          aria-invalid={errors.from_name ? 'true' : 'false'}
        />
        {errors.from_name && <p className="error"> {errors.from_name?.message}</p>}
      </div>

      <div className="input-wrapper">
        <label htmlFor="email">Twój email:</label>
        <StyledInput
          {...register('from_email', { required: 'Email jest wymagany' })}
          id="email"
          type="email"
          onChange={() => handleClearErorrs('from_email')}
          className={errors.from_email ? 'invalid' : ''}
          aria-invalid={errors.from_email ? 'true' : 'false'}
        />
        {errors.from_email && <p className="error"> {errors.from_email?.message}</p>}
      </div>

      <div className="input-wrapper">
        <label htmlFor="message">W czym możemy pomóc?</label>
        <StyledTextArea
          {...register('message', { required: 'Wiadomość jest wymagana' })}
          id="message"
          onChange={() => handleClearErorrs('message')}
          className={errors.message ? 'invalid' : ''}
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message && <p className="error"> {errors.message?.message}</p>}
      </div>

      {submitState.message && Object.keys(errors).length === 0 ? <p className="submit-message">{submitState.message} </p> : null}

      {Object.keys(errors).length > 0 && <p className="error-message">Uzupełnij brakujące pola :)</p>}
      <FormButton type="submit" isLoading={submitState.isLoading} />
    </StyledForm>
  );
};
