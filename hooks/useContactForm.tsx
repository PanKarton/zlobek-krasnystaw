import emailjs from '@emailjs/browser';
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

  // Clear inputs function
  const clearInputs = useCallback(() => {
    // Return if any ref.current is null
    if (nameInputRef.current === null || emailInputRef.current === null || messageTextAreaRef.current === null) return;

    nameInputRef.current.value = '';
    emailInputRef.current.value = '';
    messageTextAreaRef.current.value = '';
  }, [nameInputRef, emailInputRef, messageTextAreaRef]);

  //   Submit function that sends email and clears inputs
  const onSubmit: SubmitHandler<FormValues> = useCallback(async () => {
    try {
      // Return if any ref.current is null
      if (formRef.current === null) return;

      // Start loading animation
      setIsLoading(() => true);
      // env data
      const serviceId = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID as string;
      const templateId = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID as string;
      const publicKey = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY as string;

      //   Send email
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      //   Clear inputs
      clearInputs();

      // Stop loading animation
      setIsLoading(() => false);

      // Display confirmation message
      setSubmitMessage('Dziękujemy za wiadomość :)');
    } catch (err) {
      // Stop loading animation
      setIsLoading(() => false);

      // Display error message
      setSubmitMessage('Ups, coś poszło nie tak. Spróbujmy jeszcze raz! :)');
    }
  }, [formRef, clearInputs]);

  return { isLoading, submitMessage, onSubmit };
};

export default useContactForm;
