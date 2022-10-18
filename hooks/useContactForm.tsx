import emailjs from '@emailjs/browser';
import { getEnv } from 'helpers/getEnv';
import React, { useCallback, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

type Props = {
  formRef: React.RefObject<HTMLFormElement>;
  nameInputRef: React.RefObject<HTMLInputElement>;
  emailInputRef: React.RefObject<HTMLInputElement>;
  messageTextAreaRef: React.RefObject<HTMLTextAreaElement>;
};

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
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const clearInputs = useCallback(() => {
    if (nameInputRef.current === null || emailInputRef.current === null || messageTextAreaRef.current === null) return;

    nameInputRef.current.value = '';
    emailInputRef.current.value = '';
    messageTextAreaRef.current.value = '';
  }, [nameInputRef, emailInputRef, messageTextAreaRef]);

  const onSubmit: SubmitHandler<FormValues> = useCallback(async () => {
    try {
      if (formRef.current === null) return;

      const serviceId = getEnv(process.env.NEXT_PUBLIC_YOUR_SERVICE_ID);
      const templateId = getEnv(process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID);
      const publicKey = getEnv(process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY);

      setIsLoading(() => true);

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      clearInputs();

      setIsLoading(() => false);

      setSubmitMessage('Dziękujemy za wiadomość :)');
    } catch (e) {
      setIsLoading(() => false);
      setSubmitMessage('Ups, coś poszło nie tak. Spróbujmy jeszcze raz! :)');
      console.log(e);
    }
  }, [formRef, clearInputs]);

  return { isLoading, submitMessage, onSubmit };
};

export default useContactForm;
