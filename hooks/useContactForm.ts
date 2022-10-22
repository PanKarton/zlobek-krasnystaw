import emailjs from '@emailjs/browser';
import { getEnv } from 'helpers/getEnv';
import React, { useCallback, useEffect, useState } from 'react';
import { FieldErrorsImpl, SubmitHandler } from 'react-hook-form';

type Props = {
  formRef: React.RefObject<HTMLFormElement>;
  nameInputRef: React.RefObject<HTMLInputElement>;
  emailInputRef: React.RefObject<HTMLInputElement>;
  messageTextAreaRef: React.RefObject<HTMLTextAreaElement>;
};

type State =
  | { isLoading: false; message: '' | 'Dziękujemy za wiadomość :)' | 'Ups, coś poszło nie tak. Spróbujmy jeszcze raz! :)' }
  | { isLoading: true; message: '' };

export type FormValues = {
  from_name: string;
  from_email: string;
  message: string;
};

const useContactForm = (
  formRef: Props['formRef'],
  nameInputRef: Props['nameInputRef'],
  emailInputRef: Props['emailInputRef'],
  messageTextAreaRef: Props['messageTextAreaRef'],
) => {
  const [submitState, setSubmitState] = useState<State>({ isLoading: false, message: '' });

  const clearInputs = useCallback(() => {
    if (nameInputRef.current === null || emailInputRef.current === null || messageTextAreaRef.current === null) return;

    nameInputRef.current.value = '';
    emailInputRef.current.value = '';
    messageTextAreaRef.current.value = '';
  }, [nameInputRef, emailInputRef, messageTextAreaRef]);

  const clearErrorMessage = useCallback(() => {
    setSubmitState(() => ({ isLoading: false, message: '' }));
  }, []);

  const onSubmit: SubmitHandler<FormValues> = useCallback(async () => {
    try {
      if (formRef.current === null) return;

      const serviceId = getEnv(process.env.NEXT_PUBLIC_YOUR_SERVICE_ID);
      const templateId = getEnv(process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID);
      const publicKey = getEnv(process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY);

      setSubmitState({ isLoading: true, message: '' });

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      clearInputs();
      setSubmitState(() => ({ isLoading: false, message: 'Dziękujemy za wiadomość :)' }));
    } catch (e) {
      setSubmitState(() => ({ isLoading: false, message: 'Ups, coś poszło nie tak. Spróbujmy jeszcze raz! :)' }));
      console.log(e);
    }
  }, [formRef, clearInputs]);

  return { submitState, onSubmit, clearErrorMessage };
};

export default useContactForm;
