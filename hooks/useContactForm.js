import emailjs from '@emailjs/browser';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

const useContactForm = (formRef, nameInputRef, emailInputRef, messageTextAreaRef) => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const { register, handleSubmit } = useForm();

  // Clear inputs function
  const clearInputs = useCallback(() => {
    nameInputRef.current.value = '';
    emailInputRef.current.value = '';
    messageTextAreaRef.current.value = '';
  }, [nameInputRef, emailInputRef, messageTextAreaRef]);

  //   Submit function that sends email and clears inputs
  const onSubmit = useCallback(async () => {
    try {
      // Start loading animation
      setIsLoading(() => true);
      // env data
      const serviceId = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY;

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

  return { isLoading, submitMessage, register, handleSubmit, onSubmit };
};

export default useContactForm;
