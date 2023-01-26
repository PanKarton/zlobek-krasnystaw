import emailjs from '@emailjs/browser';
import { getEnvVariable } from 'helpers/getEnvVariable';
import React, { useCallback, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export type FormValues = {
  from_name: string;
  from_email: string;
  message: string;
};

type MessageState = '' | 'Dziękujemy za wiadomość! :)' | 'Ups! Coś poszło nie tak, spróbuj ponownie! :)';

export const useContactForm = (formRef: React.RefObject<HTMLFormElement>) => {
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      from_name: '',
      from_email: '',
      message: '',
    },
  });

  const [submitMessage, setSubmitMessage] = useState<MessageState>('');

  useEffect(() => {
    if (isSubmitSuccessful) reset();
    setTimeout(() => {
      setSubmitMessage('');
    }, 4000);
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<FormValues> = useCallback(async () => {
    try {
      if (formRef.current === null) return;

      const serviceId = getEnvVariable(process.env.NEXT_PUBLIC_EMAILJS_YOUR_SERVICE_ID);
      const templateId = getEnvVariable(process.env.NEXT_PUBLIC_EMAILJS_YOUR_TEMPLATE_ID);
      const publicKey = getEnvVariable(process.env.NEXT_PUBLIC_EMAILJS_YOUR_PUBLIC_KEY);

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      setSubmitMessage('Dziękujemy za wiadomość! :)');
    } catch {
      setSubmitMessage('Ups! Coś poszło nie tak, spróbuj ponownie! :)');
    }
  }, [formRef]);

  return {
    errors,
    isSubmitting,
    submitMessage,
    onSubmit,
    register,
    handleSubmit,
    reset,
    clearErrors,
  };
};
