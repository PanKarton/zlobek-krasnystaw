import emailjs from '@emailjs/browser';
import { getEnv } from 'helpers/getEnv';
import React, { useCallback, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

type State =
  | { isLoading: false; message: '' | 'Dziękujemy za wiadomość :)' | 'Ups, coś poszło nie tak. Spróbujmy jeszcze raz! :)' }
  | { isLoading: true; message: '' };

export type FormValues = {
  from_name: string;
  from_email: string;
  message: string;
};

const useContactForm = (formRef: React.RefObject<HTMLFormElement>) => {
  const [submitState, setSubmitState] = useState<State>({ isLoading: false, message: '' });

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

      setSubmitState(() => ({ isLoading: false, message: 'Dziękujemy za wiadomość :)' }));
    } catch (e) {
      setSubmitState(() => ({ isLoading: false, message: 'Ups, coś poszło nie tak. Spróbujmy jeszcze raz! :)' }));
      console.log(e);
    }
  }, [formRef]);

  return { submitState, onSubmit, clearErrorMessage };
};

export default useContactForm;
