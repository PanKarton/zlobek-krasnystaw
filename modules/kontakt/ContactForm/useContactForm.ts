import emailjs from '@emailjs/browser';
import { getEnvVariable } from 'helpers/getEnvVariable';
import React, { useCallback, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type State =
  | { isLoading: false; message: '' | 'Dziękujemy za wiadomość :)' | 'Ups, coś poszło nie tak. Spróbujmy jeszcze raz! :)' }
  | { isLoading: true; message: '' };

type NameTypes =
  | 'message'
  | 'from_name'
  | 'from_email'
  | ('message' | 'from_name' | 'from_email')[]
  | readonly ('message' | 'from_name' | 'from_email')[]
  | undefined;

export type FormValues = {
  from_name: string;
  from_email: string;
  message: string;
};

export const useContactForm = (formRef: React.RefObject<HTMLFormElement>) => {
  const [submitState, setSubmitState] = useState<State>({ isLoading: false, message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
    clearErrors,
  } = useForm<FormValues>({
    defaultValues: {
      from_name: '',
      from_email: '',
      message: '',
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  const handleClearErorrs = useCallback(
    (name: NameTypes) => {
      clearErrors(name);

      setSubmitState(() => ({ isLoading: false, message: '' }));
    },
    [clearErrors],
  );

  const onSubmit: SubmitHandler<FormValues> = useCallback(async () => {
    try {
      if (formRef.current === null) return;

      const serviceId = getEnvVariable(process.env.NEXT_PUBLIC_YOUR_SERVICE_ID);
      const templateId = getEnvVariable(process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID);
      const publicKey = getEnvVariable(process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY);

      setSubmitState({ isLoading: true, message: '' });

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      setSubmitState(() => ({ isLoading: false, message: 'Dziękujemy za wiadomość :)' }));
    } catch (e) {
      setSubmitState(() => ({ isLoading: false, message: 'Ups, coś poszło nie tak. Spróbujmy jeszcze raz! :)' }));
    }
  }, [formRef]);

  return {
    submitState,
    errors,
    isSubmitSuccessful,
    onSubmit,
    handleClearErorrs,
    register,
    handleSubmit,
    reset,
    clearErrors,
  };
};
